import { useRef } from "react"
import emailjs from "@emailjs/browser"

export const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  return (
    <section id="contact" className="grid  gap-1 mx-8 md:mx-16 mt-[4.3rem]">
      <h1 className="font-bold text-5xl tracking-tighter mt-8">Contact</h1>
      <div className="md:grid md:grid-cols-2 gap-4">
        <div className="md:flex md:flex-col md:gap-0 md:justify-center ">
          <p className="md:w-[50%]  text-lg mt-6">
            Feel free to get in touch with me using this contact form or
            reaching out by LinkedIn.

          </p>
          <a href="https://www.linkedin.com/in/alexmartinez598/" className="inline-flex items-center text-blue-600 hover:underline">
            <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </a>
        </div>
        <form className="mt-8 md:order-first" ref={form} onSubmit={sendEmail}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-lg font-semibold text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-lg font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-lg font-semibold text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-lg font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          {/* <div className="mb-5">
            <label htmlFor="subject" className="mb-3 block text-lg font-semibold text-[#07074D]">
                    Subject
            </label>
            <input type="text" name="subject" id="subject" placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-lg font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div> */}
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-lg font-semibold text-[#07074D]"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-lg font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-lg font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
