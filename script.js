let body = document.querySelector('.body'); // все тело документа
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let photoAnimation = document.querySelector('.photo'); //анимация фото
let linkContainer = document.querySelectorAll('.link-container');
let sectionItemProject = document.querySelectorAll('.section-item-project');
var img = document.querySelector('img');
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
let revers;
photoAnimation.addEventListener('click', (event) => {
    img.setAttribute('style', 'transition: 1s');
    if (event.target.classList.contains('photo-animation')) {
        photoAnimation.classList.remove('photo-animation');
        revers = 'revers';
    } else {
        photoAnimation.classList.add('photo-animation');
        revers = 'avers';
    }
})


//local storage
function setLocalStorage() {
    localStorage.setItem('revers', revers);
    localStorage.setItem('avers', revers);

}

//Выделение посещенных ссылок
// sectionItemProject.forEach((element) => { // Перебираем все ссылки
//     element.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
//         if (e.target === element) {
//             element.classList.add('link-visited');
//         }
//     })
// })

function getLocalStorage() {
    if (localStorage.getItem('revers')) {
        revers = localStorage.getItem('revers');
        if (revers === 'avers') {
            photoAnimation.classList.add('photo-animation');
            img.setAttribute('style', 'transition:none'); //отключение анимации при повторной загрузке страницы
        } else if (revers === 'revers') {
            img.setAttribute('style', 'transition: 1s'); //восстановление анимации поворота фото
        }
    }
};
//вызовы функций локального хранилища
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);