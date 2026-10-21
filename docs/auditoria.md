# Auditoría del sitio Sigma: mejoras pendientes

Auditoría general hecha el **2026-06-01**. Las mejoras están ordenadas por prioridad: **rendimiento y assets primero**.

> Este documento se reconstruyó a partir de un resumen. El plan original, con tablas de tamaños y rutas exactas, se perdió. Antes de aplicar cada punto, verifica que siga vigente en el código actual.

## Fase A: rendimiento (alto impacto, prioridad)

- **Videos:** hay unos 63 MB sin comprimir en `src/assets/*.mp4` y en `public/videos/SigmaSafi.mp4`.
  - Pasarlos a H.264 (CRF ~28) y además a WebM.
  - Moverlos fuera del bundle, a `public/`.
  - Usar `preload="none"` y `poster` en cada `<video>`.
- **Imágenes:** suman unos 8 MB.
  - Convertirlas a WebP o AVIF.
  - Añadir `loading="lazy"` a todas las `<img>`. Hoy solo el iframe de `CardContact` carga en diferido.
- **Code-splitting:** usar `React.lazy` y `Suspense` en `src/App.jsx`. Hoy las 18 vistas se importan de forma eager.
- **i18n:** incluir las traducciones en el bundle y eliminar `i18next-http-backend`.
- **AOS:** inicializar `AOS.init()` una sola vez. Hoy se llama unas 8 veces.
- **Bundle:**
  - Configurar `manualChunks` en `vite.config.js`.
  - Evaluar el reemplazo de `react-slick`.
  - Podar lo que no se usa de `flowbite-react` y `react-icons`.

## Fase B: limpieza

- Eliminar las vistas de persona obsoletas (`CraigCarletonSmith`, `LuizFelipeMauger`, `ManuelSalazar`). Esas páginas ya las resuelve `StaffPerson`.
- Unificar `SectionComponent` y `SectionComponent2`.
- Quitar el código comentado.
  - Excepción: el de personas desactivadas a propósito, como Stephano Heredia e Ivan Alencastre en `/staff`.
- Quitar los `console.log` de `ContactoForm` y `Navidad`.
- Quitar los imports sin usar y los `import React` innecesarios.
- Resolver `prop-types`: el código lo usa, pero no está en `package.json`.

## Fase C: arquitectura

- Extraer los datos hardcodeados a `src/data/*`:
  - las personas de `StaffPerson.jsx`;
  - las noticias de `News.jsx`;
  - el timeline.
- Crear un hook `useScrollToTop`.
- Unificar las convenciones de carpetas, exports y claves de i18n.

## Fase D: buenas prácticas

- Mover las credenciales de EmailJS a `.env`. Hoy están en `ContactoForm.jsx`.
- Pasar por i18n los mensajes que siguen hardcodeados.
- Añadir `alt` y atributos ARIA donde falten.
- Añadir un `ErrorBoundary` y una ruta 404.
- Mostrar un estado de carga en el formulario de contacto.
