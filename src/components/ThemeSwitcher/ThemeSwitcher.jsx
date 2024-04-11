import {
  IconClickLight,
  IconClickDark,
  SwitcherTheme,
} from "./ThemeSwitcher.styled";

// eslint-disable-next-line react/prop-types
export default function ThemeSwitcher({ toggleTheme, isDarkTheme }) {
  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <SwitcherTheme
      type="button"
      aria-label="Change theme"
      onClick={handleThemeToggle}
    >
      {isDarkTheme ? <IconClickDark /> : <IconClickLight />}
    </SwitcherTheme>
  );
}
