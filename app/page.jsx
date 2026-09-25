import HeroCarrusel from '../components/sections/home/HeroCarrusel';
import QuienesSomos from '../components/sections/home/QuienesSomos';
import NuestraHistoria from '../components/sections/home/NuestraHistoria';
import MisionVisionValores from '../components/sections/home/MisionVisionValores';
import MensajePresidente from '../components/sections/home/MensajePresidente';
import PresenciaTerritorial from '../components/sections/home/PresenciaTerritorial';
import CompromisoComunidades from '../components/sections/home/CompromisoComunidades';
import InnovacionTecnologia from '../components/sections/home/InnovacionTecnologia';
import PrensaNovedades from '../components/sections/home/PrensaNovedades';
import Carreras from '../components/sections/home/Carreras';
import CifrasClave from '../components/sections/home/CifrasClave';
import InversoresTeaser from '../components/sections/home/InversoresTeaser';
import ContactoOficinas from '../components/sections/home/ContactoOficinas';

export const metadata = {
  title: 'Andes Petrolera S.A. | Compañía independiente de oil & gas en Vaca Muerta',
  description:
    'Andes Petrolera S.A. es una compañía independiente de exploración y producción con foco en el desarrollo no convencional de Vaca Muerta, Neuquén. Cinco bloques, 78.412 boe/d de producción media y 1.148 colaboradores.',
  keywords: ['Andes Petrolera', 'Vaca Muerta', 'Neuquén', 'shale oil', 'oil and gas', 'ANDP', 'Cuenca Neuquina'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.andespetrolera.com.ar/',
    siteName: 'Andes Petrolera S.A.',
    title: 'Andes Petrolera S.A. | Compañía independiente de oil & gas en Vaca Muerta',
    description:
      'Compañía independiente de exploración y producción con foco en el desarrollo no convencional de Vaca Muerta, Neuquén.',
    images: [
      {
        url: '/assets/img/og-andes-petrolera.jpg',
        width: 1200,
        height: 630,
        alt: 'Andes Petrolera S.A. — operación en la Cuenca Neuquina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@andespetrolera',
    title: 'Andes Petrolera S.A.',
    description: 'Compañía independiente de oil & gas con foco en Vaca Muerta, Neuquén.',
    images: ['/assets/img/og-andes-petrolera.jpg'],
  },
};

export default function PaginaHome() {
  return (
    <>
      <HeroCarrusel />
      <QuienesSomos />
      <NuestraHistoria />
      <MisionVisionValores />
      <MensajePresidente />
      <PresenciaTerritorial />
      <CompromisoComunidades />
      <InnovacionTecnologia />
      <PrensaNovedades />
      <Carreras />
      <CifrasClave />
      <InversoresTeaser />
      <ContactoOficinas />
    </>
  );
}
