import profileImg from 'src/assets/profile.jpeg'

export const About = () => {
  return (
    <section className="h-[100vh] pl-16 pr-16">
      <h1 className="font-bold font-sans subpixel-antialiased w-full text-center text-4xl mt-[18px] mb-4">About</h1>
      <div className="flex flex-wrap mx-auto h-[80vh] columns-2">
        <div className="bg-neutral-200 grow basis-1/2">

          <div className='overflow-hidden shadow object-cover rounded-full w-96 h-96 '>
            <img className="inline mr-2 rounded-full -translate-y-14 " src={profileImg} alt="Profile image"/>
          </div>

        </div>
        <div className="bg-neutral-300 grow basis-1/2">
          <div>Summary</div>
          <div>Experience</div>
        </div>
      </div>
    </section>
  )
}

export default About
