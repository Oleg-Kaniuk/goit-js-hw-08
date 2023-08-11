// Імпорт необхідних модулів зі зовнішніх бібліотек
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Вибір iframe з DOM структури документа
const iframe = document.querySelector('iframe');

// Створення об'єкта Player для взаємодії з відеоплеєром Vimeo через iframe
const player = new Player(iframe);

// Ключ для зберігання поточного часу відтворення в Local Storage
const PLAYER_CURRENT_TIME_KEY = "videoplayer-current-time"

// Функція, яка буде викликана під час відтворення відео
const onPlay = function (data) {
    // Збереження поточного часу відтворення в Local Storage
    localStorage.setItem(PLAYER_CURRENT_TIME_KEY, data.seconds);
};

// Підписка на подію "timeupdate" відеоплеєра з використанням функції throttle для обмеження частоти викликів
player.on('timeupdate', throttle(onPlay, 1000));

// Отримання з Local Storage збереженого раніше поточного часу відтворення
const currentTimePlayer = localStorage.getItem(PLAYER_CURRENT_TIME_KEY)

// console.log(typeof localStorage.getItem(PLAYER_CURRENT_TIME_KEY));

// Встановлення відтворюваного часу відеоплеєра на позицію збереженого поточного часу
player.setCurrentTime(currentTimePlayer).then(function(seconds) {
    // seconds = the actual time that the player seeked to
    // Змінна "seconds" містить фактичний час, до якого було відтворено відео
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log('the time was less than 0 or greater than the video’s duration');
            break;

        default:
        console.log('some other error occurred');
            break;
    }
});
