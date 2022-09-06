import { useTranslation } from "next-i18next";

const useProjects = () => {
  const { t } = useTranslation();

  const mainProjects = [
    {
      title: t("phone-book"),
      src: "/images/phone-book.png",
      description: t("phone-book-description"),
      code: "https://github.com/ali-oliaee/phoneBook/",
    },
    {
      title: t("signup-page"),
      src: "/images/signup-page.png",
      description: t("signup-page-description"),
      demo: "https://ali-oliaee.github.io/signup-page/",
      code: "https://github.com/ali-oliaee/signup-page/",
    },
    {
      title: t("rare-shop"),
      src: "/images/rare-shop.png",
      description: t("rare-shop-description"),
      code: "https://github.com/ali-oliaee/rare-shop/",
    },
    {
      title: t("portfolio"),
      src: "/images/portfolio.png",
      description: t("portfolio-description"),
      demo: "https://ali-oliaee.github.io/Ali-Oliaee/",
      code: "https://github.com/ali-oliaee/Ali-Oliaee/",
    },
    {
      title: t("calculator"),
      src: "/images/calculator.png",
      description: t("calculator-description"),
      demo: "https://ali-oliaee.github.io/Calculator/",
      code: "https://github.com/ali-oliaee/Calculator/",
    },
    {
      title: t("news-site"),
      src: "/images/news-site.png",
      description: t("news-site-description"),
      demo: "https://ali-oliaee.github.io/lorem-news/",
      code: "https://github.com/ali-oliaee/lorem-news/",
    },
    {
      title: t("instagram-ui"),
      src: "/images/instagram-ui.png",
      description: t("instagram-ui-description"),
      code: "https://github.com/ali-oliaee/Instagram-UI/",
    },
  ];

  const otherProjects = [
    {
      title: t("advice-generator"),
      src: "/images/advice-generator.png",
      description: t("advice-description"),
      demo: "https://ali-oliaee.github.io/advice-generator-app/",
      code: "https://github.com/ali-oliaee/advice-generator-app/",
    },
    {
      title: t("nft-card"),
      src: "/images/nft-card.png",
      description: t("nft-description"),
      demo: "https://ali-oliaee.github.io/NFT-card-component/",
      code: "https://github.com/ali-oliaee/NFT-card-component/",
    },
    {
      title: t("digital-clock"),
      src: "/images/digital-clock.png",
      description: t("clock-description"),
      demo: "https://ali-oliaee.github.io/Digital-clock/",
      code: "https://github.com/ali-oliaee/Digital-clock/",
    },
    {
      title: t("ai-page"),
      src: "/images/ai-page.png",
      description: t("ai-page-description"),
      demo: "https://ali-oliaee.github.io/Single-webPage/",
      code: "https://github.com/ali-oliaee/Single-webPage/",
    },
  ];

  return {
    mainProjects,
    otherProjects,
  };
};

export default useProjects;
