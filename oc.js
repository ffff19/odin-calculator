let displayValue = '';
let a = '';
let b = '';
let operator;
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
		if (!Number.isInteger(a)) {
			a = 7;
		} else {
			b = 7;
			clearDisplay();
			a = displayValue = doTheMath(a, b, operator);
			fillDisplay(displayValue);
			b = '';
			operator = '';
		}
	});

	eight.addEventListener('click', e => {
		clearDisplay();
		displayValue += '8';
		fillDisplay(displayValue);
		if (!Number.isInteger(a)) {
			a = 8;
		} else {
			b = 8;
			clearDisplay();
			a = displayValue = doTheMath(a, b, operator);
			fillDisplay(displayValue);
			b = '';
			operator = '';
		}
	});

	nine.addEventListener('click', e => {
		clearDisplay();
		displayValue += '9';
		fillDisplay(displayValue);
		if (!Number.isInteger(a)) {
			a = 9;
		} else {
			b = 9;
			clearDisplay();
			a = displayValue = doTheMath(a, b, operator);
			fillDisplay(displayValue);
			b = '';
			operator = '';
		}
	});

	four.addEventListener('click', e => {
		clearDisplay();
		displayValue += '4';
		fillDisplay(displayValue);
		if (!Number.isInteger(a)) {
			a = 4;
		} else {
			b = 4;
			clearDisplay();
			a = displayValue = doTheMath(a, b, operator);
			fillDisplay(displayValue);
			b = '';
			operator = '';
		}
	});

	five.addEventListener('click', e => {
		clearDisplay();
		displayValue += '5';
		fillDisplay(displayValue);
		if (!Number.isInteger(a)) {
			a = 5;
		} else {
			b = 5;
			clearDisplay();
			a = displayValue = doTheMath(a, b, operator);
			fillDisplay(displayValue);
			b = '';
			operator = '';
		}
	});

	six.addEventListener('click', e => {
		clearDisplay();
		displayValue += '6';
		fillDisplay(displayValue);
		if (!Number.isInteger(a)) {
			a = 6;
		} else {
			b = 6;
			clearDisplay();
			a = displayValue = doTheMath(a, b, operator);
			fillDisplay(displayValue);
			b = '';
			operator = '';
		}
	});
	one.addEventListener('click', e => {
		clearDisplay();
		displayValue += '1';
		fillDisplay(displayValue);
		if (!Number.isInteger(a)) {
			a = 1;
		} else {
			b = 1;
			clearDisplay();
			a = displayValue = doTheMath(a, b, operator);
			fillDisplay(displayValue);
			b = '';
			operator = '';
		}
	});

	two.addEventListener('click', e => {
		clearDisplay();
		displayValue += '2';
		fillDisplay(displayValue);
		if (!Number.isInteger(a)) {
			a = 2;
		} else {
			b = 2;
			clearDisplay();
			a = displayValue = doTheMath(a, b, operator);
			fillDisplay(displayValue);
			b = '';
			operator = '';
		}
	});

	three.addEventListener('click', e => {
		clearDisplay();
		displayValue += '3';
		fillDisplay(displayValue);
		if (!Number.isInteger(a)) {
			a = 3;
		} else {
			b = 3;
			clearDisplay();
			a = displayValue = doTheMath(a, b, operator);
			fillDisplay(displayValue);
			b = '';
			operator = '';
		}
	});

	zero.addEventListener('click', e => {
		clearDisplay();
		displayValue += '0';
		fillDisplay(displayValue);
		if (!Number.isInteger(a)) {
			a = 0;
		} else {
			b = 0;
			clearDisplay();
			a = displayValue = doTheMath(a, b, operator);
			fillDisplay(displayValue);
			b = '';
			operator = '';
		}
	});

	clear.addEventListener('click', e => {
		clearDisplay();
		displayValue = '';
		fillDisplay(displayValue);
		a = '';
		b = '';
		operator = '';
	});

	divide.addEventListener('click', e => {
		clearDisplay();
		displayValue += '/';
		fillDisplay(displayValue);
		operator = '/';
	});

	multiply.addEventListener('click', e => {
		clearDisplay();
		displayValue += 'x';
		fillDisplay(displayValue);
		operator = 'x';
	});

	add.addEventListener('click', e => {
		clearDisplay();
		displayValue += '+';
		fillDisplay(displayValue);
		operator = '+';
	});

	subtract.addEventListener('click', e => {
		clearDisplay();
		displayValue += '-';
		fillDisplay(displayValue);
		operator = '-';
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

function doTheMath(a, b, operator) {
	switch (operator) {
		case '/':
			return a / b;
			break;
		case 'x':
			return a * b;
			break;
		case '-':
			return a - b;
			break;
		case '+':
			return a + b;
			break;
	}
}

clickNumberOrOperator();
