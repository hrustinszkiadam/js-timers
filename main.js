const body = document.querySelector('body');

function getRandomPosition() {
	const x = Math.random() * 90;
	const y = Math.random() * 90;
	return { x, y };
}

function createSnowflake() {
	const { x, y } = getRandomPosition();
	const snowflake = document.createElement('img');
	snowflake.src = './snowflake.png';
	snowflake.style.position = 'absolute';
	snowflake.style.width = '50px';
	snowflake.style.left = `${x}vw`;
	snowflake.style.top = `${y}vh`;
	body.appendChild(snowflake);
}

setInterval(createSnowflake, 2000);
