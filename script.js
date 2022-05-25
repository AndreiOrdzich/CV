let body = document.querySelector('.body'); // все тело документа
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let photoAnimation = document.querySelector('.photo'); //анимация фото
let linkContainer = document.querySelectorAll('.link-container');
let sectionItemProject = document.querySelectorAll('.section-item-project');
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
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
    openPopupButtons.forEach((button) => {
        button.classList.remove('opasity-link'); // возвращаем видимость нажатой ссылке
    });
    setTimeout(function() {
        body.style.overflowY = "visible"; // возвращаем возможность прокрутки документа
        body.style.paddingRight = '0px'; // возвращаем нулевой отступ для body
    }, 500);
})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
        openPopupButtons.forEach((button) => {
            button.classList.remove('opasity-link'); // возвращаем видимость нажатой ссылке
        })
        setTimeout(function() {
            body.style.overflowY = "visible"; // возвращаем возможность прокрутки документа
            body.style.paddingRight = '0px'; // возвращаем нулевой отступ для body
        }, 500);
    }
});
/*end Popup*/

//анимация фото
photoAnimation.addEventListener('click', () => {
    photoAnimation.classList.toggle('photo-animation');
})

//Выделение посещенных ссылок
// sectionItemProject.forEach((element) => { // Перебираем все ссылки
//     element.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
//         if (e.target === element) {
//             element.classList.add('link-visited')
//         }
//     })
// })