function criarCartao(pergunta, resposta){
    let conteudo = document.getElementById("conteudo")
    let cartao = document.createElement('article')
    cartao.classList='cartao'

    cartao.innerHTML= `
  <div class="cartao--conteudo">
            <div class="cartao--pergunta"> <p>${pergunta}</p></div>
            <div class="cartao--resposta"> <p>${resposta}</p></div>
                </div>
    `

    conteudo.appendChild(cartao)

}

criarCartao(1,2)