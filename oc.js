let displayValue = 1;
let divide = document.querySelector('.divide');
let multiply = document.querySelector('.multiply');
let subtract = document.querySelector('.subtract');
let add = document.querySelector('.add');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let clear = document.querySelector('.clear');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let zero = document.querySelector('.zero');
let equal = document.querySelector('.equals');

function clickNumberOrOperator() {
	seven.addEventListener('click', e => {
		displayValue = 7;
	});

	eight.addEventListener('click', e => {
		displayValue = 8;
	});

	nine.addEventListener('click', e => {
		displayValue = 9;
	});

	four.addEventListener('click', e => {
		displayValue = 4;
	});

	five.addEventListener('click', e => {
		displayValue = 5;
	});

	six.addEventListener('click', e => {
		displayValue = 6;
	});
	one.addEventListener('click', e => {
		displayValue = 1;
	});

	two.addEventListener('click', e => {
		displayValue = 2;
	});

	three.addEventListener('click', e => {
		displayValue = 3;
	});

	zero.addEventListener('click', e => {
		displayValue = 0;
	});

	const display = document.querySelector('#display');

	const content = document.createElement('div');
	content.classList.add('content');
	content.textContent = displayValue;

	display.appendChild(content);
}

clickNumberOrOperator();
