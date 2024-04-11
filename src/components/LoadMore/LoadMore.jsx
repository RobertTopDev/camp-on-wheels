import { LoadMoreBtn } from "./LoadMore.styled";

// eslint-disable-next-line react/prop-types
function LoadMore({ onLoadMoreClick }) {
  return <LoadMoreBtn onClick={onLoadMoreClick}>Load More</LoadMoreBtn>;
}

export default LoadMore;
