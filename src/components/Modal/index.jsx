import succeedIcon from "src/assets/succeed_icon.svg"
import errorIcon from "src/assets/failed_icon.svg"

import "./index.css"

const Modal = ({ message, closeModal }) => {
  let icon
  if (message.type === "succeed") {
    icon = succeedIcon
  } else if (message.type === "error") {
    icon = errorIcon
  }

  return (
    <section className="section-modal modal">
      <div className="relative mx-8 flex flex-col justify-center rounded-lg border-[0.3rem] border-[var(--accent-color)] bg-[var(--primary-color)] px-7  py-[1rem] md:px-14 ">
        {message.type !== "pending" ? (
          <button
            className="absolute right-0 top-0 mr-2 mt-2 w-2 min-w-min rounded-full p-[0.3rem]"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 50 50"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          </button>
        ) : null}

        <div className="flex items-center justify-center gap-3">
          {message.type === "pending" ? (
            <div className="lds-facebook order-last">
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <img className="h-12 w-12" src={icon}></img>
          )}
          <h4 className="text-xl tracking-wide ">{message.body}</h4>
        </div>
        <div className="flex justify-center"></div>
      </div>
    </section>
  )
}

export default Modal
