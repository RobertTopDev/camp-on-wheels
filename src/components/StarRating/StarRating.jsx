import Star from "./Star";
import { StarContainer, StarTextWrapper } from "./StarRating.styled";

// eslint-disable-next-line react/prop-types
export default function StarRating({ stars }) {
  return (
    <StarTextWrapper>
      <StarContainer>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={crypto.randomUUID()}
            full={stars ? stars >= i + 1 : stars >= i + 1 ? true : false}
          />
        ))}
      </StarContainer>
    </StarTextWrapper>
  );
}
