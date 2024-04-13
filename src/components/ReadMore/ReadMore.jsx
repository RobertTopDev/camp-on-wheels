/* eslint-disable react/prop-types */
import { useState } from "react";
import { ReadMore, BtnExpander } from "./ReadMore.styled";

export default function ReadMoreText({
  children,
  collapsedNumWords = 15,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  expanded = false,
}) {
  const [isExpended, setIsExpended] = useState(expanded);

  const displayText = isExpended
    ? children
    : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...`;

  return (
    <div>
      <ReadMore>
        {children.split(" ").length > collapsedNumWords
          ? displayText
          : children}
        {children.split(" ").length > collapsedNumWords && (
          <BtnExpander onClick={() => setIsExpended((exp) => !exp)}>
            {isExpended ? collapseButtonText : expandButtonText}
          </BtnExpander>
        )}
      </ReadMore>
    </div>
  );
}
