import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    white: "#FFFFFF",
  },
  styles: {
    global: {
      body: {
        bg: "black",
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "white",
      },
    },
  },
});

export default theme;
