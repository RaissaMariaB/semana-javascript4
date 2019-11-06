class Card{
    constructor(titulo, imagem, ingredientes){
        this.titulo = titulo
        this.ingredientes = ingredientes
        this.imagem = imagem
    }

    cardRender(){
        const card = `
        <div class = "cards">
            <div class = "card">
            <h1>${this.titulo}</h1>
            <img class ="imagem" src = "${this.imagem}" >
            <p> ${this.ingredientes} </p>
            </div>
        </div
        `
        document.getElementById("section-card").insertAdjacentHTML("beforeend", card)

    }


}

resultados.map(indice =>{

    new Card(indice.titulo, indice.imagem , indice.ingredientes ).cardRender()

})


