import { useState, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import "./styles.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { UsersProvider } from "./context/UsersProvider";
import ErrorFallback from "./components/ErrorFallback";

// Lazy-loaded components
const Counter = lazy(() => import("./components/Counter"));
const FormValidation = lazy(() => import("./components/FormValidation"));
const ItemList = lazy(() => import("./components/ItemList"));

export default function App() {
  const [view, setView] = useState("counter");

  return (
    <UsersProvider>
      <Header />
      <Navbar view={view} setView={setView} />

      <div className="container">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          // onReset={() => setView("counter")}
          resetKeys={[view]}
        >
          <Suspense fallback={<h3>Loading...</h3>}>
            {view === "counter" && <Counter />}
            {view === "form" && <FormValidation />}
            {view === "list" && <ItemList />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </UsersProvider>
  );
}