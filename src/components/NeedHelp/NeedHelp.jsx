import { useState } from "react";
import { NeedHelpBtnIcon, NeedHelpModal } from "./NeedHelp.styled";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import NeedHelpForm from "./NeedHelpForm";

export default function NeedHelp() {
  const [needHelp, setNeedHelp] = useState(false);

  const handleNeedHelpOpenModal = () => {
    setNeedHelp((prevState) => !prevState);
  };

  const handleNeedHelpCloseModal = () => {
    setNeedHelp((prevState) => !prevState);
  };

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
    <>
      <Tooltip
        title="NeedHelp?"
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
        <NeedHelpModal
          $needHelp={needHelp}
          onMouseMove={handleMouseMove}
          ref={areaRef}
        >
          {!needHelp ? (
            <NeedHelpBtnIcon onClick={handleNeedHelpOpenModal} />
          ) : (
            <NeedHelpForm
              handleNeedHelpCloseModal={handleNeedHelpCloseModal}
              setNeedHelp={setNeedHelp}
            />
          )}
        </NeedHelpModal>
      </Tooltip>
    </>
  );
}
