import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import SocialIcons from "../SocialIcons/SocialIcons";
import {
  BurgerContainer,
  CloseBurgerMenu,
  IconMenu,
  IconMenuWrapper,
  Menu,
  MenuBurgerContainer,
  BurgerMenuItems,
  BurgerLogoWrapper,
  MenuText,
} from "./MenuBurger.styled";

// eslint-disable-next-line react/prop-types
export default function MenuBurger({ toggleTheme, isDarkTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <MenuBurgerContainer>
        <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <IconMenuWrapper onClick={toggleMenu}>
          <IconMenu />
        </IconMenuWrapper>
      </MenuBurgerContainer>

      <Menu $isOpen={menuOpen}>
        <BurgerContainer>
          <CloseBurgerMenu onClick={toggleMenu} />
          <nav>
            <BurgerMenuItems>
              <li onClick={toggleMenu}>
                <MenuText to="/rental-car/">Home</MenuText>
              </li>
              <li onClick={toggleMenu}>
                <MenuText to="catalog">Catalog</MenuText>
              </li>
              <li onClick={toggleMenu}>
                <MenuText to="favorites">Favorites</MenuText>
              </li>
            </BurgerMenuItems>
          </nav>
          <BurgerLogoWrapper>
            <SocialIcons />
          </BurgerLogoWrapper>
        </BurgerContainer>
      </Menu>
    </>
  );
}
