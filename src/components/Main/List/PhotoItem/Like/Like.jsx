import { useState } from "react";
import s from "./Like.module.scss";
import LikeIcon from "./like.svg?react";
import { useSelector } from "react-redux";
import { ErrorAuth } from "../../../../Header/Auth/ErrorAuth/ErrorAuth";

export const Like = ({ likes, liked, id }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLikePhoto, setIsLikePhoto] = useState(liked);
  const token = useSelector((state) => state.token.token);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleToggleLike = () => {
    if (!token) {
      console.log("!token");
      return setIsShowModal(true);
    } else {
      console.log("token");
      setIsShowModal(false);
      if (isLikePhoto) {
        setLikeCount(likeCount - 1);
        setIsLikePhoto(!liked);
      } else {
        setLikeCount(likeCount + 1);
        setIsLikePhoto(!liked);
      }
    }
  };

  return (
    <>
      <button className={s.btnLike} type="button" onClick={handleToggleLike}>
        <LikeIcon />
        <span className={s.text}> {likeCount}</span>
      </button>
      {isShowModal && (
        <ErrorAuth
          text={"Вы неавторизованы"}
          closePopup={() => {
            setIsShowModal(false);
          }}
        />
      )}
    </>
  );
};
