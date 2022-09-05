import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "@mui/material";
import theme from "../utils/mui";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
