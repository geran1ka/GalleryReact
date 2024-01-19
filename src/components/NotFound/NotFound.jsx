import s from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={s.errorWrapper}>
      <p>Запрашиваемая страница не существует </p>
    </div>
  );
};
