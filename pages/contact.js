import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import SmoothList from "react-smooth-list";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SocialButtons from "../components/social-buttons";
import ContactCard from "../components/contact-card";
import PageWrapper from "../components/page-wrapper";
import styles from "../styles/Contact.module.scss";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Ali Oliaee | Contact</title>
      </Head>
      <PageWrapper>
        <div className={styles.contact_page}>
          <SmoothList>
            <h1>{t("contact-me")}</h1>
            <p>{t("contact-description")}</p>
            <div className={styles.cards_container}>
              <ContactCard
                icon={<EmailIcon />}
                title={t("email")}
                text="alioliaee31@gmail.com"
              />
              <ContactCard
                icon={<CallIcon />}
                title={t("call")}
                text={t("phone-number")}
              />
              <ContactCard
                icon={<LocationOnIcon />}
                title={t("location")}
                text={t("my-location")}
              />
              <ContactCard
                icon={<EmojiPeopleIcon />}
                title={t("social-media")}
                text={<SocialButtons className="social" />}
                className="social-card"
              />
            </div>
          </SmoothList>
        </div>
      </PageWrapper>
    </>
  );
}

export default ContactPage;
