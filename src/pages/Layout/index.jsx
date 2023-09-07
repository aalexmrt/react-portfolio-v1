import Header from "src/components/Header"
import Footer from "src/components/Footer"
import { Outlet } from "react-router-dom"
const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  )
}
export default Layout
