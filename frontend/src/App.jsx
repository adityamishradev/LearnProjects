import { Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Policy from "./pages/Policy.jsx";
import Pagenotfound from "./pages/Pagenotfound.jsx";
import Home from "./pages/Home.jsx";
const App = () => {
  return (
  <Routes>
      <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<Pagenotfound />} />
    </Routes>
  )
}

export default App