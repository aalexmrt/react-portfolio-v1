import { Project } from 'src/components/Project'
import projectsInfo from 'src/data/projectsInfo.json'

export const ProjectList = () => {
  const projectList = []

  projectsInfo.forEach((project, key) => {
    console.log(project.title, 'this is the key', key)

    projectList.push(<Project key={key} title={project.title} description={project.description} imgURL={project.imgURL} gitURL={project.gitURL}/>)
  })

  return (
    <section className='w-full flex flex-wrap mt-20'>
      <h1 className='font-bold font-sans subpixel-antialiased w-full text-center text-4xl'>Projects</h1>
      <div className="flex gap-12 justify-between flex-wrap m-4 ">
        {projectList}
      </div>
    </section>
  )
}
