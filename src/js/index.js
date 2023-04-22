"use strict"

const btnTrailer = document.querySelector('.botao-trailer');
const btnFecharTrailer = document.querySelector('.fechar-modal');
const modal = document.querySelector('.modal');
const video = document.querySelector('iframe#video');
const url = video.src;

btnTrailer.addEventListener('click', () => {
    modal.classList.add('aberto');
    video.setAttribute('src', url);
});

btnFecharTrailer.addEventListener('click', () => {
    modal.classList.remove('aberto');
    video.setAttribute('src', '');
})