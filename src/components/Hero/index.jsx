import workingEmoji from "src/assets/myself_emoji.png"
import userInfo from "src/data/userInfo.json"
import SkillsIcons from "src/components/SkillsIcons"
import { motion } from "framer-motion"
export const Hero = () => {
  const { description } = userInfo
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: "linear",
        delay: 0.2,
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 50, opacity: 0 },
      }}
      className="hero grid md:gap-y-4 lg:grid-flow-col lg:grid-cols-home lg:grid-rows-home"
    >
      <h1 className="title">Full Stack Developer </h1>

      <div className="memoji">
        <img src={workingEmoji}></img>
      </div>
      <h2 className="subtitle">{description}</h2>
      <SkillsIcons />
    </motion.section>
  )
}

export default Hero
