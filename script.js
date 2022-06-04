let body = document.querySelector('.body'); // все тело документа
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let photoAnimation = document.querySelector('.photo'); //анимация фото
let linkContainer = document.querySelectorAll('.link-container');
let sectionItemProject = document.querySelectorAll('.section-item-project');
let clear = document.querySelectorAll('.reset-button'); //очистка посещенных страниц
let linkVisited = document.querySelectorAll('.link-visited');
var img = document.querySelector('img');
var lockPaddingValue = window.innerWidth - document.querySelector('.container').offsetWidth + 'px'; // подсчет толщины скролла

const luxestate = document.querySelector('.luxestate');
const luxestateId = document.getElementById('luxestateId');

const wildVacation = document.querySelector('.wild-vacation');
const wildVacationId = document.getElementById('wildVacationId');

const roadsiteStudio = document.querySelector('.roadsite-studio');
const roadsiteStudioId = document.getElementById('roadsiteStudioId');

const portfolioScreenshot = document.querySelector('.portfolio-screenshot');
const portfolioScreenshotId = document.getElementById('portfolioScreenshotId');

const imageGalery = document.querySelector('.image-galery');
const imageGaleryId = document.getElementById('imageGaleryId');

const ecoSounds = document.querySelector('.eco-sounds');
const ecoSoundsId = document.getElementById('ecoSoundsId');

const memoryGame = document.querySelector('.memory-game');
const memoryGameId = document.getElementById('memoryGameId');

const shelter = document.querySelector('.shelter');
const shelterId = document.getElementById('shelterId');

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


clear.forEach(element => {
    element.setAttribute('style', 'opacity: 0');
});

let visitedStorage = [];
// Выделение посещенных ссылок
sectionItemProject.forEach((element) => { // Перебираем все ссылки
    element.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        if (!e.target.classList.contains('section-item-project')) {
            element.classList.add('link-visited');
            visitedStorage.push(element);
            clear.forEach(i => {
                i.setAttribute('style', 'opacity: 1');
                i.addEventListener('click', () => {
                    for (let index = 0; index < visitedStorage.length; index++) {
                        const element = visitedStorage[index];
                        if (element.classList.contains('link-visited')) {
                            element.classList.remove('link-visited');
                        }
                        i.setAttribute('style', 'opacity: 0');
                    }
                })
            });
        }

        if (e.target.classList.contains('luxestate')) {
            localStorage.setItem('luxestate', luxestate);
        }

        if (e.target.classList.contains('wild-vacation')) {
            localStorage.setItem('wild-vacation', wildVacation);
        }

        if (e.target.classList.contains('roadsite-studio')) {
            localStorage.setItem('roadsite-studio', roadsiteStudio);
        }

        if (e.target.classList.contains('portfolio-screenshot')) {
            localStorage.setItem('portfolio-screenshot', portfolioScreenshot);
        }

        if (e.target.classList.contains('image-galery')) {
            localStorage.setItem('image-galery', imageGalery);
        }

        if (e.target.classList.contains('eco-sounds')) {
            localStorage.setItem('eco-sounds', ecoSounds);
        }

        if (e.target.classList.contains('memory-game')) {
            localStorage.setItem('memory-game', memoryGame);
        }

        if (e.target.classList.contains('shelter')) {
            localStorage.setItem('shelter', shelter);
        }
    })
})


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

    if (localStorage.getItem('luxestate')) {
        luxestateId.classList.add('link-visited');
        visitedStorage.push(luxestateId);
        clear.forEach(i => {
            i.setAttribute('style', 'opacity: 1; cursor: pointer');
            i.addEventListener('click', () => {
                for (let index = 0; index < visitedStorage.length; index++) {
                    const element = visitedStorage[index];
                    if (element.classList.contains('link-visited')) {
                        element.classList.remove('link-visited');
                    }
                    i.setAttribute('style', 'opacity: 0; cursor: default');
                }
            })
        });
    }

    if (localStorage.getItem('wild-vacation')) {
        wildVacationId.classList.add('link-visited');
        visitedStorage.push(wildVacationId);
        clear.forEach(i => {
            i.setAttribute('style', 'opacity: 1; cursor: pointer');
            i.addEventListener('click', () => {
                for (let index = 0; index < visitedStorage.length; index++) {
                    const element = visitedStorage[index];
                    if (element.classList.contains('link-visited')) {
                        element.classList.remove('link-visited');
                    }
                    i.setAttribute('style', 'opacity: 0; cursor: default');
                }
            })
        });
    }

    if (localStorage.getItem('roadsite-studio')) {
        roadsiteStudioId.classList.add('link-visited');
        visitedStorage.push(roadsiteStudioId);
        clear.forEach(i => {
            i.setAttribute('style', 'opacity: 1; cursor: pointer');
            i.addEventListener('click', () => {
                for (let index = 0; index < visitedStorage.length; index++) {
                    const element = visitedStorage[index];
                    if (element.classList.contains('link-visited')) {
                        element.classList.remove('link-visited');
                    }
                    i.setAttribute('style', 'opacity: 0; cursor: default');
                }
            })
        });
    }

    if (localStorage.getItem('portfolio-screenshot')) {
        portfolioScreenshotId.classList.add('link-visited');
        visitedStorage.push(portfolioScreenshotId);
        clear.forEach(i => {
            i.setAttribute('style', 'opacity: 1; cursor: pointer');
            i.addEventListener('click', () => {
                for (let index = 0; index < visitedStorage.length; index++) {
                    const element = visitedStorage[index];
                    if (element.classList.contains('link-visited')) {
                        element.classList.remove('link-visited');
                    }
                    i.setAttribute('style', 'opacity: 0; cursor: default');
                }
            })
        });
    }

    if (localStorage.getItem('image-galery')) {
        imageGaleryId.classList.add('link-visited');
        visitedStorage.push(imageGaleryId);
        clear.forEach(i => {
            i.setAttribute('style', 'opacity: 1; cursor: pointer');
            i.addEventListener('click', () => {
                for (let index = 0; index < visitedStorage.length; index++) {
                    const element = visitedStorage[index];
                    if (element.classList.contains('link-visited')) {
                        element.classList.remove('link-visited');
                    }
                    i.setAttribute('style', 'opacity: 0; cursor: default');
                }
            })
        });
    }

    if (localStorage.getItem('eco-sounds')) {
        ecoSoundsId.classList.add('link-visited');
        visitedStorage.push(ecoSoundsId);
        clear.forEach(i => {
            i.setAttribute('style', 'opacity: 1; cursor: pointer');
            i.addEventListener('click', () => {
                for (let index = 0; index < visitedStorage.length; index++) {
                    const element = visitedStorage[index];
                    if (element.classList.contains('link-visited')) {
                        element.classList.remove('link-visited');
                    }
                    i.setAttribute('style', 'opacity: 0; cursor: default');
                }
            })
        });
    }

    if (localStorage.getItem('memory-game')) {
        memoryGameId.classList.add('link-visited');
        visitedStorage.push(memoryGameId);
        clear.forEach(i => {
            i.setAttribute('style', 'opacity: 1; cursor: pointer');
            i.addEventListener('click', () => {
                for (let index = 0; index < visitedStorage.length; index++) {
                    const element = visitedStorage[index];
                    if (element.classList.contains('link-visited')) {
                        element.classList.remove('link-visited');
                    }
                    i.setAttribute('style', 'opacity: 0; cursor: default');
                }
            })
        });
    }

    if (localStorage.getItem('shelter')) {
        shelterId.classList.add('link-visited');
        visitedStorage.push(shelterId);
        clear.forEach(i => {
            i.setAttribute('style', 'opacity: 1; cursor: pointer');
            i.addEventListener('click', () => {
                for (let index = 0; index < visitedStorage.length; index++) {
                    const element = visitedStorage[index];
                    if (element.classList.contains('link-visited')) {
                        element.classList.remove('link-visited');
                    }
                    i.setAttribute('style', 'opacity: 0; cursor: default');
                }
            })
        });
    }
}



//вызовы функций локального хранилища
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
// localStorage.clear();