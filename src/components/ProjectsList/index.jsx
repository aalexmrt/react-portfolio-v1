import ProjectDetail from "src/components/ProjectDetail"
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
      className="grid gap-5 md:min-h-[calc(100vh-12rem)] xl:mt-0"
    >
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl xl:pt-4 xl:text-7xl">
        Projects
      </h1>
      <div className="grid gap-[2rem] md:grid-cols-2 ">
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
