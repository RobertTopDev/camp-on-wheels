import { LogoWrapper, LogoText, LogoIcon } from "./Logo.styled";

function Logo() {
  return (
    <LogoWrapper to="/camp-on-wheels/">
      <LogoIcon />
      <LogoText>Camp On Wheels</LogoText>
    </LogoWrapper>
  );
}

export default Logo;
