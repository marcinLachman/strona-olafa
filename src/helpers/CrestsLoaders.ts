import { json } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import type { Crests } from "../models/CrestModels";

const BASE_URL = "http://localhost:8080/api";
// const BASE_URL = "https://coatofarms.design/api";

export const loader = async () => {
  const getCrestData = async () => {
    try {
      const response: AxiosResponse = await axios.get(BASE_URL);

      const responseData: Crests[] = response.data;

      return responseData;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors

        console.error("Axios error:", error.message);
      } else {
        // Handle general errors
        if (error instanceof Error) {
          console.error("General error:", error.message);
        }
      }
    }
    const crests = (await getCrestData()) as Crests[];
    return json({ crests });
  };
  const crests = await getCrestData();
  return json({ crests });
};
