'use strict';

const $root = document.documentElement;

const $switcher = document.getElementById('switcher'),
    $cover = document.getElementById('cover');

const changeTheme = () => {
    $switcher.classList.toggle('icon--moon');
    
    if ($root.classList.toggle('light-theme'))
        localStorage.setItem('light-theme', true);
    else
        localStorage.clear();
}

localStorage.getItem('light-theme') && changeTheme();


$switcher.addEventListener('click', changeTheme);

document.addEventListener('DOMContentLoaded', () => {
    $cover.classList.add('cover--hidden');
    $cover.addEventListener('animationend', () => $cover.remove());
}, { once: true });
