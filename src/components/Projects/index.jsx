import ProjectDetail from "src/components/ProjectDetail"
import getProjects from "src/services/getProjects"
import { useEffect, useState } from "react"

export const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then(projects => setProjects(projects))
  }, [setProjects])

  return (
    <section id="projects" className="w-100 items-start ml-16 mr-16 flex flex-wrap">
      <h1 className='font-bold text-4xl mt-[18px] mb-4'>Projects</h1>
      <div className="flex flex-wrap gap-8">
        {projects
          ? projects.map((item, key) => {
            const { name, description, imgRef, gitUrl } = item
            return <ProjectDetail key={key} name={name} description={description} imgRef={imgRef} gitUrl={gitUrl}></ProjectDetail>
          })
          : null}
      </div>
    </section>
  )
}

export default Projects
