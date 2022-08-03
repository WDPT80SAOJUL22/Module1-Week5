console.log('Js conectado')

// console.log(document) <---- acessar o documento

// selecionar elementos
// por id
let catDiv = document.getElementById('cat')

console.log(catDiv);

// inserir conteudo:

catDiv.innerHTML = `<p>I'm a Cat</p>`

// alterar propriedades

catDiv.style.backgroundColor = 'red'
catDiv.style.border = '2px solid green'
catDiv.style.fontSize = '50px'
catDiv.style.marginTop = '30px'
catDiv.style.paddingBottom = '30px'

// adicionar classe
catDiv.classList.add('red-box')

// acessar a partir de outro elemento

let innerCatParagraph = catDiv.getElementsByTagName('p')
console.log(innerCatParagraph);

// Selecionar por nome da tag
let divs = document.getElementsByTagName('div')
console.log(divs[0]);

// Selecionar por classe

let miceDivs = document.getElementsByClassName('mouse')
console.log(miceDivs);

// Query selector - vai buscar o primeiro elemento que tenha o seletor passado

// const element = document.querySelector('#cat') // por id
// const element = document.querySelector('.mouse') // por id
const element = document.querySelector('p') // por tag name
console.log(element);

// Query Selector All - busca todos os elementos
// const elements = document.querySelectorAll('.mouse') // por classe
const elements = document.querySelectorAll('div')
console.log(elements);

// alterar o nome da classe
console.log(elements[3].className)
elements[3].className = 'rat'
console.log(elements[3].className)