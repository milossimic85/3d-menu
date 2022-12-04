import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import "boxicons/css/boxicons.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/contact" element={<Contact />} />
          <Route index element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
