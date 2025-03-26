const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

// Ball und Paddel-Daten
const ball = { x: 400, y: 200, radius: 10, dx: 4, dy: 4 };
const paddle = { width: 10, height: 100 };
const player = { x: 10, y: 150, score: 0 };
const computer = { x: canvas.width - 20, y: 150, score: 0 };

function drawRect(x, y, w, h, color) {
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}

function drawCircle(x, y, radius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.closePath();
    context.fill();
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx *= -1;
}

function update() {
    // Ballbewegung
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball-Kollision mit Wänden
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }

    // Ball-Kollision mit Paddeln
    if (ball.x - ball.radius < player.x + paddle.width && ball.y > player.y && ball.y < player.y + paddle.height) {
        ball.dx *= -1;
    }
    if (ball.x + ball.radius > computer.x && ball.y > computer.y && ball.y < computer.y + paddle.height) {
        ball.dx *= -1;
    }

    // Punkte
    if (ball.x + ball.radius < 0) {
        computer.score++;
        resetBall();
    } else if (ball.x - ball.radius > canvas.width) {
        player.score++;
        resetBall();
    }

    // Computer-KI
    computer.y += (ball.y - (computer.y + paddle.height / 2)) * 0.1;
}

function draw() {
    drawRect(0, 0, canvas.width, canvas.height, '#000');
    drawCircle(ball.x, ball.y, ball.radius, '#fff');
    drawRect(player.x, player.y, paddle.width, paddle.height, '#fff');
    drawRect(computer.x, computer.y, paddle.width, paddle.height, '#fff');
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('mousemove', (event) => {
    player.y = event.clientY - paddle.height / 2;
});

gameLoop();
