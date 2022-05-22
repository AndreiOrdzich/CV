let body = document.querySelector('.body'); // все тело документа
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
var lockPaddingValue = window.innerWidth - document.querySelector('.container').offsetWidth + 'px'; // подсчет толщины скролла

/*start Popup*/
openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        body.style.paddingRight = lockPaddingValue;
        button.classList.add('opasity-link'); // скрываем нажатую ссылку
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        document.body.style.overflowY = "hidden"; // убираем возможность прокручивать документ
    })
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    body.style.paddingRight = '0px'; // возвращаем рулевой отступ для body
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
    body.style.overflowY = "visible"; // возвращаем возможность прокрутки документа
    openPopupButtons.forEach((button) => {
        button.classList.remove('opasity-link'); // возвращаем видимость нажатой ссылке
    })
})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
        body.style.paddingRight = '0px'; //возвращаем рулевой отступ для body
        body.style.overflowY = "visible"; // возвращаем возможность прокрутки документа
        openPopupButtons.forEach((button) => {
            button.classList.remove('opasity-link'); // возвращаем видимость нажатой ссылке
        })
    }
});
/*end Popup*/