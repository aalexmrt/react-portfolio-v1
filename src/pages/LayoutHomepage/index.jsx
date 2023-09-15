import Footer from "src/components/Footer"
import { Outlet } from "react-router-dom"
import { NavBar } from "src/components/NavBar"
import "./index.css"
const LayoutHome = ({ children }) => {
  return (
    <div className="layout-homepage">
      <header className="fixed left-0 top-0 z-50 grid h-[5.7rem] w-full bg-[#e3e5e6] px-8 sm:px-20 lg:px-[12rem]">
        <NavBar></NavBar>
      </header>
      <main className="mx-8 mt-[5.7rem] sm:mx-20 lg:mx-[12rem]">
        <Outlet></Outlet>
      </main>
      <footer className="grid h-[5rem] items-center bg-[#e3e5e6] px-8 sm:px-20 lg:px-40">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default LayoutHome
