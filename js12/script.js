const ball = document.getElementById('ball');
const wall = document.getElementById('wall');
const wall2 = document.getElementById('wall2');
const player1Score = document.getElementById('player1');
const player2Score = document.getElementById('player2');

let frameWidth = document.body.offsetWidth;
let frameHeight = document.body.offsetHeight;

let positionX = frameWidth / 2;
let positionY = frameHeight / 2;

const counter = [5, 3];
let direction = [1, -1];

let score = [0, 0];

let gameActive = true; // Flag to check if the game is active

window.addEventListener('resize', () => {
    frameWidth = document.body.offsetWidth;
    frameHeight = document.body.offsetHeight;
    positionX = (frameWidth - ball.offsetWidth) / 2;
    positionY = (frameHeight - ball.offsetHeight) / 2;
});

setTimeout(() => {
    setInterval(() => {
        if (!gameActive) return; // If game is not active, do not move the ball

        const ballRect = ball.getBoundingClientRect();
        const wallRect = wall.getBoundingClientRect();
        const wall2Rect = wall2.getBoundingClientRect();

        if (ball.offsetLeft + ball.offsetWidth >= frameWidth || ball.offsetLeft <= 0) {
            direction[0] = -direction[0];
        }

        if (ball.offsetTop + ball.offsetHeight >= frameHeight || ball.offsetTop <= 0) {
            direction[1] = -direction[1];
        }

        if (ballRect.right >= wallRect.left && ballRect.left <= wallRect.right &&
            ballRect.bottom >= wallRect.top && ballRect.top <= wallRect.bottom) {
            direction[0] = -direction[0];
        }

        if (ballRect.right >= wall2Rect.left && ballRect.left <= wall2Rect.right &&
            ballRect.bottom >= wall2Rect.top && ballRect.top <= wall2Rect.bottom) {
            direction[0] = -direction[0];
        }

        positionX += counter[0] * direction[0];
        positionY += counter[1] * direction[1];
        ball.style.left = `${positionX}px`;
        ball.style.top = `${positionY}px`;

        if (ballRect.left <= 0) {
            score[1] += 1;
            player2Score.innerText = "Игрок 2 - " + score[1];
            resetGame();
        }

        if (ballRect.right >= frameWidth) {
            score[0] += 1;
            player1Score.innerText = "Игрок 1 - " + score[0];
            resetGame();
        }
    }, 10);
}, 500);

function resetGame() {
    if (score[0] >= 5 || score[1] >= 5) {
        gameActive = false; // Stop the game
        setTimeout(() => {
            alert(score[0] > score[1] ? "Игрок 1 победил!" : "Игрок 2 победил!");
            score = [0, 0]; // Reset the score
            player1Score.innerText = "Игрок 1 - 0";
            player2Score.innerText = "Игрок 2 - 0";
            gameActive = true; // Restart the game
            positionX = frameWidth / 2;
            positionY = frameHeight / 2;
        }, 500); // Wait a bit before restarting
    } else {
        positionX = (frameWidth - ball.offsetWidth) / 2;
        positionY = (frameHeight - ball.offsetHeight) / 2;
    }
}

document.addEventListener('keydown', function (event) {
    const wallTop = parseInt(wall.style.top) || wall.getBoundingClientRect().top;
    if ((event.key === 'w' || event.key === 'W' || event.key === 'ц' || event.key === 'Ц') && wallTop > 0) {
        wall.style.top = `${wallTop - 45}px`;
    }
    else if ((event.key === 's' || event.key === 'S' || event.key === 'ы' || event.key === 'Ы') && wallTop < frameHeight - 160) {
        wall.style.top = `${wallTop + 45}px`;
    }
});

document.addEventListener('keydown', function (event) {
    const wall2Top = parseInt(wall2.style.top) || wall2.getBoundingClientRect().top;
    if ((event.key === 'ArrowUp') && wall2Top > 0) {
        wall2.style.top = `${wall2Top - 45}px`;
    }
    else if ((event.key === 'ArrowDown') && wall2Top < frameHeight - 165) {
        wall2.style.top = `${wall2Top + 45}px`;
    }
});
