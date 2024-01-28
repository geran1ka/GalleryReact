import s from "./AuthSuccess.module.scss";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";

export const AuthSuccess = () => {
  return (
    <section>
      <Container>
        <div className={s.wrapper}>
          <p className={s.text}>
            Поздравляем с успешной авторизацией в приложении Gallery!
          </p>

          <Link className={s.link} to="/">
            Перейти на главную страницу
          </Link>
        </div>
      </Container>
    </section>
  );
};

{
  /* <div>
<div>
  <div>
    <h2>Oops!</h2>
    <h6>Похоже вы ошиблись, здесь материал был удален!</h6>
    <h2>
      404
      <p>Страница не найдена</p>
    </h2>
    <a href="index.html">Вернуться домой</a>
  </div>
  <p>© 2024 Отслеживание ошибок. Все права защищены |</p>
</div>
</div> */
}
