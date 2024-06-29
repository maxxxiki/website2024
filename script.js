function generateSubtleNoise(ctx, width, height) {
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const shade = 245 + Math.random() * 35;
        data[i] = shade;
        data[i + 1] = shade;
        data[i + 2] = shade;
        data[i + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
}

function animateNoise(canvas, ctx) {
    const width = canvas.width;
    const height = canvas.height;
    generateSubtleNoise(ctx, width, height);
    requestAnimationFrame(() => animateNoise(canvas, ctx));
}

function setupCanvas() {
    const canvas = document.getElementById('noisyCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    animateNoise(canvas, ctx);
}

window.addEventListener('resize', setupCanvas);
window.addEventListener('load', setupCanvas);

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});

function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);
