import profileImg from "src/assets/profile.jpeg"
import "./index.css"
const AboutMe = () => {
  return (
    <section className="about-me" id="aboutMe">
      <h1 className="title-section">About me</h1>
      <div className="profile-img-container h-[17.5rem] w-[17.5rem]  overflow-hidden rounded-full md:h-[24rem] md:w-[24rem] lg:h-[26rem] lg:w-[26rem] xl:h-[28rem] xl:w-[28rem] 2xl:h-[32rem] 2xl:w-[32rem]">
        <img className="profile-img" src={profileImg} alt="Profile image" />
      </div>
      <div className="about-me-information">
        <h3 className="text-2xl md:text-3xl">
          Hi, I{"'"}m <strong>Alex Martinez!</strong> 👋
        </h3>
        <p className="text-xl md:text-2xl">
          I develop websites for various purposes using technologies like
          JavaScript, React, Node.js, Tailwind, PostgreSQL and Python.
        </p>
        <p className="text-xl md:text-2xl">
          Over 2+ years of experience in which I have built tools to improve and
          automate processes, delivering efficient solutions and attractive
          graphical interfaces.
        </p>
        <p className="text-xl md:text-2xl">
          I graduated in Web Development and I have continued to develop my
          skills through online courses and building personal projects.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
