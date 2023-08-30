import React from "react"

export const ProjectDetail = ({ name, description, imgRef, techStack, gitUrl }) => {
  return (

    <a className="flex border-2 rounded-lg p-4 basis-full" target="_blank" rel="noopener noreferrer" href={gitUrl}>
      <div className="w-[400px]">
        <img className="flex  object-cover object-center border-b border-solid" src={imgRef} />
      </div>
      <div className="flex basis-full flex-col items-end">
        <div className="flex flex-col items-end basis-full content-start">
          <h4 className="basis-full text-2xl font-bold text-black">{name}
          </h4>
          <p className=" max-w-prose text-gray-500 ">{description}</p>
        </div>
        <div className="flex basis-full">

          <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

          <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

          <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

        </div>
      </div>

    </a>

  )
}

export default ProjectDetail
