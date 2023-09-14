import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Modal from "src/components/Modal"
export const ContactForm = () => {
  const form = useRef()
  const mailInitialState = {
    type: "pending",
    body: "Sending mail",
  }
  const [mailResponse, setMailResponse] = useState(mailInitialState)
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
    setMailResponse(mailInitialState)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
      )
      .then(setShowModal(true))
      .then(
        (result) => {
          setMailResponse({
            type: "succeed",
            body: "Mail has sent successfully.",
          })
          console.log(result)
        },
        (error) => {
          setMailResponse({ type: "error", body: "Cannot send mail." })
          console.log(error)
        },
      )
  }

  return (
    <>
      <section
        id="contact"
        className="md:grid-rows-aboutLarge mt-[4.3rem] grid gap-1 pb-12 md:mb-4 md:mt-0 md:min-h-[calc(100vh-12rem)]"
      >
        <h1 className="text-5xl font-bold tracking-tight md:pt-4 md:text-6xl xl:pt-4 xl:text-7xl">
          Contact
        </h1>
        <div className="items-center gap-4 md:grid md:grid-cols-2">
          <div className="md:flex md:flex-col md:items-center md:justify-center md:gap-0  ">
            <p className="mt-6 text-2xl md:w-[20rem] md:text-2xl md:font-semibold lg:w-[70%]">
              Feel free to get in touch with me using this contact form or
              reaching out by LinkedIn.
              <span>
                {" "}
                <a
                  href="https://www.linkedin.com/in/alexmartinez598/"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  <svg
                    className="ml-2.5 h-4 w-4 lg:h-5 lg:w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </span>
            </p>
          </div>
          <form className="mt-8 md:order-first" ref={form} onSubmit={sendEmail}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-2xl font-semibold text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-2xl font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-2xl font-semibold text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-2xl font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-2xl font-semibold text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-2xl font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] px-8 py-3 text-2xl font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
          {/* <button onClick={testModal}>test</button> */}
        </div>
      </section>
      {showModal ? (
        <Modal message={mailResponse} closeModal={closeModal} />
      ) : null}
    </>
  )
}

export default ContactForm
