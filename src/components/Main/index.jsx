import Intro from 'src/components/Intro'
import userInfo from 'src/data/userInfo.json'
import ContactForm from 'src/components/ContactForm'
import About from 'src/components/About'
import Projects from '../Projects'
export const Main = () => {
  const { greeting, title, description, skillsImg } = userInfo

  return (
    <main >
      <Intro greeting={greeting} title={title} description={description} skillsImgList={skillsImg}></Intro>
      <About></About>
      <Projects></Projects>
      <ContactForm />
    </main>

  )
}

export default Main
