import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import s from "./List.module.scss";
import { useRef } from "react";
import { PhotoItem } from "./PhotoItem/PhotoItem";
import { PostLoader } from "../../UI/PostLoader/PostLoader";
import { Error } from "../../UI/Error/Error";
import { Container } from "../Container/Container";
import { changePage, fetchPhotos } from "../../store/photos/photos.slice";
import { useLocation } from "react-router-dom";

export const List = () => {
  const dispatch = useDispatch();
  const { photos, loading, error, status } = useSelector(
    (state) => state.photos,
  );
  const endList = useRef(null);

  const params = useLocation();

  useEffect(() => {
    dispatch(changePage(params));
  }, [dispatch, params]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(fetchPhotos());
        }
      },
      {
        rootMargin: "200px",
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
    <section>
      <Container>
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
      </Container>
    </section>
  );
};
