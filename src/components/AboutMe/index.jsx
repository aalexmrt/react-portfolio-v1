import profileImg from "src/assets/profile.jpeg"
import "./index.css"
const AboutMe = () => {
  return (
    <section className="about-me">
      <h1 className="title-section">About me</h1>
      <div className="profile-img-container h-[21rem] w-[21rem]  overflow-hidden rounded-full md:h-[28rem] md:w-[28rem] xl:h-[32rem] xl:w-[32rem] 2xl:h-[34rem] 2xl:w-[34rem]">
        <img className="profile-img" src={profileImg} alt="Profile image" />
      </div>
      <div className="about-me-information">
        <h3 className="text-3xl">
          Hi, I{"'"}m <strong>Alex Martinez!</strong> 👋
        </h3>
        <p className="text-2xl">
          Full stack developer passionate about building apps that bring value
          into our lives.
        </p>
        <p className="text-2xl">
          +3 years experience working with technologies such as React, Tailwind,
          Django and Javascript.
        </p>
        <p className="text-2xl">
          Graduated from Web Development and continue learning through online
          courses and building personal and freelance projects.
        </p>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
          lorem vitae massa posuere finibus a quis libero.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
