import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./Auth.module.scss";
import { useAuth } from "../../../hooks/useAuth";
import { PostLoader } from "../../../UI/PostLoader/PostLoader";
import { removeToken } from "../../../store/token/token.slice";
import { urlAuth } from "../../../api/auth";

export const Auth = () => {
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  console.log("auth: ", auth);

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    setShowLogout(false);
    dispatch(removeToken());
    clearAuth();
  };

  return (
    <div className={s.container}>
      {loading ? (
        <PostLoader />
      ) : auth?.name ? (
        <button className={s.btn} onClick={getOut}>
          <img
            className={s.img}
            src={auth.profile_image.small}
            title={auth.username}
            alt={`Аватар ${auth.username}`}
          />
          <span className={s.name}>{auth.username}</span>
        </button>
      ) : (
        <a className={s.link} href={urlAuth}>
          {/* <LoginIcon className={style.svg} /> */}
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.5"
              d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
              fill="#1C274C"
            />
            <path
              d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
              fill="#1C274C"
            />
            <path
              d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C17.8174 10.0089 18.3135 10.022 18.75 10.0546V8C18.75 4.27208 15.7279 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C5.68651 10.022 6.18264 10.0089 6.75 10.0036V8Z"
              fill="#1C274C"
            />
          </svg>
        </a>
      )}
      {showLogout && (
        <button className={s.logout} onClick={logOut}>
          Выйти
        </button>
      )}
    </div>
  );
};

//   {
//     "id": "Rfqph9KpJB0",
//     "updated_at": "2024-01-20T08:10:02Z",
//     "username": "geran1ka",
//     "name": "Roman Khoruzhy",
//     "first_name": "Roman",
//     "last_name": "Khoruzhy",
//     "twitter_username": null,
//     "portfolio_url": null,
//     "bio": null,
//     "location": null,
//     "links": {
//         "self": "https://api.unsplash.com/users/geran1ka",
//         "html": "https://unsplash.com/@geran1ka",
//         "photos": "https://api.unsplash.com/users/geran1ka/photos",
//         "likes": "https://api.unsplash.com/users/geran1ka/likes",
//         "portfolio": "https://api.unsplash.com/users/geran1ka/portfolio",
//         "following": "https://api.unsplash.com/users/geran1ka/following",
//         "followers": "https://api.unsplash.com/users/geran1ka/followers"
//     },
//     "profile_image": {
//         "small": "https://images.unsplash.com/profile-1705605180128-a58b505b2b96image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
//         "medium": "https://images.unsplash.com/profile-1705605180128-a58b505b2b96image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
//         "large": "https://images.unsplash.com/profile-1705605180128-a58b505b2b96image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
//     },
//     "instagram_username": null,
//     "total_collections": 0,
//     "total_likes": 1,
//     "total_photos": 0,
//     "total_promoted_photos": 0,
//     "accepted_tos": false,
//     "for_hire": false,
//     "social": {
//         "instagram_username": null,
//         "portfolio_url": null,
//         "twitter_username": null,
//         "paypal_email": null
//     },
//     "followed_by_user": false,
//     "photos": [],
//     "badge": null,
//     "tags": {
//         "custom": [],
//         "aggregated": []
//     },
//     "followers_count": 0,
//     "following_count": 0,
//     "allow_messages": true,
//     "numeric_id": 15394373,
//     "downloads": 0,
//     "meta": {
//         "index": false
//     },
//     "uid": "Rfqph9KpJB0",
//     "confirmed": true,
//     "uploads_remaining": 10,
//     "unlimited_uploads": false,
//     "email": "pantera_vrn@mail.ru",
//     "dmca_verification": "unverified",
//     "unread_in_app_notifications": false,
//     "unread_highlight_notifications": false
// }
