import profileImg from "src/assets/profile.webp"
import "./index.css"
const AboutMe = () => {
  return (
    <section className="about-me" id="aboutMe">
      <h1 className="title-section lg:mb-10 xl:mb-14">About me</h1>
      <div className="profile-img-container h-[17.5rem] w-[17.5rem]  overflow-hidden rounded-full md:h-[24rem] md:w-[24rem] lg:h-[26rem] lg:w-[26rem] xl:h-[28rem] xl:w-[28rem] 2xl:h-[32rem] 2xl:w-[32rem]">
        <img className="profile-img" src={profileImg} alt="Profile image" />
      </div>
      <div className="about-me-information">
        <h3 className="text-2xl md:text-3xl">
          Hi, I{"'"}m <strong>Alex Martinez!</strong> 👋
        </h3>
        <p className="text-xl md:text-2xl">
          I’m a Full-Stack Engineer. I have experience working in early-stage
          startups and have worked with a variety of technologies including
          JavaScript, React, Node.js, and Python.
        </p>
        <p className="text-xl md:text-2xl">
          I really enjoy coding and solving real-world problems, and I love
          building amazing designs while enhancing user experience.
        </p>
        <p className="text-xl md:text-2xl">
          I’m versatile and ready to work with the technologies that best align
          with each project’s needs.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
