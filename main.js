const startBtn = document.querySelector('#start-button');
const display = document.querySelector('#display');
let timer;

const reset = () => {
	document.removeEventListener('click', reset);
	document.body.style.backgroundColor = 'white';

	startBtn.classList.toggle('hidden');
	display.classList.toggle('hidden');
	display.textContent = '0:00';

	clearInterval(timer);
};

startBtn.addEventListener('click', () => {
	reset();
	const start = performance.now();
	timer = setInterval(() => {
		const elapsed = Math.floor((performance.now() - start) / 1000);
		const minutes = Math.floor(elapsed / 60);
		const seconds = elapsed % 60;
		display.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
		if (minutes == 1) {
			if (seconds >= 30) {
				document.body.style.backgroundColor = 'yellow';
			} else {
				document.body.style.backgroundColor = 'green';
			}
		} else if (minutes == 2) {
			document.body.style.backgroundColor = 'red';
		}
	}, 1000);

	setTimeout(
		() =>
			document.addEventListener('click', reset, {
				once: true,
			}),
		1
	);
});
