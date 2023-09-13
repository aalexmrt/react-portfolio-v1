import ProjectDetail from "src/components/ProjectDetail"
import getProjects from "src/services/getProjects"
import { useEffect, useState } from "react"
import projectsInfo from "src/data/projectsInfo.json"
export const ProjectsList = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setProjects(projectsInfo)
  }, [setProjects])
  return (
    <section
      id="projects"
      className="mt-[4.3rem] grid gap-5 overflow-hidden xl:mt-0"
    >
      <h1 className="mt-8 text-5xl font-bold tracking-tight">Projects</h1>
      <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-3 md:gap-x-20 md:gap-y-8">
        {projects
          ? projects.map((item, key) => {
              console.log(item, "this is item")
              const { name, description, imgRef, gitUrl, techStack } = item
              return (
                <ProjectDetail
                  key={key}
                  name={name}
                  description={description}
                  imgRef={imgRef}
                  gitUrl={gitUrl}
                  techStack={techStack}
                ></ProjectDetail>
              )
            })
          : null}
      </div>
    </section>
  )
}

export default ProjectsList
