# Portfolio profesional de Lucía Jiménez Travé

Portfolio estático de una **Desarrolladora Web Junior** orientado a oportunidades de desarrollo web, PHP, frontend, backend y full stack junior.

## Demo prevista

[https://lucytrave.github.io/portfolio-lucia/](https://lucytrave.github.io/portfolio-lucia/)

La dirección funcionará después de crear el repositorio `portfolio-lucia` y activar GitHub Pages.

## Objetivo

Presentar en pocos segundos el perfil técnico, el stack, el proyecto principal y las vías de contacto. Los proyectos explican el problema, el alcance, la participación y los conocimientos demostrados; no se utilizan barras de nivel ni tecnologías no confirmadas.

## Tecnologías

- HTML5 semántico.
- CSS3 mobile-first, Grid y Flexbox.
- JavaScript puro para el tema claro/oscuro, el menú accesible, las apariciones al desplazarse y el año del pie.
- WebP para reducir el peso de las capturas.
- Sin frameworks, dependencias ni proceso de compilación.

## Contenido

- Presentación profesional y disponibilidad.
- Gestor Escuela de Teatro como proyecto destacado.
- Case study independiente del Gestor.
- DavanteDent, Online SuperMarket y Wordle Java como proyectos secundarios.
- Stack, transición profesional, experiencia y formación.
- CV en PDF y DOCX.
- Metadatos SEO, datos estructurados, `robots.txt` y `sitemap.xml`.

## Estructura

```text
portfolio-lucia/
├── index.html
├── css/
│   └── styles.css
├── assets/
│   ├── documents/
│   │   ├── CV_Lucia_Jimenez_Trave.docx
│   │   └── CV_Lucia_Jimenez_Trave.pdf
│   ├── icons/
│   │   └── favicon.svg
│   └── img/
├── js/
│   ├── theme-init.js
│   └── main.js
├── projects/
│   └── gestor-escuela-teatro.html
├── GUIA_PORTFOLIO.md
├── robots.txt
├── sitemap.xml
├── .gitignore
└── README.md
```

## Uso local

No necesita instalación. Abre `index.html` en el navegador o utiliza Live Server desde VS Code. Para evitar problemas con rutas y caché durante el desarrollo, Live Server es la opción recomendada.

## Publicación en GitHub Pages

1. Crea un repositorio público llamado `portfolio-lucia` sin añadir archivos iniciales.
2. Abre una terminal dentro de esta carpeta.
3. Ejecuta:

```bash
git init
git add .
git commit -m "Publica portfolio profesional"
git branch -M main
git remote add origin https://github.com/LucyTrave/portfolio-lucia.git
git push -u origin main
```

4. En GitHub abre **Settings > Pages**.
5. En **Build and deployment**, elige **Deploy from a branch**.
6. Selecciona la rama `main`, carpeta `/ (root)` y pulsa **Save**.
7. Comprueba la publicación en `https://lucytrave.github.io/portfolio-lucia/`.

## Actualizaciones posteriores

```bash
git add .
git commit -m "Describe el cambio realizado"
git push
```

## Accesibilidad y rendimiento

- Navegación por teclado y enlace para saltar al contenido.
- Foco visible y menú móvil con estado `aria-expanded`.
- Contrastes altos y objetivos táctiles amplios.
- Respeto de `prefers-reduced-motion`.
- HTML funcional aunque JavaScript no cargue.
- Imágenes WebP con dimensiones, carga diferida y textos alternativos.

## Autoría y alcance

El Gestor Escuela de Teatro se presenta como un proyecto inicialmente desarrollado en equipo. La case study diferencia el alcance colectivo, la participación inicial de Lucía en Administración y sus mejoras personales posteriores.

## Autora

**Lucía Jiménez Travé**  
[GitHub](https://github.com/LucyTrave/) · [LinkedIn](https://www.linkedin.com/in/lucíajtravé) · [Email](mailto:lucytrave@gmail.com)
