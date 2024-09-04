import "./styles/styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";
import App from "./pages/App.tsx";
import { store } from "./store/store.ts";


createRoot(document.querySelector("#root") as HTMLElement).render(
  <StrictMode>
    <StoreProvider store={store.instance}>
      <App />
    </StoreProvider>
  </StrictMode>
);
