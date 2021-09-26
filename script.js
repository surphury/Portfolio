'use strict';

const root = document.documentElement;

const $switcher = document.getElementById('switcher');

$switcher.addEventListener('click', function () {
    this.classList.toggle('icon--moon');
    if (root.toggleAttribute('light-theme'))
        localStorage.setItem('light-theme', true);
    else
        localStorage.clear();
});

if (localStorage.getItem('light-theme'))
    root.setAttribute('light-theme', '');
