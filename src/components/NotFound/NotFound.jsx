import s from "./NotFound.module.css";

export const NotFound1 = () => {
  return (
    <div className={s.notfound}>
      <div className={s.container}>
        <div className={s.sign}>
          <div className={s.neonBlue} id="title">
            4<span id="fade">0</span>4
          </div>
          <div>
            <p className={s.neonBlue}>страница не найдена</p>
            {/* <span className={s.neonPurple} id="trav"> */}
            {/* Enter
            </span>
            <span className={s.neonElov}>Show</span> */}
          </div>
        </div>
      </div>
      <a href="/" className={s.button}>
        На главную
      </a>
    </div>
  );
};

export const NotFound = () => {
  return (
    <section>
      <div>
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
      </div>
    </section>
  );
};
