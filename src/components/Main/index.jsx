import Home from "src/components/Home"
import ContactForm from "src/components/ContactForm"
import About from "src/components/AboutMe"
import ProjectsList from "src/components/ProjectsList"

export const Main = () => {
  return (
    <>
      <Home></Home>
      <About></About>
      <ProjectsList></ProjectsList>
      <ContactForm />
    </>

  )
}

export default Main
