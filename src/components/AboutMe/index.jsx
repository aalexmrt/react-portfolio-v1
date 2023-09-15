import profileImg from "src/assets/profile.jpeg"
const AboutMe = () => {
  return (
    <section className="about-me">
      <h1 className="title-section">About me</h1>
      <div className="profile-img h-[21rem] w-[21rem] !overflow-hidden rounded-full object-cover shadow-2xl drop-shadow-2xl md:h-[28rem] md:w-[28rem] xl:mt-0 xl:h-[36rem] xl:w-[36rem] ">
        <img src={profileImg} alt="Profile image" />
      </div>
      <p className="md:text-1xl text-lg lg:text-2xl">
        Full stack developer passionate about{" "}
        <strong> building web apps.</strong> +3 years of programming experience.
        I love how code can bring ideas to life, welcome to my portfolio!{" "}
        <br></br>I{"'"}m really into <strong>front-end development</strong>,
        where I turn ideas into cool digital experiences. I find the world of
        web tech fascinating. It lets me <strong>create smooth websites</strong>
        , make them faster, and solve tricky coding puzzles. I get a kick out of{" "}
        <strong>making the web better</strong>, project by project.<br></br> I
        think the best websites are both functional and gorgeous. I work hard to
        blend technical skills with a good eye for design, so every pixel and
        line of code looks just right. My focus is on{" "}
        <strong>giving users a great experience.</strong>
      </p>
    </section>
  )
}

export default AboutMe
