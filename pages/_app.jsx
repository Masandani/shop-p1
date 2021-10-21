import { ThemeProvider } from "@emotion/react";
import theme from "../config/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};

export default MyApp;

// setup emotion-theming (npm i emotion-theming)
