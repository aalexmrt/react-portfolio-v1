import workingEmoji from "src/assets/myself_emoji.png"

const iconsSource = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"

export const Intro = ({ greeting, title, description, skillsImgList }) => {
  return (

    <section id="home" className="grid gap-1 mx-8 md:mx-16 mt-[4.3rem]">
      {/* <h1 className="basis-full font-black text-center text-2xl -mt-32">👷‍♂️ under construction 🚧</h1> */}

      <h1 className="font-black text-6xl antialiased  tracking-tighter min-w-min mt-8 ">Full Stack <br></br> Developer </h1>
      <div className="w-[60%] h-[100%] flex items-center ">
        <img className="" src={workingEmoji}></img>
      </div>
      <p className="text-xl mt-5 self-center">{description}</p>
      <div className='grid grid-cols-5 md:flex h-max gap-x-1 gap-y-6 mt-5'>
        {skillsImgList
          ? skillsImgList.map((skill, key) => (
            <div key={key} className='flex overflow-hidden justify-center bg-[#e3e5e609] shadow-lg drop-shadow-lg rounded-full w-12 h-12 sm:w-24 sm:h-24'>
              <img className="w-[82%] " src={`${iconsSource}/${skill}`} />
            </div>
          ))
          : console.log("Error loading skills...")}
      </div>

    </section>
  )
}

export default Intro
