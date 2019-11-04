const nomesNoRole =['Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Priscilla Roiz Garcia',
'Priscilla Soares Alves',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']


const input = document.getElementById("nome")
const btn = document.getElementById("btn")
const div = document.getElementById("status")
const p = document.createElement("p")


btn.addEventListener("click", (e) =>{
    e.preventDefault()
    btn.innerHTML("")
    const inputValue = input.value
    let noRole = nomesNoRole.find((nome) => nome.trim() === valorInput)

    try {
            if(nome.trim() === "" ){
                div.appendChild("p")
                throw  p.textContent = "Digite um nome Válido"
            }
                
            
        
    } catch (error) {


        
    

})

