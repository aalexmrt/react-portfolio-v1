import { NavBar } from "src/components/NavBar"

const NAVSECTIONS = [
  { route: "/", name: "Home" },
  { route: "/about", name: "About" },
  { route: "/projects", name: "Projects" },
  { route: "/contact", name: "Contact" }
]

export const Header = () => {
  return (
    <header className='w-full bg-[#e3e5e6] py-5 min-w-[320px] fixed top-0 left-0 z-50'>
      <NavBar navSections={ NAVSECTIONS }></NavBar>
    </header>
  )
}

export default Header
