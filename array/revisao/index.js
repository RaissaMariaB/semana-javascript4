<<<<<<< HEAD
const comidas = ['lasanha', 'batata', 'bacon']

console.log(comidas[2]);

comidas.forEach((comida, posicao) => {
    
    console.log(`Na posição ${posicao} temos a comida: ${comida}`);
    
});

// concat faz com que a cópia do array e adiciona o elemento que a gente, criando um array novo preservando o original

let outrasComidas = comidas.concat("jiló")

console.log("comida", comidas);

console.log("outrasComidas", outrasComidas);

// join - cria uma string do array e usa o parâmetro que ele recebe como separador dessa string criada
 
let stringDoArray = comidas.join(" , ")

console.log(stringDoArray);

// shift - arranca o primeiro valor e e reorna o valor que ele arrancou, modificando o array original

console.log(comidas.shift());
console.log(comidas);

// pop - arranca o último item do array e retorna o que ele deletou, modificando o array original

console.log(comidas.pop());
console.log(comidas);


// unshift - adiciona um ítem na primeira posição do array , modificando permanentemente o array original

console.log(comidas.unshift("macarrão"));
console.log(comidas);

// push - adiciona um ítem novo na última posição do array original, modificando o array original

console.log(comidas.push());
console.log(comidas);

// reverse - inverte o array

console.log(comidas.reverse());
console.log(comidas);

// slice -  faz uma cópia simples do array delimitando o começo e o fim da parte que eu quero 
// slice(comeco, final)

let cortarAlimentos = comidas.slice(1,2)

console.log(comidas.cortarAlimentos());
console.log(comidas);

// splice - pode remover ou adicionar valores da posição, indice apagar

console.log(comidas.splice(2, 0 , "alfaçe"));
console.log(comidas);

//  sort - coloca em ordem alfabética

console.log(comidas.sort());
console.log(comidas);

//  indexOf - procura o primeiro item da esquerda pra direirta que você colocar como parâmetro

console.log(comidas);
console.log(comidas.indexOf("batata"));

//  lastIndexOf -procura o ultimo item que você colocar como parâmetro
//  caso não encontre ele retorna -1

console.log(comidas.lastIndexOf("batata"));
console.log(comidas);

// .map - 




// filter - retorna um novo array com todos os elemntos que ele encotrar no array original passado no parêmetro

let arrayProcuraComidas = comidas.filter("batata")
console.log(arrayProcuraComidas);

// reduce - 

let somaNumeros = comida.reduce() 




// find - every





















=======
const comidas = ['Lasanha', 'Batata', 'Bacon']

console.log(comidas[2])

comidas.forEach((comida, posicao) => {
    console.log(`Na posição ${posicao} temos a comida: ${comida}`)
})

// concat faz copia do arary e adiciona o elemento que a gente passa como argumento
let outrasComidas = comidas.concat("Jiló")
console.log('comidas', comidas) 
console.log('outras comidas', outrasComidas)

// join - cria uma string do array e ele utiliza o argumento como separador
let stringDoArray = comidas.join(', ')
console.log(stringDoArray)

//shift -> arranca o primeiro item do array e retorna qual ele arrancou
// modifica permanentemente o array
console.log(comidas.shift())
console.log(comidas)

//pop -> arranca o ultimo item do array e retorna o que ele deletou
// modifica permanentemente o array
console.log(comidas.pop())
console.log(comidas)

//Adiciona um item na primeira posição do array
// modifica permanentemente o array
comidas.unshift("Macarrão")
console.log(comidas)

//Adiciona um item na ultima posição do array
// modifica permanentemente o array
comidas.push("Strogonoff")
console.log(comidas)

//Inverte o array
comidas.reverse()
console.log(comidas)

// faz uma copia simples delimitando o começo e o final da parte que eu quero
// slice(comeco, final)
let cortarAlimentos = comidas.slice(1, 2)
console.log(cortarAlimentos)
console.log(comidas)

//Pode remover e adicionar valores utilizando posicao, indice de apagar, valor para adicionar
comidas.splice(2, 0, "Alface")
console.log(comidas)

// Coloca em ordem 
comidas.sort()
console.log(comidas)

comidas.unshift("Batata")
console.log(comidas)
console.log(comidas.indexOf("Batata"))
console.log(comidas.lastIndexOf("Batata"))
// Não encontrou
console.log(comidas.indexOf("Brocolis"))

let mapArray = comidas.map((comida)=> `${comida} Gostosa`)
console.log(mapArray)
let teste = comidas.forEach((comida)=> `${comida} boa`)
console.log(teste)
const numeros = [1, 2, 3, 4, 5]
let numerosDobrados = numeros.map((numero)=>numero*2)
console.log(numerosDobrados)

let arrayProcura = comidas.filter((comida)=> comida === 'Batata')
console.log(arrayProcura)

let juntaComida = comidas.reduce((esq, dir) => {
    return `${esq} e ${dir}`
})
console.log(juntaComida)

let somaNumero = numeros.reduce((esq, dir) => {
    return esq + dir
})
console.log(somaNumero) 

console.log(numeros)
console.log(numeros.find(numero => numero === 1))
console.log(numeros.findIndex(numero => numero === 1))

console.log(numeros.find(numero => numero === -1))
console.log(numeros.findIndex(numero => numero === 9))

menorQueDez = (algumValor) => algumValor < 10
console.log(numeros.every(numero => menorQueDez(numero)))
>>>>>>> upstream/aula1
