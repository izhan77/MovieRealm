import AllRouting from "./AllRouting";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <AllRouting />
      </main>

      <Analytics />
    </>
  );
}

export default App;
