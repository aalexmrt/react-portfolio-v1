import { BrowserRouter, Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header className=' border-slate-200 border-4 '>
      <div className='flex h-14 from-cyan-500 to-blue-500 justify-center items-center bold'>
        <nav>
          <BrowserRouter>
            <ul className="flex items-center gap-4">
              <li><Link to ="/">Home</Link></li>
              <li><Link to ="/about">About</Link></li>
              <li><Link to ="/projects">Projects</Link></li>
              <li><Link to ="/projects">Contact</Link></li>
            </ul>
          </BrowserRouter>
        </nav>
      </div>
    </header>
  )
}
