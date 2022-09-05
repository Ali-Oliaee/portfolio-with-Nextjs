import Footer from "../footer.js";
import Header from "../header";

function PageWrapper({ children }) {
  return (
    <div className={`page-wrapper`}>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
