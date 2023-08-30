import workingEmoji from "src/assets/myself_emoji.png"
const iconsSource = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"
export const Intro = ({ greeting, title, description, skillsImgList }) => {
  return (

    <section id="home" className=" w-100 md:h-[90vh]  items-start ml-16 mr-16 pt-40 flex flex-wrap">
      <h1 className="basis-full font-black text-center text-4xl -mt-32">👷‍♂️ under construction 🚧</h1>
      <div className=" basis-2/4">
        {/* <h2 className=" tracking-tight font-black text-3xl mt-6 mb-4">{title}</h2> */}

        <h1 className="flex font-black text-8xl pb-12 tracking-tight min-w-min">Full Stack Developer</h1>
        <p className="text-lg pb-8">{description}</p>
        <div className='flex basis-full gap-4 items-start flex-wrap'>
          {skillsImgList
            ? skillsImgList.map((skill, key) => (
              <div key={key} className='flex overflow-hidden justify-center bg-[#e3e5e609] shadow-lg rounded-full w-12 h-12'>
                <img className="w-8/12 " src={`${iconsSource}/${skill}`} />
              </div>
            ))
            : console.log("Error loading skills...")}
        </div>
      </div>
      <div className='flex -mt-8 pl-40 basis-2/4'>
        <img className="mt-0 w-8/12 " src={workingEmoji}></img>

      </div>
    </section>
  )
}

export default Intro
