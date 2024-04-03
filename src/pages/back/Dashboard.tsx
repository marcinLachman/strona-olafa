import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("token")) navigate("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Dashboard</div>;
};
