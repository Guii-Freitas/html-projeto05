let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{

    navbar.classList.toggle('active');
    pesquisa.classList.remove('active');
    carrinho.classList.remove('active');

}

let pesquisa = document.querySelector('.pesquisa-form');

document.querySelector('#search-btn').onclick = () => {

    pesquisa.classList.toggle('active');
    navbar.classList.remove('active');
    carrinho.classList.remove('active');

}

let carrinho = document.querySelector('.container-itens-carrinho');

document.querySelector('#cart-btn').onclick = () => {
    
    carrinho.classList.toggle('active');
    navbar.classList.remove('active');
    pesquisa.classList.remove('active');

}


window.onscroll = () =>{

    navbar.classList.remove('active');
    pesquisa.classList.remove('active');
    carrinho.classList.remove('active');

}