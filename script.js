function changeColor() {
    const neonButton = document.querySelector('.neon-button');
    neonButton.style.backgroundColor = neonButton.style.backgroundColor === 'transparent' ? '#0ff' : 'transparent';
    neonButton.style.color = neonButton.style.color === '#0ff' ? '#111' : '#0ff';
}
