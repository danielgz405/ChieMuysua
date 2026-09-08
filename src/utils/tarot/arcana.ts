export type ArcanaKind = "major" | "minor";

export type ArcanaSuit = "bastos" | "copas" | "espadas" | "oros";

export type ArcanaKindFilter = "all" | ArcanaKind;

export type ArcanaSuitFilter = "all" | ArcanaSuit;

export type Arcana = {
  id: string;
  catalogIndex: number;
  number: number;
  roman: string;
  name: string;
  kind: ArcanaKind;
  suit: ArcanaSuit | null;
  rank: string | null;
  keywords: readonly string[];
  description: string;
};

export type ArcanaSuitDefinition = {
  suit: ArcanaSuit;
  label: string;
  focus: string;
  keywords: readonly string[];
};

export const majorArcana: Arcana[] = [
  {
    id: "major-00",
    catalogIndex: 1,
    number: 0,
    roman: "0",
    name: "El Loco",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["umbral", "libertad", "confianza"],
    description:
      "Un comienzo abierto: avanzar con curiosidad, aceptar lo incierto y aprender del trayecto.",
  },
  {
    id: "major-01",
    catalogIndex: 2,
    number: 1,
    roman: "I",
    name: "El Mago",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["iniciativa", "herramientas", "presencia"],
    description:
      "La capacidad de reunir recursos y convertir una intención en un primer gesto concreto.",
  },
  {
    id: "major-02",
    catalogIndex: 3,
    number: 2,
    roman: "II",
    name: "La Sacerdotisa",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["silencio", "intuición", "umbral"],
    description:
      "Lo que todavía no se muestra pide escucha, paciencia y una atención capaz de leer entre líneas.",
  },
  {
    id: "major-03",
    catalogIndex: 4,
    number: 3,
    roman: "III",
    name: "La Emperatriz",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["fertilidad", "cuidado", "forma"],
    description:
      "Una fuerza creadora que nutre, da cuerpo a las ideas y reconoce el valor de lo sensible.",
  },
  {
    id: "major-04",
    catalogIndex: 5,
    number: 4,
    roman: "IV",
    name: "El Emperador",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["estructura", "límite", "autoridad"],
    description:
      "La arquitectura que sostiene una decisión: ordenar, delimitar y hacerse cargo de una posición.",
  },
  {
    id: "major-05",
    catalogIndex: 6,
    number: 5,
    roman: "V",
    name: "El Hierofante",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["tradición", "enseñanza", "ritual"],
    description:
      "El conocimiento recibido se vuelve conversación: una tradición que puede orientar sin clausurar.",
  },
  {
    id: "major-06",
    catalogIndex: 7,
    number: 6,
    roman: "VI",
    name: "Los Enamorados",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["elección", "vínculo", "acuerdo"],
    description:
      "Una elección que compromete valores y vínculos, más allá de la simple idea de escoger entre dos opciones.",
  },
  {
    id: "major-07",
    catalogIndex: 8,
    number: 7,
    roman: "VII",
    name: "El Carro",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["avance", "dirección", "voluntad"],
    description:
      "Dos fuerzas buscan un mismo rumbo: conducir el movimiento sin confundir velocidad con dirección.",
  },
  {
    id: "major-08",
    catalogIndex: 9,
    number: 8,
    roman: "VIII",
    name: "La Fuerza",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["coraje", "templanza", "instinto"],
    description:
      "Una firmeza serena que no necesita imponerse: el coraje de permanecer en relación con lo difícil.",
  },
  {
    id: "major-09",
    catalogIndex: 10,
    number: 9,
    roman: "IX",
    name: "El Ermitaño",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["retirada", "estudio", "luz"],
    description:
      "Apartarse por un momento para encontrar una luz propia y distinguir lo esencial del ruido.",
  },
  {
    id: "major-10",
    catalogIndex: 11,
    number: 10,
    roman: "X",
    name: "La Rueda de la Fortuna",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["cambio", "ciclo", "azar"],
    description:
      "Un giro en el ciclo: reconocer lo que cambia, lo que regresa y el margen de acción disponible.",
  },
  {
    id: "major-11",
    catalogIndex: 12,
    number: 11,
    roman: "XI",
    name: "La Justicia",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["equilibrio", "consecuencia", "claridad"],
    description:
      "Mirar con precisión: sopesar decisiones, responsabilidades y consecuencias sin perder humanidad.",
  },
  {
    id: "major-12",
    catalogIndex: 13,
    number: 12,
    roman: "XII",
    name: "El Colgado",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["pausa", "perspectiva", "entrega"],
    description:
      "Suspender la respuesta conocida para dejar que otra perspectiva revele lo que la prisa ocultaba.",
  },
  {
    id: "major-13",
    catalogIndex: 14,
    number: 13,
    roman: "XIII",
    name: "La Muerte",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["cierre", "mudanza", "transformación"],
    description:
      "El final de una forma conocida y la posibilidad de hacer espacio para una transformación real.",
  },
  {
    id: "major-14",
    catalogIndex: 15,
    number: 14,
    roman: "XIV",
    name: "La Templanza",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["mezcla", "ritmo", "integración"],
    description:
      "Encontrar una proporción habitable: mezclar fuerzas distintas hasta que aparezca un ritmo sostenible.",
  },
  {
    id: "major-15",
    catalogIndex: 16,
    number: 15,
    roman: "XV",
    name: "El Diablo",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["deseo", "apego", "sombra"],
    description:
      "Observar los pactos, deseos y dependencias que condicionan la libertad cuando permanecen sin nombrar.",
  },
  {
    id: "major-16",
    catalogIndex: 17,
    number: 16,
    roman: "XVI",
    name: "La Torre",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["ruptura", "revelación", "despertar"],
    description:
      "La caída de una estructura frágil puede doler y, al mismo tiempo, devolver una verdad necesaria.",
  },
  {
    id: "major-17",
    catalogIndex: 18,
    number: 17,
    roman: "XVII",
    name: "La Estrella",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["esperanza", "orientación", "desnudez"],
    description:
      "Una esperanza sin estridencia: recuperar orientación, confianza y una relación más limpia con el futuro.",
  },
  {
    id: "major-18",
    catalogIndex: 19,
    number: 18,
    roman: "XVIII",
    name: "La Luna",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["imaginación", "niebla", "inconsciente"],
    description:
      "El territorio de lo ambiguo: distinguir intuición, temor y deseo cuando la escena no está iluminada.",
  },
  {
    id: "major-19",
    catalogIndex: 20,
    number: 19,
    roman: "XIX",
    name: "El Sol",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["claridad", "alegría", "presencia"],
    description:
      "La claridad que permite compartir, celebrar y ver la experiencia sin la capa innecesaria del secreto.",
  },
  {
    id: "major-20",
    catalogIndex: 21,
    number: 20,
    roman: "XX",
    name: "El Juicio",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["llamada", "revisión", "renacimiento"],
    description:
      "Escuchar una llamada interior y revisar la historia desde el presente, sin quedar atrapado en ella.",
  },
  {
    id: "major-21",
    catalogIndex: 22,
    number: 21,
    roman: "XXI",
    name: "El Mundo",
    kind: "major",
    suit: null,
    rank: null,
    keywords: ["cierre", "integración", "totalidad"],
    description:
      "Un ciclo que encuentra forma: integrar lo aprendido y reconocer el lugar propio dentro de un conjunto mayor.",
  },
];

const minorRankDefinitions: ReadonlyArray<{
  number: number;
  code: string;
  rank: string;
  keywords: readonly string[];
  description: string;
}> = [
  {
    number: 1,
    code: "A",
    rank: "As",
    keywords: ["semilla", "potencial", "comienzo"],
    description: "Una semilla de posibilidad pide atención para convertirse en experiencia.",
  },
  {
    number: 2,
    code: "II",
    rank: "Dos",
    keywords: ["encuentro", "equilibrio", "elección"],
    description: "Dos fuerzas se reconocen y buscan una forma de relacionarse.",
  },
  {
    number: 3,
    code: "III",
    rank: "Tres",
    keywords: ["expansión", "colaboración", "forma"],
    description: "Lo que comenzó encuentra compañía, movimiento y una primera forma compartida.",
  },
  {
    number: 4,
    code: "IV",
    rank: "Cuatro",
    keywords: ["estructura", "pausa", "estabilidad"],
    description: "Un marco permite descansar, ordenar o proteger lo que está creciendo.",
  },
  {
    number: 5,
    code: "V",
    rank: "Cinco",
    keywords: ["fricción", "cambio", "aprendizaje"],
    description: "La tensión modifica el equilibrio y obliga a aprender una respuesta nueva.",
  },
  {
    number: 6,
    code: "VI",
    rank: "Seis",
    keywords: ["intercambio", "reconocimiento", "reciprocidad"],
    description: "El movimiento se vuelve intercambio: dar, recibir y reconocer lo que circula.",
  },
  {
    number: 7,
    code: "VII",
    rank: "Siete",
    keywords: ["estrategia", "prueba", "umbral"],
    description: "Una prueba pide sostener una posición sin perder de vista el horizonte.",
  },
  {
    number: 8,
    code: "VIII",
    rank: "Ocho",
    keywords: ["movimiento", "disciplina", "flujo"],
    description: "La repetición y el ritmo convierten la intención en una práctica reconocible.",
  },
  {
    number: 9,
    code: "IX",
    rank: "Nueve",
    keywords: ["madurez", "reserva", "culminación"],
    description: "La experiencia acumulada permite cuidar los límites y distinguir lo que ya está listo.",
  },
  {
    number: 10,
    code: "X",
    rank: "Diez",
    keywords: ["ciclo", "carga", "resultado"],
    description: "Un ciclo llega a su extremo y muestra tanto su fruto como el peso que ha reunido.",
  },
  {
    number: 11,
    code: "S",
    rank: "Sota",
    keywords: ["observación", "aprendizaje", "mensaje"],
    description: "Una mirada aprendiz se acerca al mundo con curiosidad y disposición a escuchar.",
  },
  {
    number: 12,
    code: "C",
    rank: "Caballero",
    keywords: ["movimiento", "búsqueda", "impulso"],
    description: "La energía sale al encuentro de algo: busca, transporta y pone en marcha una intención.",
  },
  {
    number: 13,
    code: "R",
    rank: "Reina",
    keywords: ["presencia", "cuidado", "dominio"],
    description: "Una forma madura de habitar el palo: cuidar su materia y darle una voz propia.",
  },
  {
    number: 14,
    code: "K",
    rank: "Rey",
    keywords: ["maestría", "decisión", "autoridad"],
    description: "La experiencia se convierte en criterio, decisión y responsabilidad sobre el campo propio.",
  },
];

export const arcanaSuits: ReadonlyArray<ArcanaSuitDefinition> = [
  {
    suit: "bastos",
    label: "Bastos",
    focus: "la voluntad, el movimiento y la iniciativa",
    keywords: ["acción", "energía"],
  },
  {
    suit: "copas",
    label: "Copas",
    focus: "los afectos, la imaginación y los vínculos",
    keywords: ["emoción", "relación"],
  },
  {
    suit: "espadas",
    label: "Espadas",
    focus: "el pensamiento, el conflicto y la palabra",
    keywords: ["mente", "claridad"],
  },
  {
    suit: "oros",
    label: "Oros",
    focus: "el cuerpo, los recursos y la vida material",
    keywords: ["materia", "sostén"],
  },
];

export const minorArcana: Arcana[] = arcanaSuits.flatMap((suit, suitIndex) =>
  minorRankDefinitions.map((rank, rankIndex) => ({
    id: `${suit.suit}-${String(rank.number).padStart(2, "0")}`,
    catalogIndex: 23 + suitIndex * minorRankDefinitions.length + rankIndex,
    number: rank.number,
    roman: rank.code,
    name: `${rank.rank} de ${suit.label}`,
    kind: "minor" as const,
    suit: suit.suit,
    rank: rank.rank,
    keywords: [...rank.keywords, ...suit.keywords],
    description: `${rank.description} En ${suit.label.toLowerCase()}, esta carta lleva la atención hacia ${suit.focus}.`,
  })),
);

export const arcana: Arcana[] = [...majorArcana, ...minorArcana];
