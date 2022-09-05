import Header from "../header";

function PageWrapper({ children }) {
  return (
    <div className={`page-wrapper`}>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}

export default PageWrapper;
