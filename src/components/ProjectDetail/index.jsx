import React from "react"

export const ProjectDetail = ({
  name,
  description,
  imgRef,
  techStack,
  gitUrl,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border-4 border-[#b4b4b4] bg-[#8b8b8b11] p-4 pb-14 md:mt-8 md:p-8">
      <h4 className="mt-3 text-3xl font-bold tracking-tight">{name}</h4>
      <div className="w-100 mt-6 overflow-hidden md:h-[16rem]">
        <img className="w-full" src={imgRef} />
      </div>
      <p className="mt-4 text-base md:text-lg">{description}</p>
      <div className="mt-4 flex flex-wrap justify-evenly gap-x-2 gap-y-2">
        {techStack
          ? techStack.map((item, index) => (
              <div
                key={index}
                className="flex items-baseline gap-1 rounded-full bg-[#dbdbdb] px-3 py-1"
              >
                <img className="h-4 w-4" src={item.icon}></img>
                <p className="text-sm font-semibold">{item.name}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default ProjectDetail
