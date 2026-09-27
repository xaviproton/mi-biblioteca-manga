# Mi biblioteca de manga

Base de una aplicación web para móvil con Next.js (App Router), React,
TypeScript y Tailwind CSS. El alojamiento se decidirá más adelante.

## Desarrollo

Requiere Node.js 24 LTS y npm. Desde la carpeta del proyecto:

```sh
npm install
npm run dev
```

Abrir http://localhost:3000 en este ordenador. El servidor escucha solo en
127.0.0.1; no está publicado ni accesible desde otro dispositivo.
En PowerShell, si la política bloquea `npm.ps1`, utilizar `npm.cmd`.

## Comprobaciones

```sh
npm run lint
npm run typecheck
npm run build
```

`npm start` sirve la compilación de producción después de `npm run build`.

## Estructura

- `src/app/`: páginas, layout móvil, estilos globales y metadatos.
- `src/components/`: componentes visuales reutilizables.
- `src/types/library.ts`: modelo inicial de autores, obras, ediciones y lectura.

## Alcance de esta primera base

Pantalla inicial vacía, diseño móvil (ancho máximo de 480 px) con estética de
manga de horror y surrealismo: papel texturizado, tinta negra, rojo, marcos de
viñetas y una ilustración original de biblioteca imposible. Fuentes Barlow
Condensed y DM Sans incluidas localmente mediante Fontsource, sin conexiones a
servicios de fuentes al abrir la app ni descargas al compilar.

Los filtros Todos, Leyendo e Incompletos cambian su selección y mensaje de estado
vacío; todavía no filtran datos persistidos. La ilustración generada para este
proyecto se guarda en `public/images/impossible-library.png` y se sirve con
`next/image`. Accesibilidad básica, foco visible, controles de al menos 44 px de
alto y página 404. No hay datos de colección simulados.

La información «en preparación» es temporal y se retirará al conectar las funciones.

## Próximos pasos acordados

1. Búsqueda de mangas con Jikan; Google Books como complemento para ediciones.
2. Revisión manual de datos, portada y cantidad de tomos por edición.
3. Una cuenta privada con correo y contraseña, sin registro público.
4. Conexión desde el servidor a MongoDB Atlas Free y portadas comprimidas.
5. Control de posesión, faltantes y lectura; organización por autor.
6. Exportación/restauración manual, incluyendo las portadas.
7. Manifiesto, iconos de instalación y configuración PWA; requiere HTTPS al alojar.

Todavía no hay autenticación, persistencia, APIs, PWA instalable ni modo sin conexión.
MongoDB Atlas gratuito puede pausarse tras 30 días sin actividad y requerir
reactivación. Nunca guardar contraseñas o credenciales en el código ni exponer
la conexión de MongoDB al navegador. No publicar datos personales hasta añadir
la autenticación.
