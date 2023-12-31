"use client";

import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import { Inter } from "next/font/google";
import { mainTheme } from "@/theme";
import { Provider } from "react-redux";
import { store } from "../store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </Provider>
    </html>
  );
}
