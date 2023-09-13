import "./index.css"
import { useRef } from "react"
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion"
import { wrap } from "@motionone/utils"
import SkillsIcons from "../SkillsIcons"

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0)

  const smoothVelocity = useSpring(baseX, { stiffness: 1000, damping: 10 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1], {
    clamp: true,
  })

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(110, -110, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 500)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  )
}

export default function InfiniteScroll() {
  return (
    <>
      <motion.div>
        <SkillsIcons />
      </motion.div>
    </>
  )
}
