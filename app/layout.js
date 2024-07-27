import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <script
          src="https://kit.fontawesome.com/378a8f4b87.js"
          crossOrigin="anonymous"
          async
        ></script>
        <link rel="icon" href="/public/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Restaurante Rocha</title>
        <meta name="description" content="Rocha Restaurant, come and discover the best restaurant in Peniche with delicious dishes and a welcoming atmosphere, overlooking the sea where you can eat traditional dishes, fresh sea fish and seafood."/>
        <meta property="og:title" content="Restaurante Rocha" />
        <meta property="og:description" content="Restaurante Rocha, venha conhecer o melhor restaurante de Peniche com pratos deliciosos e um ambiente acolhedor, com vista para o mar onde pode comer pratos tradicionais, peixe fresco do mar e marisco." />
        <meta property="og:image" content="https://example.com/caminho/para/imagem-restaurante.jpg" />
        <meta property="og:url" content="https://www.instagram.com/rest.rocha/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Restaurante Rocha" />
        <meta property="og:locale" content="pt" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}