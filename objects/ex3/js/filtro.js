


document.querySelector(".button__search").addEventListener("click", function(){
   
    const valorInput =  document.querySelector(".input__search").value.toUpperCase()
     
   let achaReceita = resultados.filter(receita =>{

    return receita.titulo.toUpperCase().includes(valorInput) || receita.ingredientes.toUpperCase().includes(valorInput)

   })

    if(achaReceita.length > 0){
        document.getElementById("section-card").innerHTML = `
        <div>
        </div>
        `
        achaReceita.map(achado => {
            new Card(achado.titulo, achado.imagem , achado.ingredientes ).cardRender()
        })
    }else {
        document.getElementById("section-card").innerHTML = `
        Aliemento Não encontrado 
        
        `
       
        

    }
 })

