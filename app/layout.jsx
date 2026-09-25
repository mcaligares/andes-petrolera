import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerCookies from '../components/BannerCookies';
import Analitica from '../components/Analitica';

export const metadata = {
  metadataBase: new URL('https://www.andespetrolera.com.ar'),
  applicationName: 'Andes Petrolera S.A.',
  authors: [{ name: 'Andes Petrolera S.A.' }],
  publisher: 'Andes Petrolera S.A.',
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/assets/img/apple-touch-icon.png',
  },
  other: {
    'theme-color': '#0e2a47',
    'geo.region': 'AR-C',
    'geo.placename': 'Ciudad Autónoma de Buenos Aires',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <head>
        {/* ------------------------------------------------------------------
            Tipografías corporativas.
            Libre Baskerville + Source Sans 3 (manual de marca v2, 2021).
            Roboto Slab y Open Sans quedaron del rediseño 2019 y siguen en uso
            en bloques de la home y en el módulo de valores.
            ------------------------------------------------------------------ */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700" />

        {/* Hoja de estilos principal */}
        <link rel="stylesheet" href="/css/styles.css" />

        {/* ------------------------------------------------------------------
            Scripts del sitio. Se cargan en la cabecera para que el carrusel y
            las animaciones estén disponibles lo antes posible.
            ------------------------------------------------------------------ */}
        <script src="/js/metricas.js" />
        <script src="/js/andes-ui.js" />
        <script src="/js/animaciones.js" />
      </head>

      <body>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <BannerCookies />
        <Analitica />
      </body>
    </html>
  );
}
