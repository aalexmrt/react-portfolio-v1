import { useRef } from "react"
import emailjs from "@emailjs/browser"

export const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY)
      .then((result) => {
        console.log(result)
      }, (error) => {
        console.log(error)
      })
  }

  return (
    <section id="contact" className="flex flex-wrap items-start h-[90vh] ml-16 mr-16">
      <div className="basis-1/2">
        <h1 className='font-bold text-4xl mt-[18px] mb-4'>
        Contact
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
            </label>
            <input type="text" name="user_name" id="name" placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
            </label>
            <input type="email" name="user_email" id="email" placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
          {/* <div className="mb-5">
            <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
                    Subject
            </label>
            <input type="text" name="subject" id="subject" placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div> */}
          <div className="mb-5">
            <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                    Message
            </label>
            <textarea rows="4" name="message" id="message" placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
          </div>
          <div>
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                    Submit
            </button>
          </div>
        </form>
      </div>

    </section>

  )
}

export default ContactForm
