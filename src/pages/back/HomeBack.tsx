import { Outlet } from "react-router-dom";

export const HomeBack = () => {
  return (
    <>
      <p>test</p>
      <main className="flex-grow container h-screen mx-auto">
        <Outlet />
      </main>
    </>
  );
};
