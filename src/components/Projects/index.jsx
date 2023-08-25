import ProjectDetail from 'src/components/ProjectDetail'
import projectsInfo from 'src/data/projectsInfo.json'

export const Projects = () => {
  const projectList = []

  projectsInfo.forEach((project, key) => {
    console.log(project.title, 'this is the key', key)
    projectList.push(<ProjectDetail key={key} title={project.title} description={project.description} imgURL={project.imgURL} gitURL={project.gitURL}/>)
  })

  return (
    <section className='w-full bg-neutral-50 h-[180vh] flex flex-wrap '>
      <h1 className='font-bold font-sans subpixel-antialiased w-full text-center text-4xl mt-[18px] mb-4'>Projects</h1>
      <div className="flex justify-center flex-wrap gap-16">
        {projectList}
      </div>
    </section>
  )
}

export default Projects
