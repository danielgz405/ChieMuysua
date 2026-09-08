export type AtlasSection = {
  index: string;
  label: string;
  href: string;
  summary: string;
  coordinate: string;
  positionClass: string;
  depth: number;
  showInHeader: boolean;
};

export const siteNavigation: AtlasSection[] = [
  {
    index: "01",
    label: "Tarot",
    href: "/tarot",
    summary: "Origen, historia y los 78 arcanos.",
    coordinate: "22 / 56",
    positionClass: "lg:left-[11%] lg:top-[13%]",
    depth: 7,
    showInHeader: true,
  },
  {
    index: "02",
    label: "Lecturas",
    href: "/lecturas",
    summary: "Métodos, tiradas y preguntas.",
    coordinate: "08 / 24",
    positionClass: "lg:right-[8%] lg:top-[20%]",
    depth: 11,
    showInHeader: true,
  },
  {
    index: "03",
    label: "Conocimiento",
    href: "/conocimiento",
    summary: "Símbolos, números y correspondencias.",
    coordinate: "05 / 17",
    positionClass: "lg:left-[4%] lg:top-[47%]",
    depth: 5,
    showInHeader: true,
  },
  {
    index: "04",
    label: "Mazos",
    href: "/mazos",
    summary: "Tradiciones, artistas y sistemas.",
    coordinate: "12 / 31",
    positionClass: "lg:left-[16%] lg:bottom-[8%]",
    depth: 9,
    showInHeader: true,
  },
  {
    index: "05",
    label: "Interpretación",
    href: "/interpretacion",
    summary: "Arquetipos, intuición y psicología.",
    coordinate: "03 / 19",
    positionClass: "lg:right-[7%] lg:bottom-[10%]",
    depth: 6,
    showInHeader: false,
  },
  {
    index: "06",
    label: "Biblioteca",
    href: "/biblioteca",
    summary: "Artículos, libros y recursos.",
    coordinate: "14 / 42",
    positionClass: "lg:right-[25%] lg:top-[46%]",
    depth: 12,
    showInHeader: true,
  },
  {
    index: "07",
    label: "Blog",
    href: "/blog",
    summary: "Experiencias y lecturas compartidas.",
    coordinate: "01 / 09",
    positionClass: "lg:left-[43%] lg:bottom-[5%]",
    depth: 8,
    showInHeader: true,
  },
  {
    index: "08",
    label: "Ética",
    href: "/etica",
    summary: "Principios, límites y uso responsable.",
    coordinate: "00 / 07",
    positionClass: "lg:right-[34%] lg:top-[4%]",
    depth: 4,
    showInHeader: false,
  },
];

export const primaryNavigation = siteNavigation.filter(
  (section) => section.showInHeader,
);
