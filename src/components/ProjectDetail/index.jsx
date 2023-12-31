import React from "react"
import { motion } from "framer-motion"

import "./index.css"
export const ProjectDetail = ({
  name,
  description,
  imgRef,
  techStack,
  projectUrl,
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
      href={projectUrl}
      variants={boxVariants}
      whileHover="hover"
      whileTap="tab"
      rel="noreferrer"
      className="project-detail-container"
    >
      <figure className="flex h-min flex-row   ">
        <div>
          <h4 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            {name}{" "}
            <span>
              {" "}
              <svg
                className="hyperlink-icon ml-2.5 inline-flex h-4 w-4 items-center hover:underline lg:h-5 lg:w-5 xl:h-6 xl:w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </span>
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
