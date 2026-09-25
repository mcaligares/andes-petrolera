import HeroInversores from '../../components/sections/inversores/HeroInversores';
import CotizacionAccion from '../../components/sections/inversores/CotizacionAccion';
import ResultadosTrimestrales from '../../components/sections/inversores/ResultadosTrimestrales';
import IndicadoresFinancieros from '../../components/sections/inversores/IndicadoresFinancieros';
import Reservas from '../../components/sections/inversores/Reservas';
import Guidance from '../../components/sections/inversores/Guidance';
import ReportesDescargables from '../../components/sections/inversores/ReportesDescargables';
import CalendarioEventos from '../../components/sections/inversores/CalendarioEventos';
import GobiernoCorporativo from '../../components/sections/inversores/GobiernoCorporativo';
import HechosRelevantes from '../../components/sections/inversores/HechosRelevantes';
import ContactoIR from '../../components/sections/inversores/ContactoIR';

export const metadata = {
  title: 'Inversores | Andes Petrolera S.A. (BYMA: ANDP · NYSE: ANDP)',
  description:
    'Resultados del 2T 2026, reservas certificadas, guidance, reportes descargables, calendario financiero y gobierno corporativo de Andes Petrolera S.A.',
  alternates: { canonical: '/inversores' },
  openGraph: {
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.andespetrolera.com.ar/inversores',
    siteName: 'Andes Petrolera S.A.',
    title: 'Centro de inversores | Andes Petrolera S.A.',
    description:
      'EBITDA ajustado de USD 246,3 MM en el 2T 2026, reservas probadas de 412,6 MMboe y deuda neta / EBITDA de 0,79x.',
    images: [
      {
        url: '/assets/img/og-andes-inversores.jpg',
        width: 1200,
        height: 630,
        alt: 'Centro de inversores de Andes Petrolera S.A.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@andespetrolera',
    title: 'Centro de inversores | Andes Petrolera S.A.',
    description: 'Resultados del 2T 2026, reservas, guidance y gobierno corporativo.',
    images: ['/assets/img/og-andes-inversores.jpg'],
  },
};

export default function PaginaInversores() {
  return (
    <>
      <HeroInversores />
      <CotizacionAccion />
      <ResultadosTrimestrales />
      <IndicadoresFinancieros />
      <Reservas />
      <Guidance />
      <ReportesDescargables />
      <CalendarioEventos />
      <GobiernoCorporativo />
      <HechosRelevantes />
      <ContactoIR />
    </>
  );
}
