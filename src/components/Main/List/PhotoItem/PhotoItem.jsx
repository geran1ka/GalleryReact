import { ImgLoad } from "../../../../UI/ImgLoad/ImgLoad";
import s from "./PhotoItem.module.scss";
import { Time } from "./Time/Time";
import { User } from "./User/User";
// import LikeIcon from "./like.svg?react";
import LikeIcon from "./Like/351411.svg?react";
export const PhotoItem = ({ photo }) => {
  console.log("photo: ", photo);

  return (
    <>
      <div className={s.photo} id={photo.id}>
        <a href={`photo/${photo.id}`}>
          <ImgLoad
            className={s.img}
            src={photo.urls.small}
            alt={photo.alt_description}
            width={photo.width}
            height={photo.height}
          />
        </a>
        <div className={s.wrapper}>
          <User user={photo.user} />
          <Time data={photo.created_at} />
        </div>
        <button className={s.btnLike} type="button">
          <LikeIcon />
          <span className={s.text}> {photo.likes}</span>
        </button>
      </div>
    </>
  );
};
