import Intro from 'src/components/Intro'
import userInfo from 'src/data/userInfo.json'
import Projects from 'src/components/Projects'
import ContactForm from 'src/components/ContactForm'
import About from 'src/components/About'
export const Main = () => {
  const { greeting, title, description, skillsImg } = userInfo

  return (
    <>

      <Intro greeting={greeting} title={title} description={description} skillsImgList={skillsImg}></Intro>
      <About></About>
      <Projects />
      <ContactForm />
    </>

  )
}

export default Main
