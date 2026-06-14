import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { useTheme } from "@/hooks/useTheme";

function ThemeProvider() {
  useTheme();
  return null;
}

export default function App() {
  return (
    <Router>
      <ThemeProvider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<div className="text-center text-xl text-stone-800 dark:text-stone-200">Other Page - Coming Soon</div>} />
      </Routes>
    </Router>
  );
}
