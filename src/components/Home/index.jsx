import workingEmoji from "src/assets/myself_emoji.png"
import userInfo from "src/data/userInfo.json"
import SkillsIcons from "src/components/SkillsIcons"
import { motion } from "framer-motion"
export const Home = () => {
  const { description, skills } = userInfo
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        ease: [0.17, 0.67, 0.83, 0.91],
        delay: 0.2,
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 50, opacity: 0 },
      }}
      id="home"
      className="mt-[4.3rem] grid gap-1 md:gap-y-4 lg:grid-flow-col lg:grid-cols-home lg:grid-rows-home xl:max-h-[calc(100vh-5rem)] xl:min-h-[calc(100vh-5rem)]"
    >
      <h1 className="mt-4 min-w-min text-[4.2rem] font-black leading-none tracking-tight antialiased xs:text-6xl sm:max-w-[18rem] md:text-9xl lg:mt-[6rem] lg:text-7xl xl:text-9xl">
        Full Stack Developer{" "}
      </h1>

      <div className="flex h-[100%] w-[60%] items-center sm:w-[54%] lg:order-last lg:row-span-full lg:ml-16 lg:w-[85%] xl:w-[80%]">
        <img src={workingEmoji}></img>
      </div>
      <h2 className="mt-2 self-center text-2xl font-medium md:max-w-[48rem] md:self-auto lg:py-8 lg:text-lg xl:text-4xl">
        {description}
      </h2>
      <SkillsIcons />
    </motion.section>
  )
}

export default Home
