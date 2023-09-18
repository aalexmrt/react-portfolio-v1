import succeedIcon from "src/assets/succeed_icon.svg"
import errorIcon from "src/assets/failed_icon.svg"

import "./index.css"

const Modal = ({ message }) => {
  let icon
  if (message.type === "succeed") {
    icon = succeedIcon
  } else if (message.type === "error") {
    icon = errorIcon
  }

  return (
    <section className="section-modal modal">
      <div className="relative mx-8 flex flex-col justify-center rounded-lg border-[0.3rem] border-[var(--accent-color)] bg-[var(--primary-color)] px-7  py-[1rem] md:px-14 ">
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
