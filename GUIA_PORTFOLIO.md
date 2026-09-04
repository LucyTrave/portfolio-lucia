# Guía técnica y formativa del portfolio

Esta guía explica cómo está construido el portfolio, cómo modificarlo y cómo defender sus decisiones en una entrevista.

## 1. Por qué se han elegido estas tecnologías

El portfolio utiliza HTML5, CSS3 y JavaScript puro porque son tecnologías que Lucía conoce y puede explicar. Para una web estática no hacen falta React, Node.js ni un sistema de compilación: añadirlos aumentaría el mantenimiento sin aportar una ventaja real al recruiter.

- **HTML5** organiza el contenido con elementos semánticos como `header`, `nav`, `main`, `section`, `article`, `aside` y `footer`.
- **CSS3** controla el diseño, el responsive, los estados de foco y las microinteracciones.
- **JavaScript** aporta funciones concretas: tema claro/oscuro, menú móvil accesible, apariciones suaves al desplazarse y año automático.
- **WebP** reduce el peso de las capturas sin perder legibilidad.
- **Git y GitHub** permiten controlar cambios, mostrar el código y publicar con GitHub Pages.

No existe instalación, servidor, base de datos ni dependencias externas.

## 2. Estructura de carpetas

```text
portfolio-lucia/
├── index.html                         # Página principal
├── css/styles.css                    # Sistema visual y responsive
├── js/
│   ├── theme-init.js                 # Aplica el tema antes de mostrar la página
│   └── main.js                       # Tema, menú, animaciones y año
├── assets/
│   ├── documents/                    # CV en PDF y DOCX
│   ├── icons/favicon.svg             # Icono de la pestaña
│   └── img/                          # Capturas optimizadas en WebP
├── projects/
│   └── gestor-escuela-teatro.html    # Case study independiente
├── robots.txt                        # Permite el rastreo de buscadores
├── sitemap.xml                       # Enumera las páginas públicas
├── .gitignore                        # Archivos que Git no debe subir
├── README.md                         # Presentación del repositorio
└── GUIA_PORTFOLIO.md                 # Este documento
```

Las rutas son relativas. Por ejemplo, `index.html` carga `css/styles.css`, mientras que la case study, al estar dentro de `projects/`, carga `../css/styles.css`.

## 3. Funcionamiento de las páginas

### Página principal: `index.html`

El orden está pensado para un recruiter:

1. El hero responde quién es Lucía, qué puesto busca y cuál es su stack principal.
2. El Gestor Escuela de Teatro aparece primero y ocupa más espacio.
3. Los proyectos secundarios muestran capacidades concretas sin competir con el principal.
4. El stack confirma tecnologías defendibles.
5. Sobre mí y Trayectoria explican la transición sin convertir el portfolio en un perfil de RR. HH.
6. Contacto repite las vías de acción al final.

### Case study: `projects/gestor-escuela-teatro.html`

Separa de forma explícita tres niveles:

- **Alcance del sistema:** funcionalidades que existen en el producto.
- **Participación inicial:** trabajo principalmente realizado en Administración dentro del equipo.
- **Mejoras posteriores:** correcciones y evolución personal verificable en los tres roles.

La página también explica arquitectura, base de datos, retos, decisiones, capturas y estado real. No se ofrece demo pública porque PHP y MySQL necesitan servidor y una revisión previa de seguridad.

## 4. Sistema de estilos

El archivo `css/styles.css` empieza con variables CSS:

```css
:root {
    --ink: #081421;
    --canvas: #f6f8fb;
    --surface: #ffffff;
    --accent: #075985;
    --lime: #b7f34a;
    --container: 72rem;
}
```

Modificar una variable permite cambiar el color o el ancho máximo en todo el sitio. El diseño combina un azul oscuro profesional, un azul de acción y un verde lima usado solo como acento.

Las clases principales son:

- `.container`: limita el ancho y mantiene márgenes laterales.
- `.section`: aporta un espaciado vertical consistente.
- `.button`: base reutilizable para los CTA.
- `.featured-project`: composición especial del proyecto principal.
- `.project-card`: estructura compartida por proyectos secundarios.
- `.tech-list`: etiquetas de tecnologías sin representar niveles.
- `.case-layout`: cuadrícula de índice y contenido de la case study.

## 5. Responsive mobile-first

Los estilos base corresponden a móvil. Las mejoras para pantallas mayores aparecen al final:

```css
@media (min-width: 46rem) { /* tablet */ }
@media (min-width: 64rem) { /* escritorio */ }
```

En móvil, los contenidos se apilan y la navegación se convierte en un botón. En tablet aparecen dos columnas cuando aportan claridad. En escritorio el proyecto destacado y la case study aprovechan mejor el ancho.

Comprueba al menos estos anchos en las herramientas de desarrollo del navegador: 320, 375, 768, 1024 y 1440 píxeles.

## 6. Accesibilidad

Las decisiones principales son:

- Enlace “Saltar al contenido” para usuarios de teclado.
- Jerarquía lógica de encabezados: un solo `h1` y secciones con `h2`.
- Texto alternativo que describe la información útil de cada captura.
- Controles con foco claramente visible.
- Menú con `aria-expanded` y cierre mediante Escape.
- Navegación completamente utilizable sin ratón.
- No se comunica información solo mediante color.
- Contraste alto entre texto y fondos.
- Animaciones reducidas cuando el sistema solicita menos movimiento.

El bloque relevante para movimiento reducido es:

```css
@media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
        transition-duration: .01ms !important;
        animation-duration: .01ms !important;
    }
}
```

## 7. JavaScript incorporado

`js/theme-init.js` se carga al principio de la página. Recupera la preferencia guardada en `localStorage` o utiliza el modo claro u oscuro configurado en el sistema. Se ejecuta antes de cargar los estilos para evitar un cambio brusco de color.

`js/main.js` controla el botón de tema, guarda la elección y actualiza su etiqueta accesible. También añade la clase `js` al documento. Así el menú permanece visible si JavaScript no funciona y solo se transforma en desplegable cuando el navegador puede controlarlo.

El botón actualiza `aria-expanded`, cambia el texto accesible entre “Abrir menú” y “Cerrar menú”, y permite cerrar mediante:

- selección de un enlace;
- tecla Escape;
- clic fuera del menú;
- cambio a tamaño de escritorio.

Las apariciones al desplazarse utilizan `IntersectionObserver`. Cada elemento se anima una sola vez al entrar en pantalla. Si el navegador no dispone de esta función, todo el contenido permanece visible.

La última función escribe el año actual en todos los elementos con `data-current-year`.

### Por qué no se han añadido partículas o fondos 3D

Los fondos controlados por el cursor aumentan el uso de recursos y distraen de los proyectos. El portfolio utiliza gradientes, una cuadrícula sutil, cambios de sombra y movimiento limitado. La sensación visual es más cuidada sin dificultar la lectura.

## 8. SEO técnico

Cada página incluye:

- título único;
- `meta description` descriptiva;
- URL canónica;
- metadatos Open Graph;
- idioma español;
- HTML semántico.

La portada añade datos estructurados `Person` con nombre, puesto, ciudad y perfiles profesionales. `robots.txt` permite rastreo y `sitemap.xml` incluye las dos páginas públicas.

Las palabras profesionales aparecen dentro de frases naturales: Desarrollo Web Junior, PHP, JavaScript, MySQL, frontend, backend y full stack. Repetirlas artificialmente empeoraría la lectura y no aporta credibilidad.

## 9. Cómo modificar textos y enlaces

Abre `index.html` en VS Code y usa `Ctrl + F` para localizar el texto. Cambia solo el contenido entre etiquetas.

Ejemplo de enlace:

```html
<a href="https://github.com/LucyTrave/DavanteDent"
   target="_blank"
   rel="noreferrer">Código</a>
```

- `href` contiene el destino.
- `target="_blank"` abre una pestaña nueva.
- `rel="noreferrer"` evita compartir información innecesaria con el destino.

Para el email se usa `mailto:lucytrave@gmail.com`. No añadas el teléfono al HTML ni a datos estructurados.

## 10. Cómo cambiar una imagen

1. Guarda la nueva captura dentro de `assets/img/`.
2. Usa un nombre descriptivo en minúsculas y sin espacios, por ejemplo `davantedent-formulario.webp`.
3. Sustituye el valor de `src` en el HTML.
4. Actualiza `width`, `height` y `alt` con los valores y descripción reales.
5. Mantén `loading="lazy"` en imágenes que no aparecen al comienzo de la página.

El texto alternativo debe explicar qué demuestra la captura, no repetir “imagen de”.

## 11. Cómo añadir un proyecto

Copia un bloque `<article class="project-card">` de `index.html` y cambia:

- imagen y texto alternativo;
- estado real;
- nombre;
- problema o propósito;
- conocimientos demostrados;
- tecnologías;
- repositorio y demo.

No promociones un repositorio hasta que tenga un README claro, instrucciones reproducibles y un estado coherente con lo que afirma el portfolio.

## 12. Cómo comprobar errores

Antes de publicar:

1. Abre la web con Live Server.
2. Recorre todos los enlaces y botones.
3. Navega solo con Tab, Shift + Tab, Enter y Escape.
4. Revisa móvil y escritorio en DevTools.
5. Comprueba que no hay errores rojos en la consola.
6. Valida HTML en `https://validator.w3.org/`.
7. Ejecuta Lighthouse desde Chrome para revisar accesibilidad, rendimiento y SEO.
8. Prueba en Chrome y Firefox.
9. Comprueba la ruta de la case study y la descarga del CV.

## 13. Guardarlo en el ordenador y abrirlo en VS Code

Ubicación recomendada:

```text
Documentos/
└── Desarrollo-Web/
    └── portfolio-lucia/
```

No lo guardes en `htdocs`: es una web estática y no necesita XAMPP.

En Windows:

1. Descomprime el ZIP.
2. Mueve la carpeta `portfolio-lucia` a `Documentos/Desarrollo-Web/`.
3. Abre VS Code.
4. Selecciona **Archivo > Abrir carpeta**.
5. Elige `portfolio-lucia`.
6. Instala Live Server si todavía no lo tienes.
7. Haz clic derecho en `index.html` y selecciona **Open with Live Server**.

También puedes abrir `index.html` con doble clic, aunque Live Server facilita las pruebas.

## 14. Flujo de cambios con Git

Primera publicación:

```bash
git init
git add .
git commit -m "Publica portfolio profesional"
git branch -M main
git remote add origin https://github.com/LucyTrave/portfolio-lucia.git
git push -u origin main
```

Cambios posteriores:

```bash
git status
git add .
git commit -m "Actualiza la case study del Gestor"
git push
```

`git status` permite revisar qué se va a incluir. Los mensajes deben describir el cambio, no utilizar textos genéricos como “cosas” o “cambios”.

## 15. Publicación con GitHub Pages

1. En GitHub, crea un repositorio público llamado exactamente `portfolio-lucia`.
2. Sube el contenido de la carpeta, no una carpeta adicional que lo envuelva.
3. Abre **Settings > Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona `main` y `/ (root)`.
6. Guarda y espera a que GitHub muestre la dirección publicada.
7. Abre `https://lucytrave.github.io/portfolio-lucia/` en una ventana privada.
8. Revisa también `https://lucytrave.github.io/portfolio-lucia/projects/gestor-escuela-teatro.html`.

Cuando esté publicada, añade la URL a:

- cabecera del CV;
- sección Destacado de LinkedIn;
- información de contacto de LinkedIn;
- campo Website del perfil de GitHub;
- descripciones de los repositorios principales.

## 16. Cómo defender el portfolio en una entrevista

Una respuesta breve y sólida puede seguir este orden:

1. **Decisión tecnológica:** “Elegí HTML, CSS y JavaScript puro porque una web estática no necesita un framework y quería que el código reflejara tecnologías que puedo defender”.
2. **Arquitectura:** “Separé contenido, estilos y comportamiento; la case study vive en una página propia para no sobrecargar la portada”.
3. **Accesibilidad:** “La navegación funciona con teclado, el foco es visible, el menú comunica su estado y respeto `prefers-reduced-motion`”.
4. **Rendimiento:** “No hay dependencias externas y las capturas están optimizadas en WebP”.
5. **Proyecto principal:** “Diferencio el alcance colectivo del Gestor de mi participación inicial y mis mejoras posteriores”.
6. **Criterio profesional:** “Mi experiencia anterior me ayuda a entender procesos, usuarios, plazos e incidencias, pero mi objetivo es el desarrollo web”.

Prepárate para abrir los archivos y explicar una decisión concreta de HTML, una de CSS y una de JavaScript. Es mejor reconocer el alcance real de Wordle o de las demos que presentar como terminada una función que todavía no existe.
