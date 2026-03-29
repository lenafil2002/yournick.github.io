// Находим элементы на странице
const changeBtn = document.getElementById('changeBtn');
const surnameInput = document.getElementById('surnameInput');
const lastNameSpan = document.getElementById('last-name');
const colorBtn = document.getElementById('colorBtn');

// 1. Функция смены фамилии
changeBtn.onclick = function() {
    const newSurname = surnameInput.value;
    if (newSurname !== "") {
        lastNameSpan.innerText = newSurname;
        surnameInput.value = ""; // Очищаем поле
    } else {
        alert("Введите фамилию в поле!");
    }
};

// 2. Функция случайного цвета фона
colorBtn.onclick = function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
};
