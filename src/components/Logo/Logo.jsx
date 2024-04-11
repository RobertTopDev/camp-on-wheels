import { LogoWrapper, LogoText, LogoIcon } from "./Logo.styled";

function Logo() {
  return (
    <LogoWrapper to="/camponwheels/">
      <LogoIcon />
      <LogoText>Camp On Wheels</LogoText>
    </LogoWrapper>
  );
}

export default Logo;
