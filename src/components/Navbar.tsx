import type { Props } from "../types/formTypes";

export default function Navbar({ view, setView }: Props) {
  return (
    <div className="nav">
      <button
        className={view === "counter" ? "active" : ""}
        onClick={() => setView("counter")}
      >
        Counter
      </button>

      <button
        className={view === "form" ? "active" : ""}
        onClick={() => setView("form")}
      >
        Form Validation
      </button>

      <button
        className={view === "list" ? "active" : ""}
        onClick={() => setView("list")}
      >
        List Rendering
      </button>
    </div>
  );
}