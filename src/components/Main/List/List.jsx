import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../../store/photos/photos.slice";
import Masonry from "react-masonry-css";
import s from "./List.module.scss";
import { useRef } from "react";
import { PhotoItem } from "./PhotoItem/PhotoItem";
import { PostLoader } from "../../../UI/PostLoader/PostLoader";
import { Error } from "../../../UI/Error/Error";
import { Outlet } from "react-router-dom";

export const List = () => {
  const dispatch = useDispatch();
  const { photos, loading, error, status } = useSelector(
    (state) => state.photos,
  );
  const endList = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(fetchPhotos());
        }
      },
      {
        rootMargin: "100px",
      },
    );
    if (endList.current && !loading) {
      observer.observe(endList.current);
    }

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [dispatch, endList.current]);

  const breakpointColumnsObj = {
    default: 4,
    1120: 3,
    820: 2,
    580: 1,
  };

  if (error) return <Error error={error} status={status} />;

  return (
    <>
      {photos && (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={s.myMasonryGrid}
          columnClassName={s.myMasonryGridColumn}>
          {photos.map((photo) => (
            <li key={photo.id} className={s.li}>
              <PhotoItem photo={photo} />
            </li>
          ))}
          {loading && <PostLoader />}
          <li ref={endList} className={s.end}></li>
        </Masonry>
      )}
    </>
  );
};
