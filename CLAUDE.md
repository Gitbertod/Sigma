# CLAUDE.md

Guía para trabajar en el proyecto **Sigma**. Sitio web corporativo/informativo (marketing) de Sigma SAFI.

## Stack

- **React 18.3** (JSX, sin TypeScript) + **Vite 5.4** (`@vitejs/plugin-react`)
- **React Router 6.27** (routing client-side, SPA)
- **Tailwind CSS 3.4** + **Flowbite React** + **CSS Modules** (`*.module.css`)
- **i18next** (`react-i18next`, `i18next-http-backend`, `languagedetector`) — idiomas **en** y **es**
- **EmailJS** (`@emailjs/browser`) para el formulario de contacto (no hay backend propio)
- Librerías de UI/efectos: `react-icons`, `sweetalert2`, `react-slick` + `slick-carousel`, `aos`, `react-vertical-timeline-component`, `react-snowfall`
- Despliegue en **Vercel** (`vercel.json`: rewrites SPA a `/`)

## Comandos

```bash
npm run dev       # servidor de desarrollo Vite
npm run build     # build de producción -> dist/
npm run preview   # previsualizar el build
npm run lint      # ESLint
```

No hay tests configurados.

## Arquitectura

- **Entrada**: [src/main.jsx](src/main.jsx) — `createRoot` + `StrictMode` + `BrowserRouter`, importa [src/i18n.js](src/i18n.js).
- **Router**: [src/App.jsx](src/App.jsx) — define todas las rutas y renderiza `<FooterComponent/>` global. Actualmente importa las vistas de forma eager (sin code-splitting).
- **Sin estado global** (no Redux/Zustand/Context). Solo `useState` local por componente.
- **Sin capa de API/servicios**. El contenido es estático: hardcodeado en componentes o en los JSON de traducción. La única llamada externa es EmailJS desde [src/components/form-contacto/ContactoForm.jsx](src/components/form-contacto/ContactoForm.jsx).

### Estructura

```
src/
  assets/         # videos .mp4 (pesados — ver nota de rendimiento)
  components/     # ~22 componentes reutilizables (navbar, footer, cards, carrusel, drawer, formulario...)
  views/          # ~18 vistas/páginas (home, who-we-are, staff, news, managed-funds, contact-view...)
  main.jsx        # entry point
  App.jsx         # rutas
  i18n.js         # config i18next
public/
  locales/{en,es}/translation.json   # traducciones (todo el texto del sitio)
  *.jpg/png/svg   # imágenes (fotos de equipo, logos, fondos)
  news/           # imágenes de noticias
  videos/         # videos públicos
```

### Rutas principales (`src/App.jsx`)

`/` y `/es` → Home · `/who-we-are` · `/history` · `/institutional-pillars` · `/staff` y `/staff/:personId` · `/investment-committee` y `/investment-committee/:personId` · `/operating-lease` · `/news` y `/news/:articleId` · `/managed-funds` · `/product-description` · `/advantages` · `/infrastructure-private-equity/managed-funds` · `/contact-us` · `/navidad` (estacional).

Las páginas de persona individuales se resuelven todas con [src/views/staff/StaffPerson.jsx](src/views/staff/StaffPerson.jsx) según `:personId` (los datos de personas están hardcodeados ahí).

## Convenciones

- **Todo el texto visible debe ir por i18n** (`useTranslation` → `t("clave")`), nunca hardcodeado. Las claves viven en `public/locales/{en,es}/translation.json` y deben mantenerse sincronizadas entre ambos idiomas.
- Estilos: preferir clases de Tailwind; usar CSS Modules (`*.module.css`) para estilos específicos del componente.
- Imágenes/videos van en `public/` y se referencian con rutas absolutas (`/foto.jpg`).
- Los mensajes de commit del repo están en español.

## Notas de rendimiento (importante)

El sitio carga muchos MB innecesarios. Al añadir o tocar media:
- Comprimir videos e imágenes antes de incluirlos; preferir WebP/AVIF para imágenes y H.264+WebM para video.
- Usar `loading="lazy"` en `<img>` y `preload="none"` + `poster` en `<video>`.
- Evitar importar las vistas de forma eager si se trabaja en el routing (preferir `React.lazy`).

Existe una auditoría detallada con mejoras pendientes priorizadas (rendimiento primero) guardada en la memoria del proyecto y en el plan correspondiente. Consultarla antes de refactorizar.
