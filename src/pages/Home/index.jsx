import Hero from "src/components/Hero"
import About from "../About"
import ProjectsList from "src/components/ProjectsList"
import ContactForm from "src/components/ContactForm"
const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      {/* <ProjectsList></ProjectsList> */}
      <ContactForm />
    </>
  )
}

export default Home
