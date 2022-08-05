console.log('index.js connected!');

// DOM
const dogBtn = document.getElementById('dog-btn')
const startBtn = document.getElementById('start-walking')
const stopBtn = document.getElementById('stop')


// ctx.clearRect(0,0,300,300)
ctx.clearRect(0, 0, canvas.width, canvas.height)

const fireballImage = new Image()
fireballImage.src = './images/fireball.jpeg'

const draw = (posX, posY) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(fireballImage, posX, posY, 50, 50)
    console.log(posX, posY)
    setTimeout(() => {
        draw(posX - 20, posY + 20)
    }, 100)
}


const drawDog = () => {
    console.log('DrawDog');
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const img = new Image()
    img.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg'
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 300, 300)
    }
    
}

// dogBtn.onclick = drawDog
dogBtn.addEventListener('click', () => {
    drawDog()
})


class Character {
    constructor () {
        this.x = 10;
        this.y = 5;
        this.width = 50;
        this.height = 50;
        this.image = new Image()
        this.image.src = './images/mutley.jpg'
    }
    
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    
    moveToRight() {
        if (this.x === 0 || this.x === canvas.width - this.width){
            console.log ('bati')
        } else{
            this.x += 10
        }
    }
    
    moveToLeft() {
        this.x -= 10
    }
    
    moveUp() {
        if(this.y <= 0){
            console.log('bati no teto');
        } else {
            this.y -= 10
        }
    }
    
    moveDown() {
        this.y += 10
    }
    
} 

const mutley = new Character ()
let intervalID = null

const startWalking = () => {
    intervalID = setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        mutley.draw()
    }, 100)
}

const stopWalking = () => {
    clearInterval(intervalID)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

document.addEventListener('keydown', (event) => {
    console.log(event);
    const key = event.code
    if (key === 'ArrowUp'){
        mutley.moveUp()
    }
    if (key === 'ArrowDown'){
        mutley.moveDown()
    }
    if (key === 'ArrowLeft'){
        mutley.moveToLeft()
    }
    if (key === 'ArrowRight'){
        mutley.moveToRight()
    }
})

startBtn.onclick = startWalking
stopBtn.onclick = stopWalking