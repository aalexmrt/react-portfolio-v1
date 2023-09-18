import React from "react"
import { motion } from "framer-motion"

import "./index.css"
export const ProjectDetail = ({
  name,
  description,
  imgRef,
  techStack,
  gitUrl,
}) => {
  let boxVariants = {}
  const isMobile = window.innerWidth < 768 // Add the width you want to check for here (now 768px)
  if (!isMobile) {
    boxVariants = {
      hover: {
        scale: 1.05,
      },
      tab: {
        scale: 1.2,
      },
    }
  }
  return (
    <motion.a
      target="_blank"
      href={gitUrl}
      variants={boxVariants}
      whileHover="hover"
      whileTap="tab"
      rel="noreferrer"
      className="project-detail-container"
    >
      <figure className="flex h-min flex-row   ">
        <div>
          <h4 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            {name} <span> </span>
          </h4>
          <p className="mt-4 text-xl md:text-2xl">{description}</p>
          <div className="mt-4 flex flex-wrap gap-x-16 gap-y-2 text-lg">
            {techStack
              ? techStack.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-full "
                  >
                    <img
                      className="h-[1.5rem] w-[1.5rem]"
                      src={item.icon}
                    ></img>
                    <p className="text-sm text-[var(--default-color)] xs:text-base md:text-lg">
                      {item.name}
                    </p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </figure>
    </motion.a>
  )
}

export default ProjectDetail
