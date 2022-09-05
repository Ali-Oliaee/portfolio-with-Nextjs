import { useTranslation } from "next-i18next";
import PageWrapper from "../components/page-wrapper";
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation("common");
  const customInit = (engine) => loadTrianglesPreset(engine);
  const options = {
    preset: "triangles",
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: { value: 20 },
      move: {
        speed: 1.5,
      },
    },
  };

  return (
    <PageWrapper className="home-page">
      <Particles options={options} init={customInit} />
      <h1 className="name">
        {t("name")} <span className="family">{t("family")}</span>
      </h1>
      <p className="description">{t("home-description")}</p>
    </PageWrapper>
  );
}
