import { NavBar } from 'src/components/NavBar'

const SECTIONS = ['home', 'about', 'projects', 'contact']

export const Header = () => {
  return (
    <header className='bg-[#e3e5e6] border-b sticky top-0 z-50'>
      <NavBar SECTIONS={SECTIONS}></NavBar>
    </header>
  )
}

export default Header
