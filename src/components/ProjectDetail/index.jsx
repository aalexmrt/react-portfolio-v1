import React from "react"

export const ProjectDetail = ({ name, description, imgRef, techStack, gitUrl }) => {
  const { tech_stack: skills } = techStack
  return (
    <div className="grid">
      <h4 className="text-2xl font-bold pb-4">{name}</h4>
      <img className="border-solid" src={imgRef} />
      <p className="text-base md:text-lg pb-2">{description}</p>
      <div className="flex flex-wrap gap-1 pb-8">
        <div className="flex items-baseline gap-1">
          <img className="h-4 w-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"></img>
          <span className="text-base md:text-lg">Python</span>
        </div>
        <div className="flex items-baseline gap-1">
          <img className="h-4 w-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"></img>
          <span className="text-base md:text-lg">Javascript</span>
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
