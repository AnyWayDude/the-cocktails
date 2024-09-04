import { Routes, Route, Navigate } from "react-router-dom";
import OrdinaryPage from "./OrdinaryPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<OrdinaryPage />} />
      <Route path="/drink/:id" />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
