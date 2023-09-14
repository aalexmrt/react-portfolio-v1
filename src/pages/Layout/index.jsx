import Footer from "src/components/Footer"
import { Outlet } from "react-router-dom"
import { NavBar } from "src/components/NavBar"

const Layout = ({ children }) => {
  return (
    <div className="grid min-h-[100vh] grid-rows-layout">
      <header className="fixed top-0 z-50 w-full bg-[#e3e5e6] px-8 py-5 sm:px-20 lg:px-40  xl:h-[5rem]">
        <NavBar></NavBar>
      </header>
      <main className="mx-8 sm:mx-20 lg:mx-40 lg:mt-[5rem]">
        <Outlet></Outlet>
      </main>
      <footer className="bg-[#e3e5e6] px-8 py-5 sm:px-20 lg:px-40 xl:h-[6rem]">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Layout
// w-full bg-[#e3e5e6] py-5 lg:px-40 fixed top-0 left-0 z-50

// mx-8 lg:mx-40

// w-full bg-[#e3e5e6] py-5 lg:px-40 mx-8 lg:mx-40
