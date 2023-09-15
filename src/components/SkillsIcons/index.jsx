import userInfo from "src/data/userInfo.json"
import { motion } from "framer-motion"

const SkillsIcons = () => {
  const { skills } = userInfo
  let boxVariants = {}
  const isMobile = window.innerWidth < 768 // Add the width you want to check for here (now 768px)
  if (!isMobile) {
    boxVariants = {
      hover: {
        scale: 1.4,
      },
      tab: {
        scale: 1.2,
      },
    }
  }

  return (
    <>
      <div className="skills grid grid-cols-5 justify-between gap-y-[3rem] sm:grid-cols-10">
        {skills
          ? skills.map((skill, key) => (
              <motion.div
                variants={boxVariants}
                whileHover="hover"
                whileTap="tap"
                key={key}
                className="flex h-12 w-12 justify-center sm:h-[3.4rem] sm:w-[3.4rem] md:h-[3.5rem] md:w-[3.5rem] xl:h-[4rem] xl:w-[4rem]"
              >
                <a
                  target="_blank"
                  className="flex  justify-center"
                  href={skill.linkInfo}
                  rel="noreferrer"
                >
                  <img
                    className="w-[100%] lg:w-[100%]"
                    alt={skill.name}
                    title={skill.name}
                    src={skill.icon}
                  />
                </a>
              </motion.div>
            ))
          : console.log("Error loading skills...")}
      </div>
    </>
  )
}

export default SkillsIcons
