import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import s from "./Favorite.module.scss";
import { useRef } from "react";

import { Error } from "../../UI/Error/Error";
import { Container } from "../Container/Container";
import { PhotoItem } from "../List/PhotoItem/PhotoItem";
import { PostLoader } from "../../UI/PostLoader/PostLoader";
import { useLocation } from "react-router-dom";
import { fetchFavoritePhotosList } from "../../store/favorite/favorite.slice";
import { useAuth } from "../../hooks/useAuth";

export const Favorite = () => {
  const dispatch = useDispatch();
  const [auth] = useAuth();
  console.log("auth: ", auth);
  const { favoritePhotosList, loading, error } = useSelector(
    (state) => state.favorite,
  );
  const endList = useRef(null);

  // const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchFavoritePhotosList(auth.username));
  }, [dispatch, auth]);

  const breakpointColumnsObj = {
    default: 4,
    1120: 3,
    820: 2,
    580: 1,
  };

  if (error) return <Error error={error} />;

  return (
    <section>
      <Container>
        {favoritePhotosList && (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={s.myMasonryGrid}
            columnClassName={s.myMasonryGridColumn}>
            {favoritePhotosList.map((photo) => (
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
