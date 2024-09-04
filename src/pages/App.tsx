import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter.js";
import Header from "./fixed/Header.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
