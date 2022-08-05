console.log('connected to intro.js')

const canvas = document.getElementById('canvas-example')
const ctx = canvas.getContext('2d')

// Retangulos

// .fillRect(x, y, width, height) <--- retangulo preenchido
// .strokeRect(x, y, width, height) <--- retangulo vazado

ctx.fillRect(20, 150, 100, 100)
ctx.clearRect(40, 170, 60, 60)
ctx.strokeRect(50, 180, 40, 40)

// Desenhar caminhos

// 1 . definir o inicio de um caminho
// 2 . posicionar o ponto inicial do caminho
// 3 . definir para onde vai a partir do ponto inicial
// 4 . fechar o meu caminho  (opcional)

ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(250, 50)
ctx.lineTo(250, 100)
ctx.stroke()
// ctx.fill()
ctx.closePath()

// Arcos

//.arc(x, y, radius, startAngle. endAngle, [antiClockwise])

ctx.beginPath()
ctx.arc(200, 200, 25, 0, Math.PI * 2)
ctx.fillStyle = 'red'
ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'
ctx.fillStyle = '#00f'
ctx.globalAlpha = 1 // determina a transparencia
ctx.fill()
// ctx.stroke()
// ctx.closePath()


ctx.beginPath();
ctx.moveTo(50, 125);
ctx.lineTo(250, 125);
ctx.lineWidth= 10
ctx.lineCap = 'square'; // 'butt' | 'round' | 'square';
ctx.stroke();
ctx.closePath();

// texto

ctx.fillStyle = 'orange'
ctx.font = '20px Arial'
ctx.lineWidth= 1
ctx.fillText('Hello, there!!!', 30, 30)
ctx.strokeStyle= 'blue'
ctx.strokeText('Hello, there!!!', 30, 60)
