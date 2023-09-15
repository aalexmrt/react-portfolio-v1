import React from "react"
import { motion } from "framer-motion"
export const ProjectDetail = ({
  name,
  description,
  imgRef,
  techStack,
  gitUrl,
}) => {
  return (
    <figure className="flex h-min flex-row rounded-xl bg-neutral-100 px-4 py-8 pl-8  ">
      <div>
        <h4 className="mt-3 text-4xl font-bold tracking-tight">
          {name}{" "}
          <span>
            {" "}
            <a
              target="_blank"
              href={gitUrl}
              className="inline-flex items-center text-blue-600 hover:underline"
              rel="noreferrer"
            >
              <svg
                className="ml-2.5 h-4 w-4 lg:h-5 lg:w-5"
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
            </a>
          </span>
        </h4>
        <p className="mt-4 text-base md:text-2xl">{description}</p>
        <div className="mt-4 flex flex-wrap gap-x-16 gap-y-2 text-lg">
          {techStack
            ? techStack.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full "
                >
                  <img className="h-[1.5rem] w-[1.5rem]" src={item.icon}></img>
                  <p className=" font-semibold">{item.name}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </figure>
  )
}

export default ProjectDetail
