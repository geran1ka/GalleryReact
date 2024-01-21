import { useEffect, useRef } from "react";
import s from "./ErrorAuth.module.scss";
import ReactDOM from "react-dom";
import CloseIcon from "./img/close.svg?react";
import { useSelector } from "react-redux";

export const ErrorAuth = ({ text, closePopup }) => {
  const error = useSelector((state) => state.auth.error);
  const overlayRef = useRef(null);
  const hadleClick = (e) => {
    console.log("click");
    const target = e.target;
    console.log("target: ", target);
    if (
      target === overlayRef.current ||
      target.closest(".popupClose") ||
      e.keyCode === 27
    ) {
      console.log("closePopup");
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", hadleClick);
    document.addEventListener("click", hadleClick);
    return () => {
      document.removeEventListener("click", hadleClick);
      document.removeEventListener("keydown", hadleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={s.popup} ref={overlayRef}>
      {/* <p className={style.content}>{error.response.status}</p> */}
      <p className={s.content}>
        {text
          ? text
          : error.response.statusText ||
            error.message ||
            "Ошибка при авторизации"}
      </p>
      <button className={s.close}>
        <CloseIcon />
      </button>
    </div>,
    document.getElementById("popup-root"),
  );
};
