import { useTranslation } from "next-i18next";
import PageWrapper from "../components/page-wrapper";
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/Home.module.scss";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}

export default function About() {
  return <PageWrapper>fkdvbgfhd</PageWrapper>;
}
