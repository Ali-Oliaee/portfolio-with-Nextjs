import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ExtensionIcon from "@mui/icons-material/Extension";
import GitHubIcon from "@mui/icons-material/GitHub";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import Link from "next/link";
import { Button, Divider, Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
// import SmoothList from "react-smooth-list";
// import myPicture from "../../assets/images/mine.jpg";
// import InterestCard from "../../components/interest-card";
import PageWrapper from "../components/page-wrapper/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/About.module.scss";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}

function AboutPage() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className={styles.about_page}>
        {/* <SmoothList> */}
        <h1 className={styles.title}>{t("about-title")}</h1>
        <div className={styles.description}>
          <Divider className={styles.divider}>
            {/* <Avatar
            src={myPicture}
            alt="my pic"
            sx={{ width: 120, height: 120 }}
          /> */}
          </Divider>
          <h3>
            &#128075;&#128512;
            {t("Hi")}
          </h3>
          <p>{t("about-description")} </p>
          <p>
            {t("contact-text")}
            <Button href="/contact" component="a" LinkComponent={Link}>
              {t("contact-me")}
            </Button>
          </p>
        </div>
        {/* </SmoothList> */}
        <div className={styles.interests}>
          {/* <SmoothList delay={200}> */}
          <h2>{t("interests")}</h2>
          <div className={styles.card_container}>
            {/* <InterestCard icon={<SportsEsportsIcon />} title={t("games")} /> */}
            {/* <InterestCard icon={<AudiotrackIcon />} title={t("music")} /> */}
            {/* <InterestCard icon={<ExtensionIcon />} title={t("puzzle")} /> */}
            {/* <InterestCard icon={<LocalMoviesIcon />} title={t("movies")} /> */}
            {/* <InterestCard icon={<GitHubIcon />} title={t("open-source")} /> */}
            {/* <InterestCard icon={<DirectionsWalkIcon />} title={t("walking")} /> */}
          </div>
          {/* </SmoothList> */}
        </div>
      </div>
    </PageWrapper>
  );
}

export default AboutPage;
