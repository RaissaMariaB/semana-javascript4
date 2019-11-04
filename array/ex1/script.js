

let frutas = ["banana", "morango", "bacurí", "laranja"];
let input = document.getElementById("input")
let btn = document.getElementById("button")

btn.addEventListener("click", (e) =>{
    const valorInput = input.value

   let checaValor =  frutas.find((fruta) => fruta === valorInput)
   if(checaValor){
       console.log("achou!");
       
   } else{
       console.log("Não Achou");
       
   }    

    

})

// o filter sempre vai retornar um array dai dai vamos sempre iterar sobre ele 

// btn.addEventListener("click", (e) =>{
//     const valorInput = input.value

//    let checaValor =  frutas.filter((fruta) => fruta === valorInput)

//    if(checaValor.length > 0){
//        console.log("achou!");
       
//    } else{
//        console.log("Não Achou");
       
//    }    

    

// })


