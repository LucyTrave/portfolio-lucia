/* JavaScript progresivo: tema, menú móvil, aparición al desplazarse y año. */
document.documentElement.classList.add('js');

const themeButtons = document.querySelectorAll('[data-theme-toggle]');

const updateThemeControls = () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    const label = isDark ? 'Activar modo claro' : 'Activar modo oscuro';

    themeButtons.forEach((button) => {
        button.setAttribute('aria-label', label);
        const accessibleLabel = button.querySelector('[data-theme-label]');
        if (accessibleLabel) accessibleLabel.textContent = label;
    });
};

themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = nextTheme;
        document.documentElement.style.colorScheme = nextTheme;

        try {
            localStorage.setItem('portfolio-theme', nextTheme);
        } catch {
            // El cambio sigue funcionando aunque el navegador bloquee localStorage.
        }

        updateThemeControls();
    });
});

updateThemeControls();

const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-navigation]');

if (menuButton && navigation) {
    const isOpen = () => menuButton.getAttribute('aria-expanded') === 'true';

    const closeMenu = () => {
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
        menuButton.querySelector('.sr-only').textContent = 'Abrir menú';
    };

    menuButton.addEventListener('click', () => {
        const menuWasOpen = isOpen();
        menuButton.setAttribute('aria-expanded', String(!menuWasOpen));
        navigation.classList.toggle('is-open', !menuWasOpen);
        menuButton.querySelector('.sr-only').textContent = menuWasOpen ? 'Abrir menú' : 'Cerrar menú';
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isOpen()) {
            closeMenu();
            menuButton.focus();
        }
    });

    document.addEventListener('click', (event) => {
        if (isOpen() && !navigation.contains(event.target) && !menuButton.contains(event.target)) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 46rem)').matches) closeMenu();
    });
}

document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll([
    '.section-heading',
    '.featured-project',
    '.project-card',
    '.stack-groups section',
    '.transfer-list li',
    '.timeline article',
    '.case-content > section',
    '.gallery figure'
].join(','));

if (reducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
} else {
    revealTargets.forEach((element) => element.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });

    revealTargets.forEach((element) => revealObserver.observe(element));
}
