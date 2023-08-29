import ProjectDetail from "src/components/ProjectDetail"
import projectsInfo from "src/data/projectsInfo.json"

export const Projects = () => {
  const projectList = []

  projectsInfo.forEach((project, key) => {
    console.log(project.title, "this is the key", key)
    projectList.push(<ProjectDetail key={key} title={project.title} description={project.description} imgURL={project.imgURL} gitURL={project.gitURL}/>)
  })

  return (
    <section id="projects" className="w-100 items-start ml-16 mr-16 flex flex-wrap">
      <h1 className='font-bold text-4xl mt-[18px] mb-4'>Projects</h1>
      <div className="flex flex-wrap gap-8">
        {projectList}
      </div>
    </section>
  )
}

export default Projects
