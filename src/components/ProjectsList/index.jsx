import ProjectDetail from "src/components/ProjectDetail"
import getProjects from "src/services/getProjects"
import { useEffect, useState } from "react"

export const ProjectsList = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then((projects) => setProjects(projects))
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
