import {
  FacebookIcon,
  InstagramIcon,
  Link,
  SocialMenu,
  YoutubeIcon,
} from "./SocialIcons.styled";

export default function SocialIcons() {
  return (
    <SocialMenu>
      <li>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Cruise Wheels Instagram profile"
        >
          <InstagramIcon />
        </Link>
      </li>
      <li>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Cruise Wheels YouTube channel"
        >
          <YoutubeIcon />
        </Link>
      </li>
      <li>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Cruise Wheels Facebook profile"
        >
          <FacebookIcon />
        </Link>
      </li>
    </SocialMenu>
  );
}
