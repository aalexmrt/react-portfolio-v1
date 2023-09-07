import ProjectDetail from "src/components/ProjectDetail"
import getProjects from "src/services/getProjects"
import { useEffect, useState } from "react"

export const ProjectList = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then(projects => setProjects(projects))
  }, [setProjects])

  return (
    <section id="projects" className="grid gap-5 overflow-hidden mx-8 md:mx-16 mt-[4.3rem]">
      <h1 className='font-bold text-5xl mt-8 tracking-tight'>Projects</h1>
      <div className="grid gap-3 md:grid-cols-2 md:gap-x-20 md:gap-y-8">
        {projects
          ? projects.map((item, key) => {
            const { name, description, imgRef, gitUrl, techStack } = item
            return <ProjectDetail key={key} name={name} description={description} imgRef={imgRef} gitUrl={gitUrl} techStack={techStack}></ProjectDetail>
          })
          : null}
      </div>
    </section>
  )
}

export default ProjectList
