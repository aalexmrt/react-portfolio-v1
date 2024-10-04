import profileImg from "src/assets/profile.jpeg"
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
          I’m a full-stack developer with over 3 years of experience in the tech
          industry, originally from Spain but now based in Colombia. Recently,
          I’ve been working remotely with a talented team of developers at a
          company based in San Francisco.
        </p>
        <p className="text-xl md:text-2xl">
          I really enjoy coding and solving real-world problems, and I love
          building amazing designs while enhancing user experience. I’m flexible
          and open to learning any tech stack needed to address the requirements
          of the project.
        </p>
        <p className="text-xl md:text-2xl">
          I{"'"}m looking forward to contributing my skills and hard work to
          exciting new projects and teams.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
