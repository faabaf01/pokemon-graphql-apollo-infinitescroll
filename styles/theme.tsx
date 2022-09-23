// theme.js
import { extendTheme } from "@chakra-ui/react";
// import "@fontsource/montserrat";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Noto, sans-serif",
        color: "black",
      },
      html: {
        fontFamily: "Noto, sans-serif",
        color: "black",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "inherit",
        color: "black",
      },
    },
  },
});

export default theme;
