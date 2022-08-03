console.log('conectei no js');

// acessar valor de um atributo de elementos
const paragraph = document.querySelector('#paragraph')
const paragraphID = paragraph.getAttribute('id')
console.log(paragraphID);

const link = document.querySelectorAll('a')
console.log(link[0].getAttribute('href'));

// alterar o valor dos atributos
paragraph.setAttribute('id', 'info-paragraph')
link[0].setAttribute('href', 'http://www.pudim.com.br')

// inserindo valores no html

// innerHTML

const list = document.getElementById('item-list')
list.innerHTML = `
<li>
    Primeiro Item
</li>`

// criar elementos
const itemList = document.createElement('li')
itemList.setAttribute('class', 'item')
itemList.innerText = 'Goiaba'
console.log(itemList);

list.appendChild(itemList) // insere no HTML

for (let i = 0; i < 3; i += 1){
    const newItem = document.createElement('li')
    newItem.innerText = `item ${i}`
    list.appendChild(newItem)
}

// eventos

const randomItem = document.getElementById('include-item')
randomItem.onclick = () => {
    // console.log('cliquei no botão');
    const newItem = document.createElement('li')
    newItem.innerText = 'Criado pelo botão'
    list.appendChild(newItem)
}

const addBtn = document.querySelector('#add-btn')
const inputTodo = document.querySelectorAll('input')[0]
addBtn.addEventListener('click', () => {
    const newItem = document.createElement('li')
    newItem.innerHTML = `<span>${inputTodo.value}</span> <button class="remove-btn"> - </button>`
    newItem.querySelector('button').addEventListener('click', (event) => {
        const parentOfButton = event.target.parentNode // pegar o pai do botão (li)
        const parentOfParentOfButton = parentOfButton.parentNode // pegar o pai do li (ul)
        parentOfParentOfButton.removeChild(parentOfButton) // remover a li da ul 
    })
    list.appendChild(newItem)

    inputTodo.value = ''
})

const items = document.querySelectorAll('.remove-btn');

[...items].forEach((item) => {
    item.addEventListener('click', (event) => {
        // const text = event.currentTarget.innerHTML
        // event.currentTarget.innerText = 'cliquei'
        // console.log(text);
        console.log(event.target.parentNode.parentNode)
        event.target.parentNode.parentNode.removeChild(event.target.parentNode) // remover um elemento

    })
})

