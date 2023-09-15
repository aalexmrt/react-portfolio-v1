import ProjectDetail from "src/components/ProjectDetail"
import projectsInfo from "src/data/projectsInfo.json"

export const ProjectsList = () => {
  const projects = projectsInfo

  return (
    <section className="projects">
      <h1 className="title-section">Projects</h1>
      <div className="projects-container">
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
