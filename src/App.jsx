import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Search from "./components/HeaderSearch/HeaderSearch";
import Login from "./pages/Artissans/Login";
import Signup from "./pages/Artissans/Signup";
import Signups from "./pages/Customer/Signups";
import Logins from "./pages/Customer/Logins";

function App() {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
          </Route>

          <Route path="/artissans/login" element={<Login />} />
          <Route path="/artissans/signup" element={<Signup />} />
          <Route path="/customer/logins" element={<Logins />} />
          <Route path="/customer/signups" element={<Signups />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
