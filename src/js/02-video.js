import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function recoveryPlaybackTime() {

	setPlaybackTimeToLocalStorage();

	const time = getPlaybackTimeOfLocalStorage();

	if (!time) {
		return
	}
	setPlaybackTimeToPlayer(time);

}
recoveryPlaybackTime();

function setPlaybackTimeToLocalStorage() {
	player.on('timeupdate', throttle(setData, 1000));

	function setData(data) {
		localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
	}
}

function getPlaybackTimeOfLocalStorage() {
	const timePlayer = JSON.parse(localStorage.getItem("videoplayer-current-time"));
	if (timePlayer) {
		return timePlayer.seconds
	}
}

function setPlaybackTimeToPlayer(time) {
	player.setCurrentTime(time).then(function (seconds) {
	}).catch(function (error) {
		switch (error.name) {
			case 'RangeError':
				break;

			default:
				break;
		}
	});
}






