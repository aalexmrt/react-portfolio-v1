import Footer from "src/components/Footer"
import { Outlet } from "react-router-dom"
import { NavBar } from "src/components/NavBar"

import "./index.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Layout
