import profileImg from "src/assets/profile.jpeg"
const AboutMe = () => {
  return (
    <section
      id="about"
      className="xl:grid-cols-aboutLarge xl:grid-rows-aboutLarge mt-[4.3rem] grid gap-1 self-center md:mb-16 md:mt-0  md:min-h-[calc(100vh-12rem)] xl:mt-0"
    >
      <h1 className="mt-8 text-5xl font-bold tracking-tight md:pt-4 md:text-6xl xl:col-span-2 xl:pt-4 xl:text-7xl">
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
          Lorem ipsum dolor sit amet,{" "}
          <strong>consectetur adipiscing elit.</strong> Duis ultricies lorem id
          turpis tincidunt sollicitudin. Vivamus finibus magna vitae purus
          vehicula rutrum. <strong>Nullam in sem nisi.</strong> Phasellus
          suscipit ultricies purus, quis convallis lectus egestas sed. Phasellus
          lorem velit, commodo eu tellus a, congue imperdiet{" "}
          <strong>massa. Nam nulla turpis,</strong> vestibulum non nunc vel,
          fermentum consequat purus. Mauris in sem vel diam lacinia ultricies ut
          a enim.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
