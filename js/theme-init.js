/* Aplica el tema antes de cargar la página para evitar un destello de color. */
(() => {
    try {
        const savedTheme = localStorage.getItem('portfolio-theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const theme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : systemTheme;

        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
    } catch {
        document.documentElement.dataset.theme = 'light';
    }
})();
