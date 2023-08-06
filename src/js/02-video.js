import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const PLAYER_CURRENT_TIME_KEY = "videoplayer-current-time"

const onPlay = function(data) {
    localStorage.setItem(PLAYER_CURRENT_TIME_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTimePlayer = localStorage.getItem(PLAYER_CURRENT_TIME_KEY)

// console.log(typeof localStorage.getItem(PLAYER_CURRENT_TIME_KEY));

player.setCurrentTime(currentTimePlayer).then(function(seconds) {
    // seconds = the actual time that the player seeked to
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
