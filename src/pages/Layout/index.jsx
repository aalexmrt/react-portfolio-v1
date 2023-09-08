import Header from "src/components/Header"
import Footer from "src/components/Footer"
import { Outlet } from "react-router-dom"
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header ></Header>
      <div className="grow"><Outlet /></div>
      <Footer></Footer>
    </div>
  )
}
export default Layout
