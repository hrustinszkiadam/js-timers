function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function changeBackgroundColor() {
	const r = getRandomNumber(0, 256);
	const g = getRandomNumber(0, 256);
	const b = getRandomNumber(0, 256);
	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

let mainTimeout;
function startGame() {
	document.body.style.backgroundColor = 'white';
	reflexBtn.innerText = 'Várj...';
	reactionTimeDisplay.innerText = '';
	const delay = getRandomNumber(2000, 10001);
	reflexBtn.addEventListener('click', failGame, { once: true });
	let startTime;
	mainTimeout = setTimeout(() => {
		reflexBtn.innerText = 'Kattints!';
		reflexBtn.removeEventListener('click', failGame);
		changeBackgroundColor();
		startTime = performance.now();
		reflexBtn.addEventListener('click', () => endGame(startTime), {
			once: true,
		});
	}, delay);
}

function failGame() {
	document.body.style.backgroundColor = 'red';
	reactionTimeDisplay.innerText = 'Túl korán kattintottál!';
	clearTimeout(mainTimeout);
	newGame();
}

function endGame(startTime) {
	reactionTime = Math.round(performance.now() - startTime);
	reactionTimeDisplay.innerText = `Az reakcióidőd: ${reactionTime}ms`;
	newGame();
}

function newGame() {
	reflexBtn.innerText = 'Új játék';
	reflexBtn.addEventListener('click', startGame, { once: true });
}

const reflexBtn = document.querySelector('#reflex-btn');
const reactionTimeDisplay = document.querySelector('#reflex-result');
newGame();
