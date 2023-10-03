import { useState } from "react"

export function useSectionsObserver() {
  const [intersectedSection, setIntersectedSection] = useState(null)

  const createObserver = (sections, threshold) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setIntersectedSection(entry.target.getAttribute("id"))
          }
        })
      },
      { threshold: [threshold] },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })
    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect()
    }
  }

  return { intersectedSection, createObserver }
}
