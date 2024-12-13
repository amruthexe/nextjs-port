import { FaLinkedin, FaGithub, FaDiscord, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/karthik-medaka-788ab3210/" },
  { icon: <FaGithub />, path: "https://github.com/karthik-medaka09" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/_axexk_?igsh=NDV3ZmRjY3Q0ZGQ0" },
  { icon: <FaWhatsapp />, path: "https://wa.me/916281209224" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
