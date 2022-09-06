import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";

function SocialButtons() {
  return (
    <div className={"social-media"}>
      <IconButton
        className="icon-button"
        href="https://github.com/ali-oliaee"
        component="a"
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        className="icon-button"
        href="https://linkedin.com/in/ali-oliaee"
        target="_blank"
        component="a"
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        className="icon-button"
        href="https://gitlab.com/alioliaee31"
        target="_blank"
        component="a"
      >
        <Image src="/gitlab-logo.svg" width={22} height={22} alt="gitlab" />
      </IconButton>
      <IconButton className="icon-button" href="mailto: alioliaee31@gmail.com>">
        <GoogleIcon />
      </IconButton>
      <IconButton
        className="icon-button"
        href="https://t.me/anti_humanity"
        target="_blank"
        component="a"
      >
        <TelegramIcon />
      </IconButton>
      <IconButton
        className="icon-button"
        href="https://www.instagram.com/ali._.oliaee/"
        target="_blank"
        component="a"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        className="icon-button"
        href=" https://wa.me/989105753695"
        target="_blank"
        component="a"
      >
        <WhatsAppIcon />
      </IconButton>
      <IconButton
        className="icon-button"
        href="https://quera.org/profile/mrv9bp"
        target="_blank"
        component="a"
      >
        <Image
          src="/quera-logo.svg"
          alt="quera"
          className="icon-button"
          width={42}
          height={42}
        />
      </IconButton>
    </div>
  );
}

export default SocialButtons;
