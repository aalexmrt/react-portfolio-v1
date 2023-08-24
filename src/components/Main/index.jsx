import './index.css'

import { Intro } from 'src/components/Intro'
import userInfo from 'src/data/userInfo.json'
import { ProjectList } from 'src/components/ProjectList'

export const Main = () => {
  const { title, description, skillsImg } = userInfo

  return (
    <main className='mx-auto'>

      <Intro title={title} description={description} skillsImgList={skillsImg}></Intro>
      <ProjectList />

    </main>
  )
}
