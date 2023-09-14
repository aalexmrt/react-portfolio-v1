export const Footer = () => {
  return (
    <ul className="flex h-[4rem] items-center justify-center text-[0.8em] sm:justify-between xl:text-[1rem]">
      <li className="hidden sm:block">
        📍 <strong>Spain</strong>
      </li>
      <li className="align-center">
        Made with <span className="text-lg">🥰</span> by{" "}
        <a
          target="_blank"
          className="underline"
          href="https://github.com/aalexmrt"
          rel="noreferrer"
        >
          aalexmrt
        </a>
      </li>
      <li className="hidden sm:block">
        <strong>© 2023 All Right Reserved</strong>
      </li>
    </ul>
  )
}

export default Footer
