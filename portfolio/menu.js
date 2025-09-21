let btnAbrirMenu = document.getElementById('btn_abir_menu');
let menu = document.getElementById('menu_mobile');
let overlay = document.getElementById('overlay_menu');

btnAbrirMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
});
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
});