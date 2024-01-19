import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../../store/photos/photos.slice";
import Masonry from "react-masonry-css";
import s from "./List.module.scss";

export const List = () => {
  const dispatch = useDispatch();
  const { photos, loading, errror } = useSelector((state) => state.photos);
  console.log("errror: ", errror);
  console.log("loading: ", loading);

  useEffect(() => {
    console.log("dispatch(fetchPhotos())");
    dispatch(fetchPhotos());
  }, [dispatch]);
  console.log("photos: ", photos);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      {photos ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={s.myMasonryGrid}
          columnClassName={s.myMasonryGridColumn}>
          {photos &&
            photos.map((photo) => (
              <li key={photo.id} className={s.li}>
                <a href={photo.links.self}>
                  <img src={photo.urls.small} />
                  <div>
                    <p>{photo.user.name}</p>
                    <p>{photo.created_at}</p>
                  </div>
                </a>
              </li>
            ))}
        </Masonry>
      ) : (
        <div>Зайдите попозже</div>
      )}
    </>
  );
};

// [0
// :
// alt_description
// :
// "a man standing in a tent looking out into the distance"
// blur_hash
// :
// "LLCis^s-00Nd-poLRjfk00of?cjE"
// breadcrumbs
// :
// []
// color
// :
// "#594040"
// created_at
// :
// "2023-04-28T12:59:36Z"
// current_user_collections
// :
// Array(0)
// length
// :
// 0
// [[Prototype]]
// :
// Array(0)
// description
// :
// "Sand dune, Hisma Desert – NEOM, Saudi Arabia"
// height
// :
// 5504
// id
// :
// "EbIvcXzgU4s"
// liked_by_user
// :
// false
// likes
// :
// 605
// links
// :
// {self: 'https://api.unsplash.com/photos/a-man-standing-in-a-tent-looking-out-into-the-distance-EbIvcXzgU4s', html: 'https://unsplash.com/photos/a-man-standing-in-a-tent-looking-out-into-the-distance-EbIvcXzgU4s', download: 'https://unsplash.com/photos/EbIvcXzgU4s/download?i…w1NTQ2Mzd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTY2MDkzOHw', download_location: 'https://api.unsplash.com/photos/EbIvcXzgU4s/downlo…w1NTQ2Mzd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTY2MDkzOHw'}
// promoted_at
// :
// "2023-05-26T11:24:01Z"
// slug
// :
// "a-man-standing-in-a-tent-looking-out-into-the-distance-EbIvcXzgU4s"
// sponsorship
// :
// impression_urls
// :
// (2) ['https://secure.insightexpressai.com/adServer/adSer…//secure.insightexpressai.com/adserver/1pixel.gif', 'https://secure.insightexpressai.com/adServer/adSer…//secure.insightexpressai.com/adserver/1pixel.gif']
// sponsor
// :
// {id: 'mYizSrdJkkU', updated_at: '2024-01-18T22:57:06Z', username: 'neom', name: 'NEOM', first_name: 'NEOM', …}
// tagline
// :
// "Made to Change"
// tagline_url
// :
// "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral"
// [[Prototype]]
// :
// Object
// topic_submissions
// :
// {}
// updated_at
// :
// "2024-01-19T05:50:04Z"
// urls
// :
// full
// :
// "https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTQ2Mzd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTY2MDkzOHw&ixlib=rb-4.0.3&q=85"
// raw
// :
// "https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?ixid=M3w1NTQ2Mzd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTY2MDkzOHw&ixlib=rb-4.0.3"
// regular
// :
// "https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ2Mzd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTY2MDkzOHw&ixlib=rb-4.0.3&q=80&w=1080"
// small
// :
// "https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ2Mzd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTY2MDkzOHw&ixlib=rb-4.0.3&q=80&w=400"
// small_s3
// :
// "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682686580224-cd46ea1a6950"
// thumb
// :
// "https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ2Mzd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTY2MDkzOHw&ixlib=rb-4.0.3&q=80&w=200"
// [[Prototype]]
// :
// Object
// user
// :
// accepted_tos
// :
// true
// bio
// :
// "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape."
// first_name
// :
// "NEOM"
// for_hire
// :
// false
// id
// :
// "mYizSrdJkkU"
// instagram_username
// :
// "discoverneom"
// last_name
// :
// null
// links
// :
// {self: 'https://api.unsplash.com/users/neom', html: 'https://unsplash.com/@neom', photos: 'https://api.unsplash.com/users/neom/photos', likes: 'https://api.unsplash.com/users/neom/likes', portfolio: 'https://api.unsplash.com/users/neom/portfolio', …}
// location
// :
// "NEOM, Saudi Arabia"
// name
// :
// "NEOM"
// portfolio_url
// :
// "http://www.neom.com"
// profile_image
// :
// {small: 'https://images.unsplash.com/profile-1679489218992-…mage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32', medium: 'https://images.unsplash.com/profile-1679489218992-…mage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64', large: 'https://images.unsplash.com/profile-1679489218992-…ge?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'}
// social
// :
// {instagram_username: 'discoverneom', portfolio_url: 'http://www.neom.com', twitter_username: 'neom', paypal_email: null}
// total_collections
// :
// 7
// total_likes
// :
// 1
// total_photos
// :
// 202
// total_promoted_photos
// :
// 72
// twitter_username
// :
// "neom"
// updated_at
// :
// "2024-01-18T22:57:06Z"
// username
// :
// "neom"
// [[Prototype]]
// :
// Object
// width
// :
// 8256]
