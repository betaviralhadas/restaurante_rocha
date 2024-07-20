import { Inter } from "next/font/google";
import "./globals.scss";
//import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <script src="https://kit.fontawesome.com/378a8f4b87.js" crossorigin="anonymous"></script>
        <title>Restaurante Rocha</title>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}