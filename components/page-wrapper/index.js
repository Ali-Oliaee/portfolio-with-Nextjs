import Footer from "../footer.js";
import Header from "../header";
import { useRouter } from "next/router";

function PageWrapper({ children }) {
  const { locale } = useRouter();

  return (
    <div className="page-wrapper" dir={locale === "fa" ? "rtl" : "ltr"}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default PageWrapper;
