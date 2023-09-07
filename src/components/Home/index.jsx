import workingEmoji from "src/assets/myself_emoji.png"

const iconsSource = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"

export const Home = ({ greeting, title, description, skills }) => {
  return (

    <section id="home" className="grid lg:grid-cols-home lg:grid-rows-home lg:grid-flow-col gap-1 md:gap-y-4 mx-8 md:mx-16 mt-[4.3rem]">
      {/* <h1 className="basis-full font-black text-center text-2xl -mt-32">👷‍♂️ under construction 🚧</h1> */}

      <h1 className="font-black text-7xl md:text-7xl lg:text-8xl antialiased tracking-tighter min-w-min sm:max-w-[18rem] mt-4 lg:mt-[6rem]">Full Stack Developer </h1>
      <div className="w-[60%] sm:w-[54%] lg:w-[70%] lg:ml-16 h-[100%] flex items-center lg:row-span-full lg:order-last ">
        <img src={workingEmoji}></img>
      </div>
      <p className="text-lg md:text-xl mt-2 self-center md:max-w-[34rem] md:self-auto">{description}</p>
      <div className='grid grid-cols-5 sm:grid-cols-10 justify-between md:justify-center h-max gap-y-4 mt-5'>
        {skills
          ? skills.map((skill, key) => (
            <div key={key} className='flex overflow-hidden justify-center bg-[#e3e5e67e] shadow-lg drop-shadow-lg rounded-full w-16 h-16 sm:w-[3.4rem] sm:h-[3.4rem] md:w-[3.5rem] md:h-[3.5rem] xl:w-[4rem] xl:h-[4rem]'>
              <a target="_blank" className="flex w-[82%] md:w-[70%]" href={skill.linkInfo} rel="noreferrer"><img className="" src={`${iconsSource}/${skill.icon}`} /></a>
            </div>
          ))
          : console.log("Error loading skills...")}
      </div>

    </section>
  )
}

export default Home
