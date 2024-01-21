import { ImgLoad } from "../../../../UI/ImgLoad/ImgLoad";
import s from "./PhotoItem.module.scss";
import { Time } from "./Time/Time";
import { User } from "./User/User";
import { Like } from "./Like/Like";
export const PhotoItem = ({ photo }) => {
  return (
    <>
      <div className={s.wrapperPhoto} id={photo.id}>
        <a href={`photo/${photo.id}`}>
          <ImgLoad
            className={s.img}
            src={photo.urls.small}
            alt={photo.alt_description}
            width={photo.width}
            height={photo.height}
          />
        </a>
        <div className={s.description}>
          <User user={photo.user} />
          <Time data={photo.created_at} />
        </div>
        <Like likes={photo.likes} id={photo.id} liked={photo.liked_bu_user} />
      </div>
    </>
  );
};
