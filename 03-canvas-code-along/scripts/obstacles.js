console.log('Obstacles.js connectado');

function createObstacle () {
    // posição inicial obstaculos
    let x = myGameArea.canvas.width
    // tamanho do obstaculo
    let minHeight = 20;
    let maxHeight = 200;
    let height = Math.floor(minHeight + Math.random() * (maxHeight - minHeight));
    let width = 10
    // tamanho do vão
    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(minGap + Math.random() * (maxGap - minGap));
    // criando meu obstaculos
    let topObstacle = new Component(x, 0, width, height, 'green')
    let bottomObstacle = new Component(x, height + gap, width, myGameArea.canvas.height - (height + gap), 'green')
    myGameArea.obstacles.push(topObstacle)
    myGameArea.obstacles.push(bottomObstacle)

}

function updateObstacle() {

    if(myGameArea.frames % 120 === 0){
        createObstacle()
    }

    for (obstacle of myGameArea.obstacles) {
        obstacle.x -= 1
        obstacle.draw();
    }

    myGameArea.obstacles = myGameArea.obstacles.filter(obstacle => obstacle.x > 0 + obstacle.width)
}
