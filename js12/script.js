const ball = document.getElementById('ball')
const wall = document.getElementById('wall')
const wall2 = document.getElementById('wall2')

let frameWidth = document.body.offsetWidth;  
let frameHeight = document.body.offsetHeight; 

let positionX = frameWidth / 2;
let positionY = frameHeight / 2;  

const counter = [5, 3];  
let direction = [1, -1];  

let score = [0, 0];
window.addEventListener('resize', () => {  
    frameWidth = document.body.offsetWidth;  
    frameHeight = document.body.offsetHeight;  
    positionX = (frameWidth - ball.offsetWidth) / 2;  
    positionY = (frameHeight - ball.offsetHeight) / 2;  
});  

setTimeout(() => {  
    setInterval(() => {  
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
            ballRect.bottom >= wall2Rect.top && ballRect.top <= wall2Rect.bottom){  
            direction[0] = -direction[0];  
        }  
        positionX += counter[0] * direction[0];  
        positionY += counter[1] * direction[1];  
        ball.style.left = `${positionX}px`;  
        ball.style.top = `${positionY}px`;  
        
        if (ballRect.left <= 0){
            score[0] += 1;
            sc.innerText = "Игрок 1 - " + score[0];
            positionX = (frameWidth - ball.offsetWidth) / 2;  
            positionY = (frameHeight - ball.offsetHeight) / 2;  
            return;
        }

        if (ballRect.right >= frameWidth){
            score[1] += 1;
            sc2.innerText = "Игрок 2 - " + score[1];
            positionX = (frameWidth - ball.offsetWidth) / 2;  
            positionY = (frameHeight - ball.offsetHeight) / 2;  
        }
    }, 10);  
}, 500);

document.addEventListener('keydown', function(event) {  
    const wallTop = parseInt(wall.style.top) || wall.getBoundingClientRect().top;
    if ((event.key === 'w' || event.key === 'W' || event.key === 'ц' || event.key === 'Ц') && wallTop > 0) {  
        wall.style.top = `${wallTop - 45}px`;  
    }  
    else if ((event.key === 's' || event.key === 'S' || event.key === 'ы' || event.key === 'Ы') && wallTop < frameHeight - 160) {  
        wall.style.top = `${wallTop + 45}px`;  
    }  
});

document.addEventListener('keydown', function(event) {  
    const wall2Top = parseInt(wall2.style.top) || wall2.getBoundingClientRect().top;
    if ((event.key === 'ArrowUp') && wall2Top > 0) {  
        wall2.style.top = `${wall2Top - 45}px`;  
    }  
    else if ((event.key === 'ArrowDown') && wall2Top < frameHeight - 165) {  
        wall2.style.top = `${wall2Top + 45}px`;  
    }  
});

//const sb = document.createElement('div')
//sb.style.display = 'flex'
//sb.style.justifyContent = 'center'
//sb.style.padding = '20px 20px'
//
//document.body.appendChild(sb)
//
//const sc = document.createElement('h3');  
//sc.style.margin = '0'
//sc.style.fontSize = '3vw';
//sc.style.textAlign = 'center';
//sc.style.color = '#7FFF00'
//sc.style.width = 'auto'
//sb.appendChild(sc);
//
//const sc2 = document.createElement('h3');  
//sc2.style.margin = '0'
//sc2.style.fontSize = '3vw';
//sc2.style.textAlign = 'center';
//sc2.style.color = '#FF0000'
//sc2.style.width = 'auto'
//sc2.style.marginLeft = '100px'
//sb.appendChild(sc2);