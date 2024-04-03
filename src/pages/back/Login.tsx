import { ChangeEvent, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

interface InputProps {
  name: string;
  password: string;
}

// const BASE_URL = "http://localhost:8080/api";
const BASE_URL = "https://heraldry.design/api/";

export const Login = () => {
  const [input, setInput] = useState<InputProps>({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("token")) navigate("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response: AxiosResponse = await axios({
        method: "post",
        url: `${BASE_URL}/user/login`,
        headers: {
          "Content-Type": "application/json",
          Accept: "Application/json",
        },
        data: input,
      });

      if (response.data)
        Cookies.set("token", response.data.token, {
          expires: 31,
        });
      setTimeout(() => {
        if (Cookies.get("token")) navigate("/dashboard");
      }, 1000);

      return response.data;
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
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg p-6 bg-gray-500 border border-black rounded-lg shadow text-black">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 text-center">
          Login
        </h5>
        <div className="flex flex-col max-w-full mx-10 space-y-6">
          <form onSubmit={handleSubmit} action="POST">
            <div className="my-4 space-y-2">
              <label
                htmlFor="name"
                className="block mb-2 text-lg font-medium text-white text-center"
              >
                Enter Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={input.name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-6"
                placeholder="Name"
                required
              />

              <label
                htmlFor="password"
                className="block mb-2 text-lg font-medium text-white text-center"
              >
                Enter Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-6"
                placeholder="Password"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
