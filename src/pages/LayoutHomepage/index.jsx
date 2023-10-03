import Footer from "src/components/Footer"
import { Outlet } from "react-router-dom"
import { NavBar } from "src/components/NavBar"
import { useState, useEffect } from "react"
import { useSectionsObserver } from "src/hooks/useSectionsObserver"
import "./index.css"
import { useResponsive } from "src/hooks/useResponsive"

const LayoutHome = ({ children }) => {
  const [, setSections] = useState(null)
  const { intersectedSection, createObserver } = useSectionsObserver()
  const { isResponsive } = useResponsive()

  useEffect(() => {
    const newSections = document.querySelectorAll("section")
    setSections(newSections)
    createObserver(newSections, isResponsive ? 0.2 : 0.45)
  }, [isResponsive])

  return (
    <div className="layout-homepage">
      <header>
        <NavBar intersectedSection={intersectedSection}></NavBar>
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

export default LayoutHome
