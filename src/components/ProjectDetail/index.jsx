import React from "react"
import { motion } from "framer-motion"
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
    >
      <figure className="flex h-min flex-row rounded-xl border-[0.4rem] border-[var(--accent-color)] bg-[var(--primary-color)] px-4 py-8 pl-8  ">
        <div>
          <h4 className="mt-3 text-4xl font-bold tracking-tight">
            {name} <span> </span>
          </h4>
          <p className="mt-4 text-base md:text-2xl">{description}</p>
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
                    <p className="text-[var(--default-color)]">{item.name}</p>
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
