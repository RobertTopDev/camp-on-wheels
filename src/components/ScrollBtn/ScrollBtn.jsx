import { useEffect, useState } from "react";
import { ScrollBtnIcon, ScrollButton } from "./ScrollBtn.styled";
import Tooltip from "@mui/material/Tooltip";
import React from "react";

export default function ScrollBtn() {
  const [isVisible, setIsVisible] = useState(false);

  function handleScrollEvent() {
    setIsVisible(window.scrollY > 300);
  }

  function handleScrollUpBtnClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <Tooltip
      title="Up!"
      placement="top"
      arrow
      PopperProps={{
        popperRef,
        anchorEl: {
          getBoundingClientRect: () => {
            return new DOMRect(
              positionRef.current.x,
              areaRef.current.getBoundingClientRect().y,
              0,
              0
            );
          },
        },
      }}
    >
      <ScrollButton
        type="button"
        onClick={handleScrollUpBtnClick}
        $visible={isVisible}
        onMouseMove={handleMouseMove}
        ref={areaRef}
      >
        <ScrollBtnIcon />
      </ScrollButton>
    </Tooltip>
  );
}
