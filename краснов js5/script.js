const darkOn = document.getElementById('darkOn');
const rgb = document.getElementById('rgb');

let sv = true;

darkOn.addEventListener('click', function () {
    document.documentElement.style.setProperty('--bg-color', sv ? '#000000' : '#ffffff');
    sv = !sv;
    }
});


rgb.oninput = function (event) {
    console.log(event);
    customColor = true;
    document.documentElement.style.setProperty('--ac-color', event.target.value);
};