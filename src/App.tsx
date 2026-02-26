import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import FormValidation from "./components/FormValidation";
import ItemList from "./components/ItemList";

export default function App() {
  const [view, setView] = useState("counter");

  return (
    <>
      <Header />

      <Navbar view={view} setView={setView} />

      <div className="container">
        {view === "counter" && <Counter />}
        {view === "form" && <FormValidation />}
        {view === "list" && <ItemList />}
      </div>
    </>
  );
}