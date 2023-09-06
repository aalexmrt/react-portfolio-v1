import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"
import ScrollToAnchor from "./components/ScrollToAnchor"
import { useEffect, useState } from "react"
import getProjects from "./services/getProjects"
import Footer from "./components/Footer"

function App () {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
