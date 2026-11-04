
//<!-- PARTE DA CRIAÇAO DA LOGICA QUE FAZ A IMAGEM GIRAR COM BASE NO MOUSE  -->

// A caixa não gira (escuta o mouse); a foto gira
const caixaFoto = document.querySelector(".container-foto");
const foto = document.querySelector(".imagem-perfil");

caixaFoto.addEventListener("mousemove", function (evento) {

    const caixa = caixaFoto.getBoundingClientRect();       // posição e tamanho da caixa na tela

    const x = evento.clientX - caixa.left;                 // mouse dentro da caixa (esquerda para direita)
    const y = evento.clientY - caixa.top;                  // mouse dentro da caixa (cima para baixo)

    const meioX = caixa.width / 2;                         // metade da largura
    const meioY = caixa.height / 2;                        // metade da altura

    const inclinacaoY = (x - meioX) / meioX * 12;          // giro na horizontal
    const inclinacaoX = (y - meioY) / meioY * 12 * -1;     // giro na vertical

    foto.style.transform = "rotateX(" + inclinacaoX + "deg) rotateY(" + inclinacaoY + "deg)";

    
});

// Quando o mouse sai da caixa, a foto volta ao normal (0 grau em cada eixo)
caixaFoto.addEventListener("mouseleave", function () {
    foto.style.transform = "rotateX(0deg) rotateY(0deg)";
});

//<!-- PARTE QUE APRESENTA LETRA POR LETRA APOS ENTRAR NO SITE  -->

// Escreve o subtítulo letra por letra
const elementoDigitado = document.querySelector("#texto-digitado");   // onde o texto vai aparecer
const textoCompleto = "Rafael Yuddi :)";                             // texto que será escrito
let letraAtual = 0;                                                   // quantas letras já apareceram

function escreverLetra() {
    elementoDigitado.textContent = textoCompleto.slice(0, letraAtual);   // mostra do começo até a letra atual
    letraAtual = letraAtual + 1;                                         // avança uma letra

    if (letraAtual > textoCompleto.length) {                             // se já mostrou todas as letras...
        clearInterval(intervalo);                                        // ...para de repetir
    }
}

const intervalo = setInterval(escreverLetra, 125);   // guarda o relógio para poder desligar depois




