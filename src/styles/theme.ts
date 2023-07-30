import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  breakpoints,
};

export const customTheme = extendTheme({
  config,
  colors: {
    primary: "#ED3C58",
    secondary: "#C62E46",
    grey: "#F1F5F7",
    svgLight: "#F1F5F7",
    svgDark: "#1c1c1c",
  },
  fonts: {
    heading: '"Roboto", sans-serif',
    body: '"Roboto", sans-serif',
  },
});
