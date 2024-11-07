const nameInput = document.getElementById('name');
const colorInput = document.getElementById('bgColor');
const saveButton = document.getElementById('save');
const clearButton = document.getElementById('clear');
const cardsContainer = document.getElementById('cardsContain');

function isValidColor(color) {
    const tempElement = document.createElement('div');
    tempElement.style.backgroundColor = color;
    return tempElement.style.backgroundColor !== '';
}

// Функция для добавления карточки
function addCard(name, color, save = true) {
    if (!isValidColor(color)) return alert("Введите корректный код цвета.");

    const card = document.createElement('div');
    card.classList.add('tile');
    card.style.backgroundColor = color;

    // Добавляем элементы для имени и цвета
    card.innerHTML = `<h5 class="name">${name || 'Unnamed'}</h5><h5>${color}</h5>`;
    cardsContainer.appendChild(card);

    // Обработчик клика по карточке для смены фона
    card.addEventListener('click', () => {
        document.body.style.backgroundColor = color;
    });

    // Сохраняем карточки в куки, если нужно
    if (save) saveCardsToCookies();
}

// Функция для сохранения всех карточек в куки
function saveCardsToCookies() {
    const cards = [];
    document.querySelectorAll('.tile').forEach(card => {
        const name = card.querySelector('.name').textContent;
        const color = card.style.backgroundColor;
        cards.push({ name, color });
    });
    document.cookie = `cards=${JSON.stringify(cards)}; max-age=${7 * 24 * 60 * 60}; path=/`;
}

// Функция для загрузки карточек из куки
function loadCardsFromCookies() {
    const cookies = document.cookie.split('; ');
    const cardsCookie = cookies.find(row => row.startsWith('cards='));
    if (cardsCookie) {
        const cards = JSON.parse(cardsCookie.split('=')[1]);
        cards.forEach(card => addCard(card.name, card.color, false));
    }
}

// Смена фона при вводе цвета в поле, только если цвет валиден
colorInput.addEventListener('input', () => {
    const color = colorInput.value;
    if (isValidColor(color)) {
        document.body.style.backgroundColor = color;
    }
});

// Обработчик для кнопки "Save"
saveButton.addEventListener('click', () => {
    const name = nameInput.value;
    const color = colorInput.value;
    addCard(name, color);
    nameInput.value = ''; // Очищаем поле имени
    colorInput.value = ''; // Очищаем поле цвета
});

// Обработчик для кнопки "Clear"
clearButton.addEventListener('click', () => {
    cardsContainer.innerHTML = ''; // Удаляем все карточки
    document.body.style.backgroundColor = '#333'; // Возвращаем исходный цвет фона
    document.cookie = 'cards=; max-age=0; path=/'; // Очищаем куки
});

// Загружаем карточки из куки при загрузке страницы
window.onload = loadCardsFromCookies;