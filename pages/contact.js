import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTranslation } from "react-i18next";
// import SmoothList from "react-smooth-list";
// import SocialButtons from "../../components/social-media";
// import ContactCard from "../../components/contact-card";
import PageWrapper from "../components/page-wrapper";
import styles from "../styles/Contact.module.scss";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <div className={styles.contact_page}>
        {/* <SmoothList> */}
        <h1>{t("contact-me")}</h1>
        <p>{t("contact-description")}</p>
        <div className={styles.cards_container}>
          {/* <ContactCard
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
        /> */}
        </div>
        {/* </SmoothList> */}
      </div>
    </PageWrapper>
  );
}

export default ContactPage;
