'use strict'

const btnTrailer = document.querySelector('.botao-trailer');
const btnFecharModal = document.querySelector('.fechar-modal');
const modal = document.querySelector('.modal');

/* Abrindo o modal */
btnTrailer.addEventListener('click', () => {
    modal.classList.add('aberto');

    /* Fechando o modal */
    btnFecharModal.addEventListener('click', () => {
        modal.classList.remove('aberto');
    });
});