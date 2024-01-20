import s from "./User.module.scss";

export const User = ({ user }) => (
  <a href={user.links.html} className={s.link} target="_blank" rel="noreferrer">
    <p className={s.user}>{user.name}</p>
  </a>
);
