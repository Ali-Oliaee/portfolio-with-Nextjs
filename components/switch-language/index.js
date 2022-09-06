import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "next-i18next";
import router from "next/router";

function SwitchLanguage() {
  const { t, i18n } = useTranslation();

  const changeLocale = (locale) => {
    router.push(
      {
        route: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale }
    );
  };

  return (
    <div className="switch-language" dir={i18n.dir()}>
      <span className="language">{t("language")}:</span>
      <FormControl variant="standard">
        <Select
          value={(typeof window !== "undefined" && router.locale) || "en"}
          IconComponent={() => null}
          onChange={(e) => changeLocale(e.target.value)}
          className="select"
        >
          <MenuItem value="en">en</MenuItem>
          <MenuItem value="fa">fa</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SwitchLanguage;
