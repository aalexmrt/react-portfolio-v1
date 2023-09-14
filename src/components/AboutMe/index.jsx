import profileImg from "src/assets/profile.jpeg"
const AboutMe = () => {
  return (
    <section
      id="about"
      className="xl:grid-cols-aboutLarge xl:grid-rows-aboutLarge mt-[4.3rem] grid gap-1 self-center md:mt-0  md:min-h-[calc(100vh-12rem)] xl:mt-0"
    >
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl xl:col-span-2 xl:pt-4 xl:text-7xl">
        About me
      </h1>
      <div className="lg:mt-8 xl:col-span-2 xl:grid xl:grid-cols-2 xl:items-center">
        <div className="mt-10 h-[21rem] w-[21rem] !overflow-hidden rounded-full border-[0.4rem] border-[#cac9c9] object-cover shadow-xl drop-shadow-sm md:h-[28rem] md:w-[28rem] xl:mt-0 xl:h-[30rem] xl:w-[30rem] ">
          <img
            // className="inline mr-2 rounded-full -translate-y-14 "
            src={profileImg}
            alt="Profile image"
          />
        </div>
        <p className="md:text-1xl md:align-basealine mt-7 text-lg  lg:text-2xl xl:mt-0">
          Hello! I{"'"}m Alex Martinez, a <strong>web developer</strong> who
          loves making beautiful and user-friendly websites. I{"'"}m really into{" "}
          <strong>front-end development</strong>, where I turn ideas into cool
          digital experiences. I find the world of web tech fascinating. It lets
          me <strong>create smooth websites</strong>, make them faster, and
          solve tricky coding puzzles. I get a kick out of{" "}
          <strong>making the web better</strong>, project by project. I think
          the best websites are both functional and gorgeous. I work hard to
          blend technical skills with a good eye for design, so every pixel and
          line of code looks just right. My focus is on{" "}
          <strong>giving users a great experience.</strong>
        </p>
      </div>
    </section>
  )
}

export default AboutMe
