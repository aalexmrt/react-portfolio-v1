import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"

import NotFound from "./pages/NotFound"
import LayoutHome from "./pages/LayoutHomepage"

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LayoutHome />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
