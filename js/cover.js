const $cover = document.getElementById('cover');

document.addEventListener('DOMContentLoaded', () => {
    $cover.classList.add('cover--hidden');
}, { once: true });

$cover.addEventListener('animationend', () => $cover.remove());
