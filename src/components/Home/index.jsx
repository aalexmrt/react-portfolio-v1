import workingEmoji from "src/assets/myself_emoji.png"
import userInfo from "src/data/userInfo.json"

export const Home = () => {
  const { description, skills } = userInfo
  return (
    <section
      id="home"
      className="mt-[4.3rem] grid gap-1 md:gap-y-4 lg:grid-flow-col lg:grid-cols-home lg:grid-rows-home xl:max-h-[calc(100vh-5rem)] xl:min-h-[calc(100vh-5rem)]"
    >
      <h1 className="mt-4 min-w-min text-5xl font-black tracking-tight antialiased xs:text-6xl sm:max-w-[18rem] md:text-9xl lg:mt-[6rem] lg:text-7xl xl:text-9xl">
        Full Stack Developer{" "}
      </h1>
      <div className="flex h-[100%] w-[60%] items-center sm:w-[54%] lg:order-last lg:row-span-full lg:ml-16 lg:w-[85%] xl:w-[80%]">
        <img src={workingEmoji}></img>
      </div>
      <p className="mt-2 self-center text-lg md:max-w-[48rem] md:self-auto lg:mt-8 lg:text-lg xl:text-3xl">
        {description}
      </p>
      <div className="mt-5 grid h-max grid-cols-5 justify-between gap-y-4 sm:grid-cols-10 md:justify-center">
        {skills
          ? skills.map((skill, key) => (
              <div
                key={key}
                className="flex h-16 w-16 justify-center overflow-hidden rounded-full bg-[#e3e5e67e] shadow-lg drop-shadow-lg sm:h-[3.4rem] sm:w-[3.4rem] md:h-[3.5rem] md:w-[3.5rem] xl:h-[4rem] xl:w-[4rem]"
              >
                <a
                  target="_blank"
                  className="flex w-[82%] justify-center md:w-[70%]"
                  href={skill.linkInfo}
                  rel="noreferrer"
                >
                  <img
                    className="w-[76%] lg:w-[90%]"
                    alt={skill.name}
                    title={skill.name}
                    src={skill.icon}
                  />
                </a>
              </div>
            ))
          : console.log("Error loading skills...")}
      </div>
    </section>
  )
}

export default Home
