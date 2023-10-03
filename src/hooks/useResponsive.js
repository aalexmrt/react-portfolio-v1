import { useState, useEffect } from "react"

const RESPONSIVE_SCREEN_VALUE = 768

export function useResponsive() {
  const [isResponsive, setIsResponsive] = useState(
    window.innerWidth <= RESPONSIVE_SCREEN_VALUE,
  )

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= RESPONSIVE_SCREEN_VALUE)
    }

    window.addEventListener("resize", handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { isResponsive }
}
