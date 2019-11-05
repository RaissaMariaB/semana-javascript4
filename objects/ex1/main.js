class Botao{
    constructor(texto, cor, tamanho, icone){
        this.texto = texto,
        this.cor = cor,
        this.tamanho = tamanho,
        this.icone = icone
    }

    // define qual o modelo, a abstração do meu botão
    // 
    desenhaBotao() {
        const novoBotao = document.createElement("button")
        novoBotao.setAttribute("class", `${this.cor} ${this.tamanho}`)
        if(this.icone){
            const tagIcone = document.createElement("i")
            tagIcone.setAttribute("class", `fas ${this.icone}`)
            novoBotao.appendChild(tagIcone)
            const text = document.createTextNode(this.texto)
            novoBotao.appendChild(text)

        } else {
            novoBotao.innerHTML = thistexto
        }
        document.getElementById("buttons-section").appendChild(novoBotao)
    }

}

const botaoVerde = new Botao("Enviar", "verde", "pequeno", "fa-plus")

botaoVerde.desenhaBotao()

const botaoAzul = new Botao("relax", "azul", "medio", "fa-plus")

botaoAzul.desenhaBotao()