import './index.css'
import profileImg from '../../assets/profile.jpeg'

const iconsSource = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export const Intro = ({ title, description, skillsImgList }) => {
  return (
    <section className="border-2 border-zinc-200 justify-center items-center gap-12 mt-16 intro flex flex-row flex-wrap">
      <div className="basis-6/12 border-2 border-blue-200 min-w-min py-4">
        <h1 className="font-black font-sans subpixel-antialiased text-2xl mt-6 mb-4">{title}</h1>
        <p className="font-sans">{description}</p>
      </div>
      <div className='flex basis-full gap-4 justify-center flex-wrap sm:order-2 md:order-2'>
        {skillsImgList
          ? skillsImgList.map((skill, key) => (
            <div key={key} className='overflow-hidden border  border-zinc-900 rounded-full w-16 p-1 '>
              <img src={`${iconsSource}/${skill}`} />
            </div>
          ))
          : console.log(skillsImgList)}
      </div>
      <div className='border-2 border-zinc-600 min-w-min justify-items-center'>
        <div className='overflow-hidden shadow object-cover rounded-full w-96 h-96 '>
          <img className="inline mr-2 rounded-full -translate-y-14 " src={profileImg} alt="Profile image"/>
        </div>
      </div>

    </section>
  )
}
