/* --------------------------------------------------------------------------
   Isologotipo Andes Petrolera — manual de marca v2 (2021).
   `variante="claro"` se usa sobre fondos oscuros (footer, hero).
   -------------------------------------------------------------------------- */

export default function Logo({ variante = 'oscuro', titulo = 'Andes Petrolera S.A.' }) {
  const colorTexto = variante === 'claro' ? '#ffffff' : '#0e2a47';
  const colorSierra = variante === 'claro' ? '#ffffff' : '#14406b';
  const colorAcento = variante === 'claro' ? '#e8943a' : '#c9761d';

  return (
    <svg viewBox="0 0 268 58" role="img" aria-label={titulo} focusable="false">
      <title>{titulo}</title>

      {/* Sierra */}
      <path
        d="M2 45 L15.5 19.5 L23.5 31 L32 8 L50 45 Z"
        fill={colorSierra}
      />
      {/* Cumbre nevada */}
      <path d="M32 8 L40.2 24.8 L23.8 24.8 Z" fill={colorAcento} />
      {/* Eje de pozo */}
      <rect x="30.6" y="45" width="2.8" height="10" fill={colorAcento} />
      <rect x="24" y="53.6" width="16" height="2.4" fill={colorAcento} />

      {/* Marca denominativa */}
      <text
        x="62"
        y="30"
        fill={colorTexto}
        fontFamily="Libre Baskerville, Georgia, serif"
        fontSize="25"
        fontWeight="700"
        letterSpacing="0.6"
      >
        ANDES
      </text>
      <text
        x="63.5"
        y="46"
        fill={colorAcento}
        fontFamily="Barlow Condensed, Arial Narrow, sans-serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="4.6"
      >
        PETROLERA
      </text>
    </svg>
  );
}
