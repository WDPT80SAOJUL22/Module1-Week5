// função que gera uma cor aleatória

const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const changeBackgroundColor = () => {
    const coloredDiv = document.getElementById('color-overlay')
    coloredDiv.style.backgroundColor = generateRandomColor()
}

const changeText = () => {
    const textBg = document.querySelector('#text-bg')
    if(textBg.innerHTML === 'FESTEJAR') {
        textBg.innerHTML = 'ATÉ'
    } else if (textBg.innerHTML === 'ATÉ') {
        textBg.innerHTML = 'AMANHECER'
    } else if (textBg.innerHTML === 'AMANHECER') {
        textBg.innerHTML = 'FESTEJAR'
    }
}

const changeAll = () => {
    changeBackgroundColor()
    changeText()
}

setInterval(changeAll, 333)