export const toggleTheme = (theme: string) => {
    const isLight = theme === 'light'
    if (isLight) {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }
}
