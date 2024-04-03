import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const { state } = useNavigation();

  if (state === "loading") {
    return <h1 className="text-4xl text-red-500">Loading</h1>;
  }
  return (
    <>
      <Header />
      <main className="flex-grow container h-screen mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
