import workingEmoji from 'src/assets/working_emoji.png'
import greetingEmoji from 'src/assets/myself_emoji.png'
const iconsSource = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'
export const Intro = ({ greeting, title, description, skillsImgList }) => {
  return (
    <section className="w-100 h-[87vh] bg-neutral-50 items-start pl-16 pr-16 pt-32 gap-8 flex flex-wrap">
      <div className=" bg-neutral-100 basis-6/12 ">
        <h1 className="flex inline-flex items-baseline bg-neutral-250 font-black text-5xl mt-6 mb-4"><img className="w-14 mr-2 self-center" src={greetingEmoji}></img>Hi, my name is <br></br>Alex Martinez</h1>
        <h2 className=" tracking-tight font-black text-3xl mt-6 mb-4">{title}</h2>
        <p className="">{description}</p>
        <div className='flex basis-full mt-12 gap-2 justify-center flex-wrap sm:order-2 md:order-2'>
          {skillsImgList
            ? skillsImgList.map((skill, key) => (
              <div key={key} className='overflow-hidden    rounded-full w-16 p-1 '>
                <img src={`${iconsSource}/${skill}`} />
              </div>
            ))
            : console.log(skillsImgList)}
        </div>
      </div>

      <img className="w-60" src={workingEmoji}></img>

    </section>
  )
}

export default Intro
