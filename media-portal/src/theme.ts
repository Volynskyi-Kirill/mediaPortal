import { createTheme, ThemeOptions } from "@mui/material/styles";
import { Roboto_Mono } from "next/font/google";

const RobotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const mainTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a1a1a",
      dark: "#1e88e5",
    },
    secondary: {
      main: "#000000",
    },
    info: {
      main: "#91aebf",
    },
    success: {
      main: "#6b8e6c",
    },
    warning: {
      main: "#bd997c",
    },
  },
  typography: {
    fontFamily: RobotoMono.style.fontFamily,
    fontSize: 16,
  },
  shape: {
    borderRadius: 0,
  },
});
