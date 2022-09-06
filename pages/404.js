import { Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import PageWrapper from "../components/page-wrapper";
import styles from "../styles/NotFound.module.scss";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <div className={styles.not_found_page}>
        <h1>{t("404")}</h1>
        <p>{t("404-description")}</p>
        <Link href="/">
          <Button component="a">{t("back-to-home")}</Button>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
