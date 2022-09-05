import { useTranslation } from "react-i18next";
import PageWrapper from "../components/page-wrapper";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <PageWrapper className="home-page">
      <h1 className="name">
        {t("name")} <span className="family">{t("family")}</span>
      </h1>
      <p className="description">{t("home-description")}</p>
    </PageWrapper>
  );
}
