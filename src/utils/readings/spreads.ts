export type TarotSpread = {
  slug: string;
  index: string;
  name: string;
  category: string;
  cardCount: number | null;
  summary: string;
  positions: readonly string[];
};

export const tarotSpreads = [
  {
    slug: "una-carta",
    index: "01",
    name: "Una carta",
    category: "Fundamental",
    cardCount: 1,
    summary:
      "Una orientación breve para detenerse en el presente y nombrar aquello que pide atención.",
    positions: ["presente", "atención"],
  },
  {
    slug: "tres-cartas",
    index: "02",
    name: "Tres cartas",
    category: "Fundamental",
    cardCount: 3,
    summary:
      "Una secuencia sencilla para observar el origen, la tensión actual y un movimiento posible.",
    positions: ["origen", "tensión", "movimiento"],
  },
  {
    slug: "cinco-cartas",
    index: "03",
    name: "Cinco cartas",
    category: "Fundamental",
    cardCount: 5,
    summary:
      "Un campo más amplio para poner en relación recursos, obstáculos, deseo y dirección.",
    positions: ["núcleo", "recursos", "obstáculo", "perspectiva", "dirección"],
  },
  {
    slug: "seis-cartas",
    index: "04",
    name: "Seis cartas",
    category: "Profundidad",
    cardCount: 6,
    summary:
      "Una lectura de capas para seguir una situación desde su raíz hasta el resultado que está tomando forma.",
    positions: ["situación", "raíz", "influencia", "desafío", "consejo", "resultado"],
  },
  {
    slug: "cruz-celta",
    index: "05",
    name: "Cruz celta",
    category: "Profundidad",
    cardCount: 10,
    summary:
      "Un mapa extenso para estudiar una pregunta desde varias capas de tiempo, contexto y experiencia.",
    positions: [
      "situación",
      "cruce",
      "base",
      "pasado",
      "posibilidad",
      "futuro",
      "actitud",
      "entorno",
      "temor",
      "síntesis",
    ],
  },
  {
    slug: "relaciones",
    index: "06",
    name: "Relaciones",
    category: "Temática",
    cardCount: 5,
    summary:
      "Una tirada para distinguir lo propio, lo compartido y los movimientos que aparecen dentro de un vínculo.",
    positions: ["yo", "otra persona", "vínculo", "tensión", "posibilidad"],
  },
  {
    slug: "decisiones",
    index: "07",
    name: "Decisiones",
    category: "Temática",
    cardCount: 5,
    summary:
      "Una comparación reflexiva entre caminos para reconocer recursos, riesgos y el criterio que quieres cuidar.",
    positions: ["camino A", "camino B", "recurso", "riesgo", "criterio"],
  },
  {
    slug: "autoconocimiento",
    index: "08",
    name: "Autoconocimiento",
    category: "Temática",
    cardCount: 6,
    summary:
      "Una observación de patrones, necesidades y recursos para volver a la propia experiencia con más claridad.",
    positions: ["yo visible", "sombra", "recurso", "patrón", "necesidad", "integración"],
  },
  {
    slug: "temporales",
    index: "09",
    name: "Temporales",
    category: "Tiempo",
    cardCount: 6,
    summary:
      "Una línea de observación para reconocer huellas del pasado, el umbral presente y los movimientos próximos.",
    positions: ["pasado", "huella", "presente", "umbral", "próximo movimiento", "horizonte"],
  },
  {
    slug: "invertidas",
    index: "10",
    name: "Invertidas",
    category: "Lectura",
    cardCount: 3,
    summary:
      "Una práctica para estudiar cómo cambia el significado cuando la orientación de la carta entra en la lectura.",
    positions: ["lo que se bloquea", "lo que pide revisión", "otra lectura posible"],
  },
  {
    slug: "tematicas",
    index: "11",
    name: "Temáticas",
    category: "Lectura",
    cardCount: 5,
    summary:
      "Un marco adaptable para llevar la baraja hacia una pregunta concreta sin perder el contexto de la escena.",
    positions: ["contexto", "núcleo", "influencia", "pregunta abierta", "siguiente gesto"],
  },
  {
    slug: "formular-preguntas",
    index: "12",
    name: "Formular preguntas",
    category: "Preparación",
    cardCount: null,
    summary:
      "Antes de elegir una tirada, una guía para convertir una inquietud difusa en un foco habitable.",
    positions: ["foco", "contexto", "margen de decisión"],
  },
] as const satisfies readonly TarotSpread[];
