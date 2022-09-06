import { useState } from "react";
import { Button, Collapse, Grid, List, ListItem } from "@mui/material";
import { useTranslation } from "next-i18next";
import SmoothList from "react-smooth-list";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ProjectCard from "../components/project-card";
import Head from "next/head";
import PageWrapper from "../components/page-wrapper";
import useProjects from "../hooks/projects";
import styles from "../styles/Portfolio.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function PortfolioPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { mainProjects, otherProjects } = useProjects();

  return (
    <>
      <Head>
        <title>Ali Oliaee | Portfolio</title>
      </Head>
      <PageWrapper>
        <div className={styles.Portfolio_age}>
          <SmoothList>
            <h1>{t("portfolio")}</h1>
            <div className={styles.container}>
              <Swiper
                effect="coverflow"
                grabCursor
                centeredSlides
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                }}
                pagination
                modules={[Autoplay, EffectCoverflow, Pagination]}
              >
                {mainProjects.map(({ title, description, demo, code, src }) => (
                  <SwiperSlide key={title} className="swiper_slide">
                    <ProjectCard
                      title={title}
                      src={src}
                      description={description}
                      demo={demo}
                      code={code}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <List component="nav" className={styles.more_projects}>
                <ListItem onClick={() => setOpen(!open)}>
                  <Button
                    onClick={() => setOpen(!open)}
                    className={styles.button}
                  >
                    {open ? t("learn-less") : t("learn-more")}
                  </Button>
                </ListItem>
                <Collapse
                  in={open}
                  timeout={1500}
                  unmountOnExit
                  className={styles.list_collapse}
                >
                  <Grid container spacing={1} justifyContent="center">
                    {otherProjects.map(
                      ({ title, description, demo, code, src }) => (
                        <Grid item key={title}>
                          <ProjectCard
                            title={title}
                            src={src}
                            description={description}
                            demo={demo}
                            code={code}
                          />
                        </Grid>
                      )
                    )}
                  </Grid>
                </Collapse>
              </List>
            </div>
            <Button
              href="https://github.com/ali-oliaee?tab=repositories"
              target="_blank"
              style={{ textAlign: "center", display: "block" }}
            >
              {t("show-all")}
            </Button>
          </SmoothList>
        </div>
      </PageWrapper>
    </>
  );
}

export default PortfolioPage;
