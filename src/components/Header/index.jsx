import { NavBar } from "src/components/NavBar"

const SECTIONS = ["home", "about", "projects", "contact"]

export const Header = () => {
  return (
    <header className='w-full bg-[#e3e5e6] py-5 min-w-[320px] fixed top-0 left-0 z-50'>
      <NavBar SECTIONS={SECTIONS}></NavBar>
    </header>
  )
}

export default Header
