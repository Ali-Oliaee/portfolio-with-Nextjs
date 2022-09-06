import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import SwitchLanguage from "../switch-language";

function DesktopHeader() {
  const { t } = useTranslation();
  const router = useRouter();
  const [value, setValue] = useState(0);
  const handleChange = () => {
    switch (router.asPath) {
      case "/":
        setValue(0);
        break;
      case "/about":
        setValue(1);
        break;
      case "/resume":
        setValue(2);
        break;
      case "/projects":
        setValue(3);
        break;
      default:
        setValue(4);
        break;
    }
  };

  useEffect(() => handleChange(), [router.asPath]);

  return (
    <div className="desktop-header">
      <Tabs
        value={value}
        onChange={handleChange}
        className="tabs"
        textColor="primary"
        indicatorColor="primary"
      >
        <Link href="/" passHref>
          <Tab label={t("home")} value={0} />
        </Link>
        <Link href="/about" passHref>
          <Tab label={t("about")} value={1} />
        </Link>
        <Link href="/resume" passHref>
          <Tab label={t("resume")} value={2} />
        </Link>
        <Link href="/projects" passHref>
          <Tab label={t("portfolio")} value={3} />
        </Link>
        <Link href="/contact" passHref>
          <Tab label={t("contact")} value={4} />
        </Link>
      </Tabs>
      <SwitchLanguage />
    </div>
  );
}

function MobileHeader() {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  return (
    <div className="mobile-header">
      <IconButton onClick={() => setVisible(true)}>
        <MenuIcon className="burger-icon" />
      </IconButton>
      <Drawer
        anchor={i18n.dir() === "rtl" ? "right" : "left"}
        open={visible}
        onClose={() => setVisible(false)}
        className="mobile-header-drawer"
      >
        <List className="list">
          <Link href="/" passHref>
            <ListItem button onClick={() => setVisible(false)}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={t("home")} />
            </ListItem>
          </Link>
          <Link href="/about" passHref>
            <ListItem button onClick={() => setVisible(false)}>
              <ListItemIcon>
                <InfoOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={t("about")} />
            </ListItem>
          </Link>
          <Link href="/resume" passHref>
            <ListItem button onClick={() => setVisible(false)}>
              <ListItemIcon>
                <FeedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={t("resume")} />
            </ListItem>
          </Link>
          <Link href="/projects" passHref>
            <ListItem button onClick={() => setVisible(false)}>
              <ListItemIcon>
                <ArrowCircleDownIcon />
              </ListItemIcon>
              <ListItemText primary={t("portfolio")} />
            </ListItem>
          </Link>
          <Link href="/contact" passHref>
            <ListItem button onClick={() => setVisible(false)}>
              <ListItemIcon>
                <CallIcon />
              </ListItemIcon>
              <ListItemText primary={t("contact")} />
            </ListItem>
          </Link>
        </List>
        <SwitchLanguage />
      </Drawer>
    </div>
  );
}

function Header() {
  const isMobile = useMediaQuery("(max-width: 680px)");
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}

export default Header;
