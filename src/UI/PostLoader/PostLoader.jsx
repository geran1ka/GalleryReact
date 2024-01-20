import ClockLoader from "react-spinners/ClockLoader";

export const PostLoader = () => (
  <ClockLoader
    color="black"
    cssOverride={{
      display: "block",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
    size={50}
  />
);
