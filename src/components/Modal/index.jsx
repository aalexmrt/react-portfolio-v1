import succeedIcon from "src/assets/succeded_icon.png"
import errorIcon from "src/assets/error_icon.png"

import "./index.css"

const Modal = ({ message, closeModal }) => {
  let icon
  if (message.type === "succeed") {
    icon = succeedIcon
  } else if (message.type === "error") {
    icon = errorIcon
  }

  return (
    <section className="w-full h-full fixed top-0 left-0 grid place-items-center ">
      <div className="flex relative py-[1rem] flex-col mx-8 px-7 md:px-14 justify-center bg-[#ffffff] border-[0.3rem]  border-[#858585] rounded-lg ">
        {message.type !== "pending"
          ? <button
            className="absolute bg-neutral-50 p-[0.3rem] mr-2 mt-2 top-0 right-0 min-w-min w-2 rounded-full"
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
          : null}

        <div className="flex gap-3 justify-center items-center">
          {message.type === "pending" ? <div className="lds-facebook order-last"><div></div><div></div><div></div></div> : <img className="w-12 h-12" src={icon}></img>}
          <h4 className="text-xl tracking-wide ">{message.body}</h4>
        </div>
        <div className="flex justify-center "></div>
      </div>
    </section>
  )
}

export default Modal
