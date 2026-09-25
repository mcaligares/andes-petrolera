/* Información financiera — 2T 2026 y serie trimestral.
   Cifras en millones de dólares estadounidenses salvo indicación en contrario.
   No auditadas. Fuente: Gerencia de Administración y Finanzas. */

export const KPIS_TRIMESTRE = [
  { etiqueta: 'Producción media', valor: '78.412', unidad: 'boe/d', variacion: '+14,3% i.a.', sube: true },
  { etiqueta: 'Ingresos por ventas', valor: '412,7', unidad: 'USD MM', variacion: '+15,2% i.a.', sube: true },
  { etiqueta: 'EBITDA ajustado', valor: '246,3', unidad: 'USD MM', variacion: '+11,8% i.a.', sube: true },
  { etiqueta: 'Resultado neto', valor: '88,4', unidad: 'USD MM', variacion: '+9,4% i.a.', sube: true },
];

export const ESTADO_RESULTADOS = [
  { concepto: 'Ingresos por ventas', t2026: '412,7', t2025: '358,2', variacion: '+15,2%', signo: 'positivo' },
  { concepto: 'Costos operativos', t2026: '(148,9)', t2025: '(123,5)', variacion: '+20,6%', signo: 'negativo' },
  { concepto: 'Gastos de comercialización y administración', t2026: '(17,5)', t2025: '(14,4)', variacion: '+21,5%', signo: 'negativo' },
  { concepto: 'EBITDA ajustado', t2026: '246,3', t2025: '220,3', variacion: '+11,8%', signo: 'positivo', destacar: true },
  { concepto: 'Depreciaciones y amortizaciones', t2026: '(108,4)', t2025: '(91,2)', variacion: '+18,9%', signo: 'negativo' },
  { concepto: 'Resultado operativo', t2026: '137,9', t2025: '129,1', variacion: '+6,8%', signo: 'positivo' },
  { concepto: 'Resultados financieros netos', t2026: '(28,6)', t2025: '(24,9)', variacion: '+14,9%', signo: 'negativo' },
  { concepto: 'Impuesto a las ganancias', t2026: '(20,9)', t2025: '(23,4)', variacion: '-10,7%', signo: 'positivo' },
  { concepto: 'Resultado neto del período', t2026: '88,4', t2025: '80,8', variacion: '+9,4%', signo: 'positivo', destacar: true },
];

export const SERIE_TRIMESTRAL = {
  columnas: ['1T 2025', '2T 2025', '3T 2025', '4T 2025', '1T 2026', '2T 2026'],
  filas: [
    { concepto: 'Producción media (boe/d)', valores: ['66.140', '68.602', '70.915', '72.880', '75.604', '78.412'] },
    { concepto: 'Producción de petróleo (bbl/d)', valores: ['50.267', '52.618', '54.604', '56.346', '58.968', '61.207'] },
    { concepto: 'Producción de gas (MMm³/d)', valores: ['2,52', '2,54', '2,59', '2,63', '2,65', '2,74'] },
    { concepto: 'Ingresos por ventas (USD MM)', valores: ['341,8', '358,2', '372,4', '389,1', '398,6', '412,7'] },
    { concepto: 'EBITDA ajustado (USD MM)', valores: ['208,4', '220,3', '228,9', '236,5', '240,2', '246,3'] },
    { concepto: 'Margen EBITDA ajustado', valores: ['61,0%', '61,5%', '61,5%', '60,8%', '60,3%', '59,7%'] },
    { concepto: 'Capex (USD MM)', valores: ['156,4', '168,2', '171,9', '182,4', '174,3', '178,6'] },
    { concepto: 'Lifting cost (USD/boe)', valores: ['7,26', '7,13', '7,02', '6,95', '6,91', '6,84'] },
    { concepto: 'Precio realizado de crudo (USD/bbl)', valores: ['64,10', '65,80', '66,40', '67,20', '67,90', '68,40'] },
    { concepto: 'Precio realizado de gas (USD/MMBtu)', valores: ['3,74', '3,86', '3,95', '4,02', '4,08', '4,12'] },
    { concepto: 'Deuda neta (USD MM)', valores: ['854,0', '816,3', '798,5', '786,2', '761,4', '742,0'] },
    { concepto: 'Deuda neta / EBITDA aj. LTM', valores: ['1,02x', '0,94x', '0,91x', '0,86x', '0,82x', '0,79x'] },
    { concepto: 'Pozos conectados en el período', valores: ['10', '12', '11', '13', '16', '18'] },
  ],
};

export const RESERVAS = {
  fecha: '31 de diciembre de 2025',
  categorias: [
    { nombre: 'Probadas desarrolladas (PD)', valor: '181,4', ancho: 44, clase: '' },
    { nombre: 'Probadas no desarrolladas (PND)', valor: '231,2', ancho: 56, clase: '' },
    { nombre: 'Total probadas (P1)', valor: '412,6', ancho: 100, clase: '', destacar: true },
    { nombre: 'Probables (P2)', valor: '326,3', ancho: 79, clase: 'p2' },
    { nombre: 'Posibles (P3)', valor: '241,7', ancho: 59, clase: 'p3' },
  ],
  indicadores: [
    { etiqueta: 'Vida útil de reservas (R/P)', valor: '14,4 años' },
    { etiqueta: 'Índice de reposición de reservas (RRR)', valor: '187%' },
    { etiqueta: 'Participación del petróleo en P1', valor: '76%' },
    { etiqueta: 'Valor presente neto a tasa 10% (P1)', valor: 'USD 4.128 MM' },
  ],
};

export const GUIDANCE = [
  { titulo: 'Producción media anual', rango: '76.000 – 79.500 boe/d', nota: 'Confirmado el 6 de agosto de 2026. Al cierre del primer semestre el promedio acumulado es de 77.008 boe/d.' },
  { titulo: 'Inversiones de capital', rango: 'USD 690 – 720 MM', nota: 'Incluye perforación, terminación, facilities y la ingeniería de la tercera etapa de Batería Central II.' },
  { titulo: 'Lifting cost', rango: 'USD 6,70 – 7,00 /boe', nota: 'El promedio del primer semestre se ubicó en USD 6,88 por barril equivalente.' },
  { titulo: 'Pozos horizontales conectados', rango: '44 – 48 pozos', nota: 'Al 30 de junio de 2026 se conectaron 34 pozos, distribuidos en cuatro pads.' },
  { titulo: 'Deuda neta / EBITDA ajustado', rango: '≤ 1,0x', nota: 'Compromiso mantenido desde la colocación de las Obligaciones Negociables Clase VII.' },
  { titulo: 'Intensidad de emisiones', rango: '≤ 14,0 kgCO2e/boe', nota: 'Alcance 1 y 2. Objetivo intermedio dentro de la trayectoria hacia 9,5 kgCO2e/boe en 2030.' },
];

export const REPORTES = [
  { anio: '2026', nombre: 'Andes_Petrolera_2T2026_Earnings_Presentation.pdf', descripcion: 'Presentación de resultados del segundo trimestre de 2026', peso: '4,2 MB', fecha: '06/08/2026' },
  { anio: '2026', nombre: 'Andes_Petrolera_2T2026_Estados_Financieros_Intermedios.pdf', descripcion: 'Estados financieros intermedios condensados al 30/06/2026', peso: '2,8 MB', fecha: '06/08/2026' },
  { anio: '2026', nombre: 'Andes_Petrolera_2T2026_Earnings_Release_ES.pdf', descripcion: 'Comunicado de resultados del segundo trimestre de 2026', peso: '0,9 MB', fecha: '06/08/2026' },
  { anio: '2026', nombre: 'Andes_Petrolera_Corporate_Presentation_Sep2026.pdf', descripcion: 'Presentación corporativa actualizada a septiembre de 2026', peso: '6,1 MB', fecha: '10/09/2026' },
  { anio: '2026', nombre: 'Andes_Petrolera_1T2026_Earnings_Presentation.pdf', descripcion: 'Presentación de resultados del primer trimestre de 2026', peso: '4,0 MB', fecha: '07/05/2026' },
  { anio: '2026', nombre: 'Andes_Petrolera_1T2026_Estados_Financieros_Intermedios.pdf', descripcion: 'Estados financieros intermedios condensados al 31/03/2026', peso: '2,6 MB', fecha: '07/05/2026' },
  { anio: '2025', nombre: 'Andes_Petrolera_Memoria_y_Estados_Financieros_2025.pdf', descripcion: 'Memoria y estados financieros consolidados del ejercicio 2025', peso: '11,4 MB', fecha: '05/03/2026' },
  { anio: '2025', nombre: 'Andes_Petrolera_Form_20-F_2025.pdf', descripcion: 'Formulario 20-F presentado ante la SEC', peso: '7,6 MB', fecha: '28/04/2026' },
  { anio: '2025', nombre: 'Andes_Petrolera_4T2025_Earnings_Presentation.pdf', descripcion: 'Presentación de resultados del cuarto trimestre y ejercicio 2025', peso: '4,6 MB', fecha: '05/03/2026' },
  { anio: '2025', nombre: 'Andes_Petrolera_Informe_de_Reservas_2025.pdf', descripcion: 'Informe de reservas certificado al 31/12/2025', peso: '3,3 MB', fecha: '05/03/2026' },
  { anio: '2025', nombre: 'Andes_Petrolera_Reporte_Sustentabilidad_2025.pdf', descripcion: 'Reporte de sustentabilidad 2025 con índice GRI y SASB', peso: '9,2 MB', fecha: '22/04/2026' },
  { anio: '2024', nombre: 'Andes_Petrolera_Memoria_y_Estados_Financieros_2024.pdf', descripcion: 'Memoria y estados financieros consolidados del ejercicio 2024', peso: '10,8 MB', fecha: '06/03/2025' },
  { anio: '2024', nombre: 'Andes_Petrolera_Reporte_Sustentabilidad_2024.pdf', descripcion: 'Reporte de sustentabilidad 2024', peso: '8,4 MB', fecha: '18/04/2025' },
];

export const DOCUMENTOS_GOBIERNO = [
  { nombre: 'Estatuto_Social_Andes_Petrolera.pdf', descripcion: 'Texto ordenado aprobado por la Asamblea del 24/04/2025', peso: '1,2 MB' },
  { nombre: 'Codigo_de_Etica_y_Conducta_2025.pdf', descripcion: 'Aplicable a directores, colaboradores y contratistas', peso: '0,8 MB' },
  { nombre: 'Politica_de_Anticorrupcion_2024.pdf', descripcion: 'Programa de integridad conforme a la Ley 27.401', peso: '0,6 MB' },
  { nombre: 'Reglamento_Comite_de_Auditoria.pdf', descripcion: 'Funcionamiento y competencias del Comité', peso: '0,4 MB' },
  { nombre: 'Politica_de_Operaciones_con_Partes_Relacionadas.pdf', descripcion: 'Procedimiento de aprobación y régimen informativo', peso: '0,5 MB' },
  { nombre: 'Politica_de_Dividendos.pdf', descripcion: 'Aprobada por el Directorio el 11/12/2024', peso: '0,3 MB' },
];

export const EVENTOS = [
  { dia: '05', mes: 'Nov', anio: '2026', titulo: 'Conference call de resultados del 3T 2026', detalle: '10:00 h ART · Transmisión en vivo con sesión de preguntas y respuestas' },
  { dia: '18', mes: 'Nov', anio: '2026', titulo: 'Andes Energy Day 2026', detalle: 'Buenos Aires · Presentación del plan de desarrollo 2027-2030' },
  { dia: '03', mes: 'Dic', anio: '2026', titulo: 'BYMA Latam Investor Conference', detalle: 'Buenos Aires · Participación del equipo de Relaciones con Inversores' },
  { dia: '25', mes: 'Feb', anio: '2027', titulo: 'Publicación de resultados del 4T 2026 y ejercicio 2026', detalle: 'Posterior al cierre del mercado' },
  { dia: '26', mes: 'Feb', anio: '2027', titulo: 'Conference call de resultados del 4T 2026', detalle: '10:00 h ART' },
  { dia: '22', mes: 'Abr', anio: '2027', titulo: 'Asamblea General Ordinaria y Extraordinaria de Accionistas', detalle: 'Sede social · Primera convocatoria' },
];

export const DIRECTORIO = [
  { nombre: 'Eduardo M. Bassani', cargo: 'Presidente del Directorio', independiente: false, desde: '2017' },
  { nombre: 'Lucrecia Ordóñez', cargo: 'Vicepresidenta', independiente: false, desde: '2017' },
  { nombre: 'Hernán Sagastume', cargo: 'Director titular', independiente: false, desde: '2018' },
  { nombre: 'Rocío Benegas', cargo: 'Directora titular', independiente: false, desde: '2021' },
  { nombre: 'Fabián Recalde', cargo: 'Director titular', independiente: false, desde: '2021' },
  { nombre: 'Ignacio Vergara Paz', cargo: 'Director titular', independiente: false, desde: '2023' },
  { nombre: 'Tomás Larraburu', cargo: 'Director independiente', independiente: true, desde: '2021' },
  { nombre: 'Marcela Juncos', cargo: 'Directora independiente', independiente: true, desde: '2022' },
  { nombre: 'Silvina Ferreyra', cargo: 'Directora independiente', independiente: true, desde: '2026' },
];

export const COMITES = [
  { nombre: 'Comité de Auditoría', texto: 'Integrado en su totalidad por directores independientes. Supervisa el control interno, la auditoría externa y las operaciones con partes relacionadas.' },
  { nombre: 'Comité de Nombramientos y Remuneraciones', texto: 'Propone la política de compensaciones de la alta dirección y los planes de sucesión.' },
  { nombre: 'Comité de Riesgos', texto: 'Revisa la matriz de riesgos corporativos, la política de coberturas y la estructura de financiamiento.' },
  { nombre: 'Comité de HSE y Sustentabilidad', texto: 'Monitorea el desempeño en seguridad, ambiente y comunidades, y el avance de las metas ESG.' },
];

export const HECHOS_RELEVANTES = [
  { fecha: '06/08/2026', texto: 'Presentación de los estados financieros intermedios correspondientes al período de seis meses finalizado el 30 de junio de 2026.' },
  { fecha: '12/05/2026', texto: 'Comunicación del alcance de un nuevo máximo de producción media mensual de 78.140 boe/d en abril de 2026.' },
  { fecha: '24/04/2026', texto: 'Resoluciones de la Asamblea General Ordinaria y Extraordinaria de Accionistas celebrada el 23 de abril de 2026.' },
  { fecha: '11/02/2026', texto: 'Designación de Silvina Ferreyra como directora independiente en reemplazo de un cargo vacante, con efecto a partir del 1 de marzo de 2026.' },
  { fecha: '05/11/2025', texto: 'Colocación de Obligaciones Negociables Clase VII por un valor nominal de USD 300.000.000, con vencimiento en 2032.' },
  { fecha: '14/08/2025', texto: 'Aprobación por el Directorio de la ampliación del programa global de emisión de obligaciones negociables hasta USD 1.500.000.000.' },
  { fecha: '17/09/2024', texto: 'Celebración del contrato de cesión del 55% de los derechos sobre la concesión no convencional Bajo del Cóndor.' },
];
