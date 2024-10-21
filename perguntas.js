function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = criarConteudoCartao(categoria, pergunta, resposta);

    let respostaEstaVisivel = false;

    cartao.addEventListener('click', () => {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    });

    container.appendChild(cartao);
}

function criarConteudoCartao(categoria, pergunta, resposta) {
    return `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;
}
