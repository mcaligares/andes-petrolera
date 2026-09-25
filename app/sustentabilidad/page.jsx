import HeroSustentabilidad from '../../components/sections/sustentabilidad/HeroSustentabilidad';
import EnfoqueESG from '../../components/sections/sustentabilidad/EnfoqueESG';
import MetasESG from '../../components/sections/sustentabilidad/MetasESG';
import CambioClimatico from '../../components/sections/sustentabilidad/CambioClimatico';
import GestionAgua from '../../components/sections/sustentabilidad/GestionAgua';
import Biodiversidad from '../../components/sections/sustentabilidad/Biodiversidad';
import SeguridadSalud from '../../components/sections/sustentabilidad/SeguridadSalud';
import ComunidadesProgramas from '../../components/sections/sustentabilidad/ComunidadesProgramas';
import DiversidadTalento from '../../components/sections/sustentabilidad/DiversidadTalento';
import EticaCumplimiento from '../../components/sections/sustentabilidad/EticaCumplimiento';
import EstandaresReportes from '../../components/sections/sustentabilidad/EstandaresReportes';

export const metadata = {
  title: 'Sustentabilidad | Andes Petrolera S.A.',
  description:
    'Metas ESG con año objetivo y avance verificable: 14,7 kgCO2e/boe de intensidad de emisiones, 86,3% de reutilización de agua y TRIR de 0,42. Reporte bajo estándares GRI, SASB y TCFD.',
  alternates: { canonical: '/sustentabilidad' },
  openGraph: {
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.andespetrolera.com.ar/sustentabilidad',
    siteName: 'Andes Petrolera S.A.',
    title: 'Sustentabilidad | Andes Petrolera S.A.',
    description:
      'Ocho metas ESG con línea de base declarada y año objetivo, reportadas bajo estándares GRI, SASB y TCFD.',
    images: [
      {
        url: '/assets/img/og-andes-sustentabilidad.jpg',
        width: 1200,
        height: 630,
        alt: 'Sustentabilidad en Andes Petrolera S.A.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@andespetrolera',
    title: 'Sustentabilidad | Andes Petrolera S.A.',
    description: 'Metas ESG con año objetivo y avance verificable.',
    images: ['/assets/img/og-andes-sustentabilidad.jpg'],
  },
};

export default function PaginaSustentabilidad() {
  return (
    <>
      <HeroSustentabilidad />
      <EnfoqueESG />
      <MetasESG />
      <CambioClimatico />
      <GestionAgua />
      <Biodiversidad />
      <SeguridadSalud />
      <ComunidadesProgramas />
      <DiversidadTalento />
      <EticaCumplimiento />
      <EstandaresReportes />
    </>
  );
}
