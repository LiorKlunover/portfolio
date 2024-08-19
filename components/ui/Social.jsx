import { Item } from "@radix-ui/react-select";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/LiorKlunover" },
  { icon: <FaLinkedin />, path: "http://rb.gy/51ejc" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
    {socials.map((item, index) => {
        return(
            <Link href={item.path} key={index} legacyBehavior className={iconStyles}>
              <a className={iconStyles} target="_blank" rel="noopener noreferrer">
              {item.icon}
              </a>
            </Link>
            );
        })}
    </div>
  );
};

export default Social;
