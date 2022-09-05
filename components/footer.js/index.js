import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Link from "next/link";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p>
        &copy; {t("footer")}
        <Button
          LinkComponent={Link}
          component="a"
          size="large"
          href="https://reactjs.org/"
          target="_blank"
        >
          React
        </Button>
        {t("and")}
        <Button
          LinkComponent={Link}
          component="a"
          size="large"
          href="https://mui.com/"
          target="_blank"
        >
          MUI
        </Button>
      </p>
    </footer>
  );
}

export default Footer;
