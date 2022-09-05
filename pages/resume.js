import { Timeline } from "@mui/lab";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import PageWrapper from "../components/page-wrapper";
// import SmoothList from "react-smooth-list";
// import SkillItem from "../../components/skill";
// import cv from "../../cv.pdf";
import styles from "../styles/Resume.module.scss";

function ResumePage() {
  const { t } = useTranslation();
  const downloadCv = () => {
    const anchor = document.createElement("a");
    anchor.setAttribute("href", cv);
    anchor.setAttribute("download", "");
    anchor.click();
  };

  return (
    <PageWrapper>
      <div className={styles.resume_page}>
        <div>
          {/* <SmoothList> */}
          <div className={styles.experience}>
            <h1 className={styles.title}>{t("experience")}</h1>
            <p>{t("experience-description")}</p>
          </div>
          {/* </SmoothList> */}
          {/* <SmoothList delay={200}> */}
          <div className={styles.education}>
            <h2 className={styles.title}>{t("education")}</h2>
            <p>{t("education-description")}</p>
          </div>
          {/* </SmoothList> */}
          {/* <SmoothList delay={350}> */}
          <div className={styles.personality}>
            <h2 className="title">{t("personality")}</h2>
            <ul>
              <li>{t("trustworthy")}</li>
              <li>{t("teamwork")}</li>
              <li>{t("learner")}</li>
              <li>{t("listener")}</li>
            </ul>
            <Button onClick={downloadCv} className={styles.download_cv_button}>
              {t("Download-cv")}
            </Button>
          </div>
          {/* </SmoothList> */}
        </div>
        <div className={styles.skills}>
          {/* <SmoothList> */}
          <h2 className={styles.title}>{t("skills")}</h2>
          <Timeline position="alternate" style={{ direction: "ltr" }}>
            {/* <SkillItem
            title="OOP"
            description="c++, algoritms, data structures"
            />
          <SkillItem title="HTML" description="web basics" />
          <SkillItem
          title="CSS"
          description="grid, flexbox, mediaQuery, sass"
          />
          <SkillItem title="GIT" description="basic usage, github, gitlab" />
          <SkillItem
            title="JavaScript"
            description="ES6, JSON, Objects, Async/await, Promises, DOM, BOM, APIs, Hoisting, IIFE, Events, browser storages, "
          />
          <SkillItem
            title="React"
            description="React-query, React-Router, Antdesign and MaterialUI, i18n, npm and yarn, hooks, formik, axios, eslint, ssg and ssr (nextjs)"
          />
          <SkillItem
            title="Node"
            description="Restful API, mysql, mongoDB, express"
          />
          <SkillItem
            title="Linux"
            description="basic commands, terminal usage"
          />
          <SkillItem
            title="other"
            description="Scrum, trello, slack, googling, office" */}
            {/* /> */}
          </Timeline>
          {/* </SmoothList> */}
        </div>
      </div>
    </PageWrapper>
  );
}

export default ResumePage;
