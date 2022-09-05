import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
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
import { useTranslation } from "next-i18next";
// import SwitchLanguage from "../switch-language";

function DesktopHeader() {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <div className="desktop-header">
      <Tabs
        value={value}
        onChange={handleChange}
        className="tabs"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab
          label={t("home")}
          LinkComponent={Link}
          component="a"
          href="/"
          value={0}
        />
        <Tab
          label={t("about")}
          component="a"
          LinkComponent={Link}
          href="/about"
          value={1}
        />
        <Tab
          label={t("resume")}
          component="a"
          LinkComponent={Link}
          href="/resume"
          value={2}
        />
        <Tab
          label={t("portfolio")}
          component="a"
          LinkComponent={Link}
          href="/projects"
          value={3}
        />
        <Tab
          label={t("contact")}
          component="a"
          LinkComponent={Link}
          href="/contact"
          value={4}
        />
      </Tabs>
      {/* <SwitchLanguage /> */}
    </div>
  );
}

function MobileHeader() {
  const { t } = useTranslation();
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
          <ListItem
            button
            Linkcomponent={Link}
            component="a"
            href="/"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={t("home")} />
          </ListItem>
          <ListItem
            button
            Linkcomponent={Link}
            component="a"
            href="/about"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={t("about")} />
          </ListItem>
          <ListItem
            button
            Linkcomponent={Link}
            component="a"
            href="/resume"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <FeedOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={t("resume")} />
          </ListItem>
          <ListItem
            button
            Linkcomponent={Link}
            component="a"
            href="/projects"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <ArrowCircleDownIcon />
            </ListItemIcon>
            <ListItemText primary={t("portfolio")} />
          </ListItem>
          <ListItem
            button
            Linkcomponent={Link}
            component="a"
            href="/contact"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary={t("contact")} />
          </ListItem>
        </List>
        {/* <SwitchLanguage className="mobile-header-switch-language" /> */}
      </Drawer>
    </div>
  );
}

function Header() {
  const isMobile = useMediaQuery("(max-width: 680px)");
  // return isMobile ? <MobileHeader /> : <DesktopHeader />;
  return <DesktopHeader />;
}

export default Header;
