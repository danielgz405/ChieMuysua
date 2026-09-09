<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Arquitectura de la aplicacion

Este archivo define las reglas de organizacion y las decisiones tecnicas del
proyecto. Todo el codigo de la aplicacion debe vivir dentro de `src/`. Las
carpetas de configuracion del proyecto (`package.json`, `next.config.ts`,
`tsconfig.json`, etc.) permanecen en la raiz.

## Stack

- Next.js 16 con App Router y TypeScript.
- Turbopack para desarrollo y compilacion.
- Tailwind CSS 4 para estilos.
- Headless UI (`@headlessui/react`) para componentes accesibles sin estilos.
- Heroicons (`@heroicons/react`) para iconografia.
- React Toastify (`react-toastify`) para notificaciones.
- MongoDB para persistencia.
- Markdown para la edicion de articulos del blog.
- Integracion de IA mediante proveedores intercambiables, sin acoplar la
  interfaz a un proveedor concreto.

## Lenguaje visual y sistema de diseno

Las referencias `oc_the_blackboard.png` y `carnation_collage.png` definen la
direccion visual del producto. La interfaz debe sentirse como un atlas
esoterico, un observatorio y un gabinete de historia natural a la vez: precisa,
silenciosa, editorial y con rastros de archivo. No debe parecer una tienda
mistica generica, un dashboard SaaS ni una interfaz futurista de neon.

### Principios visuales

- Combinar la cartografia astronomica de la primera referencia con la textura
  de papel, los grabados botanicos y las laminas cientificas de la segunda.
- Dar prioridad al contenido, al espacio negativo y a la composicion editorial
  antes que a la decoracion.
- Tratar cada carta, mazo y articulo como una pieza catalogada, no como una
  tarjeta generica de una cuadricula.
- Usar diagramas orbitales, constelaciones, ejes, numeraciones y lineas finas
  como lenguaje de apoyo. Deben guiar o contextualizar, no competir con el
  contenido.
- Mantener una tension controlada entre lo nocturno y lo antiguo: superficies
  oscuras para la lectura y la contemplacion; superficies de papel para el
  conocimiento, el archivo y el blog.

### Paleta de referencia

Los valores siguientes son tokens iniciales. Se pueden ajustar cuando exista
un sistema de color formal, pero no se deben reemplazar por colores saturados
sin una razon de producto.

| Token | Valor | Uso principal |
| --- | --- | --- |
| `--color-night` | `#151516` | Fondo obsidiana y escenas de lectura |
| `--color-night-soft` | `#202025` | Superficies elevadas sobre fondo nocturno |
| `--color-astral` | `#777687` | Lineas, estrellas, diagramas y estados secundarios |
| `--color-paper` | `#e8e2cf` | Fondo pergamino y contenido editorial |
| `--color-paper-deep` | `#d1c6ad` | Bordes, separadores y superficies de papel envejecido |
| `--color-ink` | `#3f3a34` | Texto principal sobre papel |
| `--color-sepia` | `#76624d` | Grabados, metadatos y acentos historicos |
| `--color-brass` | `#a08b66` | Acentos pequenos, nunca como color dominante |

Las superficies nocturnas deben usar texto claro con contraste suficiente y
las superficies de papel deben usar tinta oscura. No se debe usar blanco puro
como fondo principal ni negro absoluto como fondo unico. Los acentos metalicos
o sepia se reservan para reglas, indices, estados activos y detalles pequenos.

### Tipografia

- Usar una serif editorial de aspecto historico para titulos, nombres de cartas
  y citas. `Cormorant Garamond`, `EB Garamond` o una serif local equivalente
  son referencias validas.
- Usar una serif de lectura o una sans humanista para textos largos, segun el
  contraste necesario sobre cada superficie. La legibilidad tiene prioridad
  sobre la imitacion historica.
- Usar una monoespaciada sobria para coordenadas, numeros de carta, fechas,
  etiquetas tecnicas, estados y referencias de catalogo. `IBM Plex Mono` o
  una fuente equivalente son referencias validas.
- Las letras manuscritas o caligraficas solo se permiten en pequenos rótulos
  ornamentales, como una fecha, una especie botanica o una nota de placa. No
  deben usarse para botones, instrucciones ni textos funcionales.
- La jerarquia se construye con escala, peso, interlineado y espacio. No se
  deben convertir todos los textos en mayusculas ni usar tracking excesivo.
- Las fuentes locales, cuando se incorporen, deben vivir en
  `src/assets/fonts` y cargarse con `next/font/local` desde el layout o desde
  un componente de tipografia claramente aislado.

### Composicion y superficies

- Preferir composiciones asimetricas de revista, atlas o lamina cientifica,
  con margenes generosos y un foco visual claro.
- Usar una reticula editorial estable en escritorio y convertirla en una sola
  columna respirada en pantallas pequenas. La asimetria debe ser intencional,
  nunca romper la lectura.
- Las laminas botanicas y astronomicas pueden ocupar todo el fondo o salir de
  los limites de una seccion, siempre con una capa de contraste que mantenga
  legibles los textos.
- Los marcos de imagen, reglas horizontales, esquinas de placa, indices y
  pies de figura deben recordar a un libro antiguo o a un archivo de museo.
- Usar bordes de uno o dos pixeles, sombras muy contenidas y radios pequenos.
  Las superficies no deben parecer tarjetas flotantes con `rounded-full` ni
  depender de sombras grandes para crear jerarquia.
- El collage debe tener capas y solapes controlados: una lamina principal,
  una anotacion, una regla o un diagrama secundario. No se deben apilar
  elementos sin una relacion visual explicita.
- Una pagina no debe convertirse automaticamente en una cuadricula de cards.
  Las cuadriculas se reservan para catalogos, resultados o comparaciones que
  realmente las necesiten.

### Imagen, textura e ilustracion

- Priorizar ilustraciones de dominio publico, grabados botanicos, mapas
  celestes, diagramas, fotografias de papel y detalles de cartas.
- Las imagenes deben conservar una apariencia material: grano sutil, tinta,
  desgaste, papel o escala de impresion. No se deben aplicar filtros fuertes
  que oculten la imagen original.
- Los recursos importados por la aplicacion viven en `src/assets/images`.
  Los recursos que necesiten una URL publica directa pueden vivir en `public`.
- Las texturas deben ser muy sutiles y no sustituir la estructura de color ni
  el contraste. Evitar ruido animado, fondos con gradientes llamativos y
  efectos de cristal.
- Los diagramas astrales decorativos deben ser secundarios y llevar
  `aria-hidden="true"` cuando no aporten informacion. Toda informacion que
  aparezca solo en una imagen debe tener una alternativa textual.

### Componentes y controles

- Headless UI aporta comportamiento y accesibilidad, pero la apariencia se
  implementa con los tokens de este documento y Tailwind. No se deben dejar
  estilos por defecto que contradigan el archivo visual.
- Los botones deben parecer controles de archivo: rectangulares, con borde,
  etiqueta clara, icono lineal opcional y una transicion discreta. Las pastillas
  solo se permiten cuando representan un estado o categoria compacta.
- Los inputs deben tener etiqueta visible, borde fino, fondo de papel o noche
  segun el contexto y estados de foco muy claros. No se debe depender solo del
  placeholder.
- Los modales deben sentirse como una hoja, folio o placa superpuesta, con
  jerarquia y cierre evidente, no como una caja generica centrada.
- Los mensajes Toast de React Toastify deben usar la paleta nocturna o de papel
  y nunca ser el unico canal para comunicar un error.
- Heroicons se usa con trazos sobrios y tamano funcional. No se deben llenar
  las pantallas de iconos decorativos sin significado.
- Las cartas de tarot deben conservar una lectura vertical, un marco definido,
  un pie de catalogo y una distincion visible entre posicion derecha e
  invertida. La decoracion nunca debe ocultar el nombre ni el significado.

### Movimiento e interaccion

- Las animaciones deben ser lentas y ceremoniales: apariciones suaves,
  desplazamientos cortos, revelado progresivo y rotaciones muy contenidas.
- Se pueden animar orbitas, lineas o particulas de forma casi imperceptible,
  pero nunca deben distraer de una tirada o de una lectura.
- No usar rebotes, flashes, parallax agresivo ni transiciones de videojuego.
- Toda animacion debe tener una alternativa para `prefers-reduced-motion`.
- Los estados hover, focus, pressed, disabled y loading deben ser visibles sin
  cambiar la identidad historica de la interfaz.

### Responsive y accesibilidad visual

- En escritorio se puede aprovechar el collage, el espacio negativo y las
  composiciones asimetricas. En movil se debe conservar el foco principal y
  eliminar adornos que reduzcan el area util.
- Las laminas panoramicas deben recortarse de forma intencional y no forzar
  scroll horizontal.
- Los textos pequenos de catalogo son decorativos o secundarios; nunca deben
  ser la unica forma de comunicar instrucciones, errores o estados.
- Verificar contraste de texto, foco visible, navegacion por teclado, nombres
  accesibles e instrucciones para lectores de pantalla en cada componente.
- El estado de una carta invertida debe comunicarse con orientacion visual,
  texto y una etiqueta accesible, no solo con color o rotacion.

### Lo que se debe evitar

- Gradientes neon, morados electricos, colores candy o brillos metalicos
  intensos.
- Tarjetas blancas identicas con bordes redondeados grandes y sombras fuertes.
- Dashboards, hero sections y layouts de SaaS que no tengan relacion con el
  atlas, el archivo o la lectura contemplativa.
- Mezclar demasiadas tipografias, usar caligrafia en textos funcionales o
  convertir cada elemento en una pieza vintage ilegible.
- Decoracion astral sin funcion, fondos con demasiado ruido o imagenes que
  compitan con las cartas y los textos.
- El uso de emojis como iconos de interfaz. Se deben usar Heroicons u otros
  recursos coherentes con el sistema visual.

## Estructura base

```text
src/
├── app/                         # Rutas, layouts y Route Handlers
├── assets/
│   ├── fonts/                   # Fuentes locales
│   ├── images/                  # Imagenes importadas por la aplicacion
│   └── styles/
│       └── globals.css          # Tailwind y estilos globales
├── components/
│   ├── common/                  # Componentes reutilizables en varias paginas
│   └── <seccion>/<pagina>/      # Componentes exclusivos de una pagina
├── hooks/                       # Hooks reutilizables de cliente
└── utils/                       # Funciones, validaciones e integraciones
```

Las carpetas `fonts` e `images` deben conservarse separadas. Los archivos
publicos que necesiten una URL directa pueden vivir en `public/`; no se debe
usar `public/` para guardar logica de la aplicacion.

## Reglas de `app`

- Cada pagina publica debe tener su propio `page.tsx` dentro de `src/app`.
- Una pagina debe ser pequena y limitarse a componer componentes. No debe
  contener logica de negocio, consultas complejas, transformaciones grandes ni
  formularios completos.
- `src/app/layout.tsx` es el layout general. Solo se creara un layout anidado
  cuando un grupo de paginas necesite una navegacion, contexto o estructura
  visual diferente.
- Los layouts deben compartir UI, no convertirse en contenedores de logica de
  dominio.
- Los componentes de servidor son el valor predeterminado. Se usara
  `"use client"` unicamente cuando se necesite estado, eventos, APIs del
  navegador o una libreria que lo exija.
- Las rutas de API se implementan como Route Handlers dentro de
  `src/app/api/**/route.ts`. Las consultas a MongoDB y las claves secretas
  nunca se importan en componentes cliente.
- Los nombres de carpetas de rutas deben usar minusculas, sin tildes ni
  espacios. Las rutas dinamicas usaran `[slug]` o `[id]`.
- El CSS global se importa desde `@/assets/styles/globals.css` en el layout
  general. No se debe crear otro CSS global por pagina.

## Mapa de rutas

La siguiente estructura representa las secciones del sitio. Las carpetas y
paginas se agregaran al implementar cada funcionalidad, manteniendo este
orden y estos nombres de URL.

```text
src/app/
├── layout.tsx
├── page.tsx
├── tarot/
│   ├── page.tsx
│   ├── que-es-el-tarot/page.tsx
│   ├── historia/page.tsx
│   ├── los-78-arcanos/page.tsx
│   ├── arcanos-mayores/page.tsx
│   └── arcanos-menores/page.tsx
├── lecturas/
│   ├── page.tsx
│   ├── interpretacion/page.tsx
│   ├── online/page.tsx
│   └── online/
│       ├── una-carta/page.tsx
│       ├── tres-cartas/page.tsx
│       ├── cinco-cartas/page.tsx
│       ├── seis-cartas/page.tsx
│       ├── cruz-celta/page.tsx
│       ├── relaciones/page.tsx
│       ├── decisiones/page.tsx
│       ├── autoconocimiento/page.tsx
│       ├── temporales/page.tsx
│       ├── invertidas/page.tsx
│       ├── tematicas/page.tsx
│       └── formular-preguntas/page.tsx
├── conocimiento/
│   ├── page.tsx
│   ├── simbolismo/page.tsx
│   ├── numerologia/page.tsx
│   ├── correspondencias/page.tsx
│   ├── astrologia/page.tsx
│   └── cabala-y-hermetismo/page.tsx
├── mazos/
│   ├── page.tsx
│   ├── marsella/page.tsx
│   ├── waite-smith/page.tsx
│   ├── thoth/page.tsx
│   ├── historicos/page.tsx
│   └── contemporaneos/page.tsx
├── interpretacion/
│   ├── page.tsx
│   ├── psicologia/page.tsx
│   ├── jung-y-el-tarot/page.tsx
│   ├── arquetipos/page.tsx
│   ├── intuicion/page.tsx
│   └── tarot-predictivo/page.tsx
├── biblioteca/
│   ├── page.tsx
│   ├── articulos/page.tsx
│   ├── glosario/page.tsx
│   ├── libros/page.tsx
│   └── recursos/
│       ├── page.tsx
│       └── gemini-api-key/page.tsx
├── blog/
│   ├── page.tsx
│   ├── nuevo/page.tsx
│   └── [slug]/page.tsx
├── etica/
│   ├── page.tsx
│   ├── principios/page.tsx
│   ├── limites/page.tsx
│   └── uso-responsable/page.tsx
└── api/
    ├── decks/
    │   ├── route.ts
    │   └── [id]/route.ts
    ├── cards/
    │   ├── route.ts
    │   └── [id]/route.ts
    ├── articles/
    │   ├── route.ts
    │   └── [id]/route.ts
    └── ai/
        └── interpretation/route.ts
```

Las rutas para mostrar una carta concreta o un mazo concreto pueden usar
`[slug]`, por ejemplo `src/app/mazos/[slug]/page.tsx`, sin cambiar la
organizacion de las secciones.

## Reglas de componentes

- Cada componente debe vivir en su propio archivo `.tsx`.
- Un archivo de componente debe exportar un solo componente visual. Si se
  necesita otro componente, se crea otro archivo.
- Cada componente debe ser una funcion con un unico `return` JSX y una unica
  responsabilidad. Se permite devolver un `Fragment` o un elemento raiz que
  agrupe otros elementos.
- No se deben declarar componentes auxiliares dentro de una pagina o de otro
  componente.
- La logica de datos, transformacion y validacion se extrae a `hooks`, `utils`
  o Route Handlers segun corresponda.
- Las props deben tener tipos explicitos. No usar `any` salvo que exista una
  justificacion tecnica documentada.
- Un componente cliente no debe abrir conexiones a MongoDB ni contener claves
  de proveedores de IA.

La carpeta `components` se organiza por dominio y por pagina:

```text
src/components/
├── common/
│   ├── alerts/
│   ├── buttons/
│   ├── cards/
│   ├── dialogs/
│   ├── empty-states/
│   ├── forms/
│   ├── inputs/
│   ├── loading/
│   ├── markdown/
│   ├── navigation/
│   └── toasts/
├── tarot/
│   └── <pagina>/
├── lecturas/
│   └── online/
│       └── <tipo-de-tirada>/
├── conocimiento/
│   └── <pagina>/
├── mazos/
│   └── <pagina>/
├── interpretacion/
│   └── <pagina>/
├── biblioteca/
│   └── <pagina>/
├── blog/
│   ├── listado/
│   ├── editor/
│   ├── detalle/
│   └── moderacion/
└── etica/
    └── <pagina>/
```

Cada `<pagina>` debe sustituirse por una carpeta concreta. Por ejemplo, la
pagina de tres cartas debe quedar asi:

```text
src/components/lecturas/online/tres-cartas/
├── ThreeCardSpread.tsx
├── card-drawer/
│   └── CardDrawer.tsx
├── card-meaning/
│   └── CardMeaning.tsx
├── question-form/
│   └── QuestionForm.tsx
└── interpretation/
    └── InterpretationPanel.tsx
```

`components/common` contiene solo piezas realmente compartidas entre dos o
mas dominios. Ejemplos: botones, inputs, modales, alertas, dialogos de
confirmacion, spinners, paginacion, toasts y renderizadores seguros de
Markdown. Un componente que solo sirve para una pagina no debe terminar en
`common`.

## Hooks

Los hooks deben contener estado y comportamiento reutilizable de cliente. Se
organizaran por dominio cuando crezcan:

```text
src/hooks/
├── readings/
│   ├── use-card-draw.ts
│   ├── use-shuffle-deck.ts
│   └── use-reading-session.ts
├── ai/
│   └── use-ai-interpretation.ts
├── blog/
│   └── use-markdown-editor.ts
└── ui/
    ├── use-debounce.ts
    └── use-dialog.ts
```

No se debe crear un hook para una sola asignacion de estado. Los hooks no
deben hacer consultas directas a MongoDB; deben llamar a Route Handlers o a
servicios cliente tipados.

## Utils y servicios reutilizables

`src/utils` contiene funciones puras y adaptadores reutilizables. Cada
funcion debe tener una responsabilidad clara y, cuando sea posible, ser
facil de probar sin navegador ni base de datos.

```text
src/utils/
├── ai/
│   ├── providers/
│   │   ├── provider.ts
│   │   ├── gemini.ts
│   │   └── openai-compatible.ts
│   ├── prompt.ts
│   └── interpretation.server.ts
├── db/
│   ├── mongodb.server.ts
│   ├── decks.server.ts
│   ├── cards.server.ts
│   └── articles.server.ts
├── formatters/
│   ├── date.ts
│   └── text.ts
├── markdown/
│   ├── parse.ts
│   └── sanitize.ts
├── readings/
│   ├── spreads.ts
│   ├── shuffle.ts
│   └── orientation.ts
├── security/
│   ├── anti-bot.server.ts
│   ├── rate-limit.server.ts
│   └── edit-token.server.ts
└── validation/
    ├── deck.ts
    ├── card.ts
    ├── article.ts
    └── reading.ts
```

Los archivos que usen secretos, MongoDB o APIs exclusivas del servidor deben
terminar en `.server.ts`. Los que dependan de APIs del navegador deben
terminar en `.client.ts`. Nunca se debe importar un modulo `.server.ts` desde
un componente cliente.

## Tiradas de cartas

Todas las tiradas deben seguir el mismo flujo, aunque cada metodo tenga
posiciones distintas:

1. El usuario selecciona el mazo, el tipo de tirada y formula su pregunta.
2. El sistema prepara una copia del mazo y la baraja sin mutar la fuente.
3. Las cartas se extraen de una en una, sin repetir cartas.
4. Cada carta guarda su posicion, indice, orientacion y datos del mazo.
5. La orientacion se decide por carta: `upright` (derecha) o `reversed`
   (invertida).
6. Debajo de cada carta se muestra el significado correspondiente a su
   orientacion.
7. La interpretacion de IA solo se habilita cuando se hayan extraido todas
   las cartas de la tirada.
8. El prompt de IA debe incluir la pregunta, el metodo, la posicion, la carta,
   la orientacion y el significado seleccionado.
9. La UI debe distinguir visualmente una carta invertida y anunciarlo tambien
   para lectores de pantalla.

La baraja debe usar un algoritmo de mezcla Fisher-Yates con una fuente de
aleatoriedad adecuada para el navegador. La extraccion debe consumir la lista
barajada, nunca escoger indices repetidos de forma independiente.

La interpretacion debe presentarse como una herramienta reflexiva y no como
una certeza medica, legal, financiera o de seguridad. La seccion de Etica
debe aparecer cerca de las lecturas y de la pantalla de interpretacion.

## MongoDB

La conexion se centraliza en `src/utils/db/mongodb.server.ts`. Debe existir
una sola instancia reutilizable por proceso y no se debe abrir una conexion
nueva en cada peticion. La URI se lee desde `MONGODB_URI` y el nombre de la
base desde `MONGODB_DB`.

### Coleccion `decks`

Cada mazo debe contener como minimo:

```text
_id: ObjectId
name: string
author: string
artist: string
year: number | null
publisher: string
system: string
cardCount: number
artStyle: string
tradition: string
differencesFromRwsMarsella: string
review: string
featuredCards: ObjectId[]
slug: string
createdAt: Date
updatedAt: Date
```

`featuredCards` referencia documentos de `cards`. El `slug` debe ser unico.
Los campos obligatorios se validan en el Route Handler antes de escribir.

### Coleccion `cards`

Las cartas se relacionan con su mazo mediante `deckId`, que contiene el
`_id` del documento de `decks`:

```text
_id: ObjectId
deckId: ObjectId
name: string
number: number
arcana: "major" | "minor"
suit: string | null
image: string
keywords: string[]
description: string
uprightMeaning: string
reversedMeaning: string
createdAt: Date
updatedAt: Date
```

Debe existir un indice unico compuesto por `deckId` y `number`. No se debe
duplicar la informacion completa del mazo dentro de cada carta.

### Coleccion `articles`

Aunque los mazos y las cartas son las colecciones principales del catalogo,
el blog necesita una coleccion propia para persistir publicaciones anonimas:

```text
_id: ObjectId
title: string
slug: string
excerpt: string
contentMarkdown: string
status: "pending" | "approved" | "rejected"
editTokenHash: string
createdAt: Date
updatedAt: Date
moderatedAt: Date | null
```

Nunca se guarda el token de edicion en texto plano. Las publicaciones nuevas
quedan `pending` hasta superar la verificacion anti-bot y la moderacion
correspondiente.

## API y CRUD

Los Route Handlers validan entrada, autorizan la operacion, ejecutan la
consulta y devuelven respuestas tipadas. Las respuestas de error no deben
exponer credenciales, URIs ni trazas internas.

```text
GET    /api/decks              # Listar mazos
POST   /api/decks              # Crear mazo, protegido
GET    /api/decks/:id          # Obtener mazo
PATCH  /api/decks/:id          # Actualizar mazo, protegido
DELETE /api/decks/:id          # Eliminar mazo, protegido

GET    /api/cards              # Listar cartas, filtra por deckId
POST   /api/cards              # Crear carta, protegido
GET    /api/cards/:id          # Obtener carta
PATCH  /api/cards/:id          # Actualizar carta, protegido
DELETE /api/cards/:id          # Eliminar carta, protegido

GET    /api/articles           # Solo articulos aprobados publicos
POST   /api/articles           # Crear articulo anonimo en estado pending
PATCH  /api/articles/:id       # Editar con token de edicion valido
DELETE /api/articles/:id       # Eliminar con token o moderacion

POST   /api/ai/interpretation  # Interpretar una tirada completa
```

Los metodos de escritura del catalogo no deben quedar publicos sin una
autorizacion definida. El blog anonimo es la unica excepcion de escritura
publica y debe tener limite de frecuencia, honeypot y verificacion anti-bot.

## Integracion con IA

La UI debe permitir al usuario elegir un proveedor y proporcionar su propia
API key. La clave se envia unicamente por HTTPS en la peticion de
interpretacion, no se guarda en MongoDB, no se escribe en logs y no se incluye
en el prompt persistido.

La integracion debe depender de una interfaz comun, por ejemplo:

```text
interpretReading({ provider, apiKey, question, spread, cards })
```

Cada proveedor implementa ese contrato en `src/utils/ai/providers/`. El Route
Handler valida el proveedor, limita el tamano de la entrada y normaliza la
respuesta antes de enviarla al navegador. La aplicacion no debe obligar a
usar un proveedor concreto.

Debe existir una pagina de ayuda en
`/biblioteca/recursos/gemini-api-key` que explique paso a paso como obtener
una API key gratuita desde Google AI Studio, sus limites, la diferencia entre
una clave de prueba y una cuenta de pago, y las precauciones para no
compartirla. La pantalla de configuracion debe advertir que la clave es
personal y ofrecer eliminarla de la sesion.

## Blog anonimo y Markdown

- No se requiere cuenta para crear un articulo.
- El editor se implementa en `/blog/nuevo` y trabaja con Markdown.
- La vista previa debe sanitizar el resultado y desactivar HTML peligroso,
  scripts, iframes no autorizados y atributos inseguros.
- El servidor vuelve a validar y sanitizar el Markdown; nunca se confia solo
  en la validacion del navegador.
- Cada envio usa honeypot, limite de frecuencia y una verificacion de robots
  o anti-spam, preferentemente Cloudflare Turnstile o un proveedor equivalente.
- El token anti-bot se verifica en el servidor y no se almacena.
- Un articulo nuevo queda pendiente de moderacion para impedir spam.
- Si se permite editar sin cuenta, se entrega un token de edicion al autor y
  solo se guarda su hash. El token no debe formar parte de la URL publica.
- Los articulos aprobados se muestran en `/blog` y `/blog/[slug]`.

## UI, accesibilidad y notificaciones

- Headless UI se usa para dialogs, menus, popovers, tabs, disclosures y
  componentes que necesiten interaccion accesible.
- Heroicons se usa en vez de dibujar SVGs repetidos dentro de paginas.
- React Toastify se configura una sola vez en el layout general mediante un
  componente de cliente dedicado. No se deben crear varios `ToastContainer`.
- Todos los controles interactivos deben tener nombre accesible, foco visible,
  estados de carga y mensajes de error comprensibles.
- Una notificacion Toast no puede ser la unica forma de comunicar un error;
  los formularios tambien deben mostrar el mensaje junto al campo o contexto
  afectado.
- El diseno debe ser responsive y funcionar con teclado y lectores de
  pantalla.

## Convenciones de implementacion

- Usar alias `@/*` para imports desde `src`.
- Usar nombres de archivos en kebab-case para rutas y componentes en PascalCase
  para sus exportaciones.
- Separar la obtencion de datos del renderizado.
- Preferir funciones puras, tipos explicitos y validacion en los limites del
  sistema.
- No duplicar definiciones de cartas, posiciones de tiradas o mensajes de
  error; centralizarlos en `utils`.
- No agregar logica de negocio a `globals.css` ni a componentes de UI comun.
- Al crear una pagina nueva, crear en la misma tarea su carpeta de
  componentes dentro de `src/components/<seccion>/<pagina>/`.
- Antes de cambiar APIs de Next.js, leer la documentacion instalada en
  `node_modules/next/dist/docs/` y respetar las convenciones de Next 16.

## Verificacion obligatoria

Antes de considerar terminada una funcionalidad se deben ejecutar:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Los cambios de lecturas deben comprobar tambien que no se repiten cartas, que
la orientacion invertida muestra el significado correcto y que la IA no se
puede solicitar antes de completar la tirada. Los cambios del blog deben
comprobar sanitizacion, verificacion anti-bot, moderacion y ausencia de tokens
en respuestas o logs.

## TODO general

Esta lista representa objetivos generales del producto. No sustituye la
planificacion tecnica ni obliga a resolver cada punto en una sola tarea.

- [ ] Consolidar la base de la aplicacion y el sistema visual.
- [ ] Construir la navegacion y las secciones publicas de conocimiento.
- [ ] Desarrollar el catalogo de mazos y cartas.
- [ ] Crear las experiencias de lecturas y tiradas de cartas.
- [ ] Integrar interpretaciones de IA configurables por el usuario.
- [ ] Crear la biblioteca de contenidos y la guia para obtener una API key de Gemini.
- [ ] Implementar el blog anonimo con Markdown y moderacion.
- [ ] Completar seguridad, accesibilidad, responsive y estados de interfaz.
- [ ] Validar el producto y preparar su despliegue.
