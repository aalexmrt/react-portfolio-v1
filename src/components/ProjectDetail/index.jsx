import React from "react"

export const ProjectDetail = ({ name, description, imgRef, techStack, gitUrl }) => {
  const { tech_stack: skills } = techStack
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border-4 md:p-8 pb-14 md:mt-8 border-[#b4b4b4] bg-[#8b8b8b11]" >
      <h4 className="text-3xl font-bold tracking-tight mt-6 md:mt-3">{name}</h4>
      <div className="w-100 md:h-[16rem] overflow-hidden  mt-6">
        <img className="w-full" src={imgRef} />
      </div>
      <p className="text-base md:text-lg mt-4">{description}</p>
      <div className="flex flex-wrap justify-evenly gap-x-2 mt-4">
        <div className="flex items-baseline gap-1 bg-[#dbdbdb] rounded-full px-3 py-1">
          <img className="h-4 w-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"></img>
          <p className="text-sm font-semibold">Python</p>
        </div>
        <div className="flex items-baseline gap-1 bg-[#dbdbdb] rounded-full px-3 py-1">
          <img className="h-4 w-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"></img>
          <p className="text-sm font-semibold">Javascript</p>
        </div>
        <div className="flex items-baseline gap-1 bg-[#dbdbdb] rounded-full px-3 py-1">
          <img className="h-4 w-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"></img>
          <p className="text-sm font-semibold">Javascript</p>
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
