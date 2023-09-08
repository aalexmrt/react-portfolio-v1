export const Footer = () => {
  return (
    <footer className="w-full bg-[#e3e5e6] py-5 min-w-[320px] max-h-[4em] mt-14">
      <ul className="flex h-full justify-center sm:justify-between items-center px-8 md:px-0 md:mx-16 text-[0.8em]">
        <li className="hidden sm:block">📍 <strong>Spain</strong></li>
        <li className="align-center">Made with <span className="text-lg">🥰</span> by <a target="_blank" className="underline" href="https://github.com/aalexmrt" rel="noreferrer">aalexmrt</a></li>
        <li className="hidden sm:block"><strong>© 2023 All Right Reserved</strong></li>
      </ul>
    </footer>
  )
}

export default Footer
