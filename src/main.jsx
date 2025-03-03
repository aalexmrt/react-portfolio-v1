import { Analytics } from "@vercel/analytics/react"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./utils/ScrollToTop"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Analytics />
    <App />
  </BrowserRouter>,
)
