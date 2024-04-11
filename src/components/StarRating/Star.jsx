import { FullStar, EmptyStar } from "./Star.styled";

// eslint-disable-next-line react/prop-types
export default function Star({ full }) {
  return <>{full ? <FullStar /> : <EmptyStar />}</>;
}
