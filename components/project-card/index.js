import Button from "@mui/material/Button";
import { useTranslation } from "next-i18next";
import Image from "next/image";

function ProjectCard({ src, title, description, demo, code }) {
  const { t } = useTranslation();
  return (
    <div className="project-card">
      <Image src={src} alt="project" width={300} height={300} />
      <div className="description-bar">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-card-button-container">
          <Button disabled={!demo} href={demo} target="_blank">
            {t("demo")}
          </Button>
          <Button href={code} target="_blank">
            {t("source-code")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
