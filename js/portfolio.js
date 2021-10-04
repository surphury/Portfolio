const $root = document.documentElement,
    $switcher = document.getElementById('switcher');
    
const changeTheme = () => {
    $switcher.classList.toggle('icon--moon');

    if ($root.classList.toggle('light-theme'))
        localStorage.setItem('light-theme', true);
    else
        localStorage.clear();
}

localStorage.getItem('light-theme') && changeTheme();

$switcher.addEventListener('click', changeTheme);

const colours = ['','#a00', '#0a0', '#f55', '#808','#a0a'];

setInterval(() => $root.style.setProperty('--primary-colour',colours[Math.round(Math.random() * colours.length - 1)]), 20000);