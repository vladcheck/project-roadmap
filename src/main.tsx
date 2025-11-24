import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AddTechnologyPage,
  HomePage,
  SettingsPage,
  StatisticsPage,
  TechnologyListPage,
} from "./pages";
import "./global.css";
import Layout from "./Layout";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<Layout />}>
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/technologies" element={<TechnologyListPage />} />
            <Route path="/add-technology" element={<AddTechnologyPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  );
}
