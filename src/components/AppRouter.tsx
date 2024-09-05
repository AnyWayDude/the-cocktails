import { Routes, Route, Navigate } from "react-router-dom";
import OrdinaryPage from "../pages/OrdinaryPage";
import CocktailDetailsPage from "../pages/CocktailDetailsPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<OrdinaryPage />} />
      <Route path="/cocktail/:id" element={<CocktailDetailsPage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
