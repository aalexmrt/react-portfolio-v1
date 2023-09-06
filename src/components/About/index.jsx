import profileImg from "src/assets/profile.jpeg"
export const About = () => {
  return (
    <section id="about" className="grid gap-1 overflow-hidden mx-8 md:mx-16 mt-[4.3rem]">
      <h1 className="font-bold text-3xl">About me</h1>
      <div className="self-center overflow-hidden shadow-2xl drop-shadow-lg object-cover rounded-full w-[18rem] h-[18rem]">
        <img
          // className="inline mr-2 rounded-full -translate-y-14 "
          src={profileImg}
          alt="Profile image"
        />
      </div>
      <p className="text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
        lorem id turpis tincidunt sollicitudin. Vivamus finibus magna vitae
        purus vehicula rutrum. Nullam in sem nisi. Phasellus suscipit ultricies
        purus, quis convallis lectus egestas sed. Phasellus lorem velit, commodo
        eu tellus a, congue imperdiet massa. Nam nulla turpis, vestibulum non
        nunc vel, fermentum consequat purus. Mauris in sem vel diam lacinia
        ultricies ut a enim.
      </p>
    </section>
  )
}

export default About
