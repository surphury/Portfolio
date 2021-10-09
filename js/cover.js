const $cover = document.getElementById('cover');
<<<<<<< HEAD

document.addEventListener('DOMContentLoaded',() => $cover.remove());
=======
document.addEventListener('DOMContentLoaded', () => {
    $cover.classList.add('cover--hidden');
}, { once: true });

$cover.addEventListener('animationend', () => $cover.remove());
>>>>>>> dynamic-colours
