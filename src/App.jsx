import "./App.css"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"
import NotFound from "./pages/NotFound"
import Projects from "./pages/Projects"
import LayoutHome from "./pages/LayoutHomepage"

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LayoutHome />}>
        <Route index element={<Home />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}

export default App
