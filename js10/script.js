const pricol = document.createElement('div')

document.body.style.cursor = 'none';
document.body.style.margin = '0';
document.body.style.height = '100vh';
//1234
pricol.style.width = '30px';
pricol.style.height = '30px';
pricol.style.backgroundColor = '#595959';
pricol.style.borderRadius = '50%';
pricol.style.position = 'absolute';
document.body.appendChild(pricol);

document.addEventListener('mousemove', function(event) {
    pricol.style.left = `${event.clientX}px`;
    pricol.style.top = `${event.clientY}px`;
});