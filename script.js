// Seleciona o ícone do menu (hambúrguer)
const menu = document.querySelector('.menu');
// Seleciona a lista de navegação (links)
const NavMenu = document.querySelector('.nav-menu');

// Adiciona um evento de clique ao ícone do menu
menu.addEventListener('click', () => {
    // Alterna a classe 'ativo' no menu (faz o X)
    menu.classList.toggle('ativo');
    // Alterna a classe 'ativo' na lista (faz o menu aparecer/desaparecer)
    NavMenu.classList.toggle('ativo');
});

// (Opcional) Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('ativo');
    NavMenu.classList.remove('ativo');
}));