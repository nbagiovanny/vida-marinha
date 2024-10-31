function criarCartao(pergunta, repota){
    let conteudo = document.getElementById("conteudo")
    let cartao = document.createElement('article')
    cartao.classList='cartao'

    cartao.innerHTML= '
  <div class="cartao--conteudo">
            <div class="cartao--pergunta"> <p>Qual a influência do oceano no clima no planeta?</p></div>
            <div class="cartao--resposta"><p>
                O clima da Terra representa a distribuição da energia recebida do Sol, em forma de radiação, ao longo da superfície esférica terrestre. O equador recebe mais radiação do que os pólos, e a atmosfera e o oceano são os responsáveis por reduzir esse gradiente térmico, transportando energia em forma de calor das baixas para as altas latitudes e tornando o clima globalmente mais homogêneo.</p></div>
                </div>
    '

    conteudo.appendChild(cartao)

}

criarCartao(1,2)