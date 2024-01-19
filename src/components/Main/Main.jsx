import { Container } from "../Container/Container";
import { List } from "./List/List";
import s from "./Main.module.scss";

export const Main = () => (
  <main className={s.main}>
    <Container>
      <List />
    </Container>
  </main>
);
