import Home from "src/components/Home"
import userInfo from "src/data/userInfo.json"
import ContactForm from "src/components/ContactForm"
import About from "src/components/AboutMe"
import Projects from "src/components/ProjectList"
export const Main = () => {
  const { greeting, title, description, skillsImg } = userInfo

  return (
    <main className=''>
      <Home greeting={greeting} title={title} description={description} skillsImgList={skillsImg}></Home>
      <About></About>
      <Projects></Projects>
      <ContactForm />
    </main>

  )
}

export default Main
