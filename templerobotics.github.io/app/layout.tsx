import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import NavBar from "@components/navigation/NavBar";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@styles/theme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Temple Robotics Website",
  description: "Learn about the club and our next events!",
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`} >
        <ThemeProvider theme={theme}>
          <NavBar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
