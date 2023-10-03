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
      <div className="skills">
        {skills ? (
          skills.map((skill, key) => (
            <motion.div
              variants={boxVariants}
              whileHover="hover"
              whileTap="tap"
              key={key}
            >
              <a
                target="_blank"
                className="flex justify-center"
                href={skill.linkInfo}
                rel="noreferrer"
              >
                <img
                  className="w-[100%]"
                  alt={skill.name}
                  title={skill.name}
                  src={skill.icon}
                />
              </a>
            </motion.div>
          ))
        ) : (
          <p>No skills found ...</p>
        )}
      </div>
    </>
  )
}

export default SkillsIcons
