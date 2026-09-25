import HeroOperaciones from '../../components/sections/operaciones/HeroOperaciones';
import ResumenOperativo from '../../components/sections/operaciones/ResumenOperativo';
import MapaBloques from '../../components/sections/operaciones/MapaBloques';
import BloquesDetalle from '../../components/sections/operaciones/BloquesDetalle';
import PerforacionTerminacion from '../../components/sections/operaciones/PerforacionTerminacion';
import FacilitiesEvacuacion from '../../components/sections/operaciones/FacilitiesEvacuacion';
import Exploracion from '../../components/sections/operaciones/Exploracion';
import SeguridadOperacional from '../../components/sections/operaciones/SeguridadOperacional';
import Proveedores from '../../components/sections/operaciones/Proveedores';

export const metadata = {
  title: 'Operaciones | Andes Petrolera S.A.',
  description:
    'Cinco bloques en la Cuenca Neuquina, 241 pozos horizontales en producción y 684 km² de superficie neta. Perforación, terminación, facilities y evacuación de Andes Petrolera S.A.',
  alternates: { canonical: '/operaciones' },
  openGraph: {
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.andespetrolera.com.ar/operaciones',
    siteName: 'Andes Petrolera S.A.',
    title: 'Operaciones | Andes Petrolera S.A.',
    description:
      'Desarrollo no convencional de Vaca Muerta: bloques, perforación y terminación, facilities y evacuación.',
    images: [
      {
        url: '/assets/img/og-andes-operaciones.jpg',
        width: 1200,
        height: 630,
        alt: 'Operaciones de Andes Petrolera en la Cuenca Neuquina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@andespetrolera',
    title: 'Operaciones | Andes Petrolera S.A.',
    description: 'Cinco bloques en la Cuenca Neuquina y 241 pozos horizontales en producción.',
    images: ['/assets/img/og-andes-operaciones.jpg'],
  },
};

export default function PaginaOperaciones() {
  return (
    <>
      <HeroOperaciones />
      <ResumenOperativo />
      <MapaBloques />
      <BloquesDetalle />
      <PerforacionTerminacion />
      <FacilitiesEvacuacion />
      <Exploracion />
      <SeguridadOperacional />
      <Proveedores />
    </>
  );
}
