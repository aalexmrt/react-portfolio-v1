import profileImg from "src/assets/profile.jpeg"
const AboutMe = () => {
  return (
    <section id="about" className="grid gap-1 mx-8 md:mx-16 mt-[4.3rem]">

      <h1 className="font-bold text-5xl mt-8 tracking-tight">About me</h1>
      <div className="md:grid md:grid-cols-2">
        <div className="self-center !overflow-hidden object-cover rounded-full w-[21rem] h-[21rem] border-[0.4rem] border-[#cac9c9] shadow-xl drop-shadow-sm mt-10">
          <img
          // className="inline mr-2 rounded-full -translate-y-14 "
            src={profileImg}
            alt="Profile image"
          />
        </div>
        <p className="text-lg md:text-lg mt-7 md:place-self-center">
        Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Duis ultricies
        lorem id turpis tincidunt sollicitudin. Vivamus finibus magna vitae
        purus vehicula rutrum. <strong>Nullam in sem nisi.</strong> Phasellus suscipit ultricies
        purus, quis convallis lectus egestas sed. Phasellus lorem velit, commodo
        eu tellus a, congue imperdiet <strong>massa. Nam nulla turpis,</strong> vestibulum non
        nunc vel, fermentum consequat purus. Mauris in sem vel diam lacinia
        ultricies ut a enim.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
