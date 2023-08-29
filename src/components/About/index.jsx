import profileImg from "src/assets/profile.jpeg"

export const About = () => {
  return (
    <section
      id="about"
      className="w-100 md:h-[90vh] items-start ml-16 mr-16 flex flex-wrap"
    >
      <div className="flex flex-wrap">
        <h1 className="basis-full font-bold text-4xl ">About me</h1>
        <div className="flex flex-wrap pt-20">
          <div className="basis-1/2">
            <div className="overflow-hidden shadow-2xl drop-shadow-lg object-cover rounded-full w-[28rem] h-[28rem] ">
              <img
                className="inline mr-2 rounded-full -translate-y-14 "
                src={profileImg}
                alt="Profile image"
              />
            </div>
          </div>
          <div className="basis-1/2 flex justify-end self-center ">
            <div className="basis-10/12 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ultricies lorem id turpis tincidunt sollicitudin. Vivamus
                finibus magna vitae purus vehicula rutrum. Nullam in sem nisi.
                Phasellus suscipit ultricies purus, quis convallis lectus
                egestas sed. Phasellus lorem velit, commodo eu tellus a, congue
                imperdiet massa. Nam nulla turpis, vestibulum non nunc vel,
                fermentum consequat purus. Mauris in sem vel diam lacinia
                ultricies ut a enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
