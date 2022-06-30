let displayValue = '';
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
let display = document.querySelector('#display');


fillDisplay('');
function clickNumberOrOperator() {

	seven.addEventListener('click', e => {
		clearDisplay();
		displayValue += '7';
		fillDisplay(displayValue);
	});

	eight.addEventListener('click', e => {
		clearDisplay();
		displayValue += '8';
		fillDisplay(displayValue);
	});

	nine.addEventListener('click', e => {
		clearDisplay();
		displayValue += '9';
		fillDisplay(displayValue);
	});

	four.addEventListener('click', e => {
		clearDisplay();
		displayValue += '4';
		fillDisplay(displayValue);
	});

	five.addEventListener('click', e => {
		clearDisplay();
		displayValue += '5';
		fillDisplay(displayValue);
	});

	six.addEventListener('click', e => {
		clearDisplay();
		displayValue += '6';
		fillDisplay(displayValue);
	});
	one.addEventListener('click', e => {
		clearDisplay();
		displayValue += '1';
		fillDisplay(displayValue);
	});

	two.addEventListener('click', e => {
		clearDisplay();
		displayValue += '2';
		fillDisplay(displayValue);
	});

	three.addEventListener('click', e => {
		clearDisplay();
		displayValue += '3';
		fillDisplay(displayValue);
	});

	zero.addEventListener('click', e => {
		clearDisplay();
		displayValue += '0';
		fillDisplay(displayValue);
	});

}

function fillDisplay(value) {
	const display = document.querySelector('#display');

	const content = document.createElement('div');
	content.classList.add('content');
	content.textContent = value;

	display.appendChild(content);
}

function clearDisplay() {
	let displayContent = display.children[0];
	display.removeChild(displayContent);
}

clickNumberOrOperator();
