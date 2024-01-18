import {
  API_URL_TOKEN,
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
  GRANT_TYPE,
} from "./const";

const getUrlToken = (code) => {
  const searchParams = new URLSearchParams("");

  searchParams.append("client_id", ACCESS_KEY);
  searchParams.append("client_secret", SECRET_KEY);
  searchParams.append("redirect_uri", REDIRECT_URI);
  searchParams.append("code", code);
  searchParams.append("grant_type", GRANT_TYPE);

  return `${API_URL_TOKEN}${searchParams.toString()}`;
};

export const setToken = (token) => {
  localStorage.setItem("tokenGallery", token);
};

export const getToken = async () => {
  let token = localStorage.getItem("tokenGallery") || "";

  if (token) return;

  if (location.pathname.includes("/auth")) {
    const code = new URLSearchParams(location.search).get("code");
    const urlToken = getUrlToken(code);

    const response = await fetch(urlToken);

    if (!response.ok) {
      throw new Error("не удалось получить токен");
    }
    token = await response.json();
    setToken(token);
  }

  return token;
};
