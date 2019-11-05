const users = [{
  nome: "Lydia Rodrigues",
  imagem: "https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/26166938_1133699003400526_8706692885971000189_n.jpg?_nc_cat=100&_nc_oc=AQkW7DAtsoYgehpYbPuUa0PxGmk28SqRXrmw2w48gPX6k97WEI6te9ZVQykcLeU_8d4&_nc_ht=scontent.fcgh9-1.fna&oh=505e19dc3731aba00e6572c4fb8fce33&oe=5E4C587D"
},
{
  nome: "Doge",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L._SY355_.png"
}]

class Avatar  {
  constructor(srcImagem, nome, cor){
    this.srcImagem = srcImagem ,
    this.nome = nome
    this.cor = cor

  }

  mostraAvatarString(){
    const div = `<div class = "card-avatar ${this.cor}">
       <img class = "img-rounded" src = "${this.srcImagem}"> </img> 
          <p> ${this.nome} </p>
       </div>
    `
    
    document.getElementById("cards-section").insertAdjacentHTML("beforeend", div)
    
  }
  
}

// const avatar2 = new Avatar(users[0].imagem , users[0].nome, "red" )

// avatar2.mostraAvatarString()

users.map(indice => {

   new Avatar( indice.imagem , indice.nome, "green ").mostraAvatarString()
  
});



