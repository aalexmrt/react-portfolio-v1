import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Modal from "src/components/Modal"
import "./index.css"

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
      <section className="contact">
        <h1 className="title-section">Contact</h1>
        <div className="contact-me-container">
          <div className="contact-me-msg">
            <p className="text-2xl md:w-[20rem] md:text-2xl md:font-semibold lg:w-[70%] xl:pt-[10rem]">
              Feel free to get in touch with me using this contact form or
              reaching out by LinkedIn.
              <span>
                {" "}
                <a
                  href="https://www.linkedin.com/in/alexmartinez598/"
                  className="hyperlink-icon inline-flex items-center hover:underline"
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
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="mb-5">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email">Email Address</label>
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
              <label htmlFor="message">Message</label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="rounded-xl bg-[var(--accent-color)] px-8 py-3 text-2xl font-semibold text-white outline-none hover:bg-[#fa3b54]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      {showModal ? (
        <Modal message={mailResponse} closeModal={closeModal} />
      ) : null}
    </>
  )
}

export default ContactForm
