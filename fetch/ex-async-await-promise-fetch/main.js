// Fazer a chamada usando fetch para pegar uma imagem 
// colocar a imagem criando uma tag img no body
// lidando com erros

fetch("rainbow.jpg").then(response =>{
    console.log(response);
    return response.blob()   

}).then(blob =>{
    console.log(blob)
    document.getElementById("rainbow").src = 
    URL.createObjectURL(blob)

}).catch(error =>{
    console.log(error)
})


// async await



async function pegaArcoIro(){
const response = await fetch ("rainbow")
const blob = await response.blob()
console.log(response);
console.log(blob);
document.getElementById("rainbow").src =
URL.createObjectURL(blog)
    
}




pegaArcoIro().then(()=> console.log("yay!carregou"));
