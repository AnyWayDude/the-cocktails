import { BrowserRouter } from "react-router-dom";
import AppRouter from "../components/AppRouter.js";
import Header from "../components/Header.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
