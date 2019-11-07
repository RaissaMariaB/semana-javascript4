// fazer um fetch para ver o carregamento de cartas

const url = "tarot.json"
const cardSection = document.getElementById("cards-section")
const btn = document.getElementById("botao")


renderizaCarta = carta =>{
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

selecionaAleatorio = carta =>{
    const cardRandom = Math.floor(Math.random() * carta.length)
    return carta[cardRandom]

}

async  function puxaTarot() {
    try{
        const response = await fetch(url)
        if(!response.ok) throw ` com o status ${response.status}`

        const parseJson  = await response.json()
        renderizaCarta(selecionaAleatorio(parseJson))
        loading.style 
    }

}

puxaTarot()

novaCarta = () => {

     puxaTarot()
}
    


    
//     fetch(url).then(response =>{
//         return response.json()
//     }).then(jsonRecebido => {
//         console.log(jsonRecebido)
//         renderizaCarta(selecionaAleatorio(jsonRecebido))
//     })

// }












