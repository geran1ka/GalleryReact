import s from "./Error.module.scss";

export const Error = ({ error, status }) => (
  <div className={s.error}>
    <p className={s.description}>
      Что-то пошло не так ...{error}
      {status && ` Ошибка ${status}`}
    </p>
  </div>
);
