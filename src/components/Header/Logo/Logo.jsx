import s from "./Logo.module.scss";
// import LogoIcon from "./logo.svg?react";

export const Logo = () => (
  <a className={s.link} href="/">
    <svg
      className={s.logo}
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  </a>
);
