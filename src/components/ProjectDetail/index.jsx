import React from "react"

export const ProjectDetail = ({ name, description, imgRef, techStack, gitUrl }) => {
  const { tech_stack: skills } = techStack
  return (
    <div className="grid">
      <h4 className="text-3xl font-bold tracking-tight mt-6">{name}</h4>
      <img className="border-2 rounded-lg border-[#b4b4b4] mt-6" src={imgRef} />
      <p className="text-base md:text-lg mt-4">{description}</p>
      <div className="flex flex-wrap gap-x-2 mt-4">
        <div className="flex items-baseline gap-1 bg-[#dbdbdb3d] rounded-full px-3 py-1">
          <img className="h-4 w-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"></img>
          <p className="text-base md:text-lg">Python</p>
        </div>
        <div className="flex items-baseline gap-1 bg-[#dbdbdb3d] rounded-full px-3 py-1">
          <img className="h-4 w-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"></img>
          <p className="text-base md:text-lg">Javascript</p>
        </div>
        {/* {skills
          ? skills.map((item, key) => {
            console.log(item)
            return <div className="flex gap-1" key={key}><span >{item.key}</span><img className="" src=""></img></div>
          })
          : null} */}
      </div>
    </div>

  )
}

export default ProjectDetail
