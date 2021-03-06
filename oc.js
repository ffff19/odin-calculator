let displayValue = '';
let a = '';
let b = '';
let operator = '';
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
		if (operator == '') {
			if (a == '') {
				a = '7';
			} else {
				a += '7';
			}
		} else if (operator != '=') {
				if (b == '') {
					b = '7';
				} else {
					b += '7';
				}
			}
	});

	eight.addEventListener('click', e => {
		clearDisplay();
		displayValue += '8';
		fillDisplay(displayValue);
		if (operator == '') {
			if (a == '') {
				a = '8';
			} else {
				a += '8';
			}
		} else if (operator != '=') {
				if (b == '') {
					b = '8';
				} else {
					b += '8';
				}
			}
	});

	nine.addEventListener('click', e => {
		clearDisplay();
		displayValue += '9';
		fillDisplay(displayValue);
		if (operator == '') {
			if (a == '') {
				a = '9';
			} else {
				a += '9';
			}
		} else if (operator != '=') {
				if (b == '') {
					b = '9';
				} else {
					b += '9';
				}
			}
	});

	four.addEventListener('click', e => {
		clearDisplay();
		displayValue += '4';
		fillDisplay(displayValue);
		if (operator == '') {
			if (a == '') {
				a = '4';
			} else {
				a += '4';
			}
		} else if (operator != '=') {
				if (b == '') {
					b = '4';
				} else {
					b += '4';
				}
			}
	});

	five.addEventListener('click', e => {
		clearDisplay();
		displayValue += '5';
		fillDisplay(displayValue);
		if (operator == '') {
			if (a == '') {
				a = '5';
			} else {
				a += '5';
			}
		} else if (operator != '=') {
				if (b == '') {
					b = '5';
				} else {
					b += '5';
				}
			}
	});

	six.addEventListener('click', e => {
		clearDisplay();
		displayValue += '6';
		fillDisplay(displayValue);
		if (operator == '') {
			if (a == '') {
				a = '6';
			} else {
				a += '6';
			}
		} else if (operator != '=') {
				if (b == '') {
					b = '6';
				} else {
					b += '6';
				}
			}
	});

	one.addEventListener('click', e => {
		clearDisplay();
		displayValue += '1';
		fillDisplay(displayValue);
		if (operator == '') {
			if (a == '') {
				a = '1';
			} else {
				a += '1';
			}
		} else if (operator != '=') {
				if (b == '') {
					b = '1';
				} else {
					b += '1';
				}
			}
	});

	two.addEventListener('click', e => {
		clearDisplay();
		displayValue += '2';
		fillDisplay(displayValue);
		if (operator == '') {
			if (a == '') {
				a = '2';
			} else {
				a += '2';
			}
		} else if (operator != '=') {
				if (b == '') {
					b = '2';
				} else {
					b += '2';
				}
			}
	});

	three.addEventListener('click', e => {
		clearDisplay();
		displayValue += '3';
		fillDisplay(displayValue);
		if (operator == '') {
			if (a == '') {
				a = '3';
			} else {
				a += '3';
			}
		} else if (operator != '=') {
				if (b == '') {
					b = '3';
				} else {
					b += '3';
				}
			}
	});

	zero.addEventListener('click', e => {
		clearDisplay();
		displayValue += '0';
		fillDisplay(displayValue);
		if (operator == '') {
			if (a == '') {
				a = '0';
			} else if (a == '0') {
					null;
			} else {
				a += '0'
			}
 		} else if (operator != '=') {
				if (b == '') {
					b = '0';
				} else if (Number(b) == 0) {
					null;
				} else {
					b += '0';
				}
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
		if (b != '') {
			a = operate(a, b, operator);
			b = '';
		}
		clearDisplay();
		displayValue += '/';
		fillDisplay(displayValue);
		operator = '/';
	});

	multiply.addEventListener('click', e => {
		if (b != '') {
			a = operate(a, b, operator);
			b = '';
		}
		clearDisplay();
		displayValue += 'x';
		fillDisplay(displayValue);
		operator = 'x';
	});

	add.addEventListener('click', e => {
		if (b != '') {
			a = operate(a, b, operator);
			b = '';
		}
		clearDisplay();
		displayValue += '+';
		fillDisplay(displayValue);
		operator = '+';
	});

	subtract.addEventListener('click', e => {
		if (b != '') {
			a = operate(a, b, operator);
			b = '';
		}
		clearDisplay();
		displayValue += '-';
		fillDisplay(displayValue);
		operator = '-';
	});

	equal.addEventListener('click', e => {
		if (b == '') {
			null;
		} else if (b == '0' && operator == '/') {
			clearDisplay();
			displayValue = 'Division by zero attempted. ERR0R';
			fillDisplay(displayValue);
			b = '';
	 } else {
			clearDisplay();
			a = displayValue = operate(a, b, operator);
			if (a == 'Infinity') {
				displayValue = 'Division by zero attempted. ERR0R';
			}
			fillDisplay(displayValue);
			b = '';
		}
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

function operate(a, b, operator) {
	a = Number(a);
	b = Number(b);
	switch (operator) {
		case '/':
			return (a / b);
			break;
		case 'x':
			return (a * b);
			break;
		case '-':
			return (a - b);
			break;
		case '+':
			return (a + b);
			break;
	}
}

clickNumberOrOperator();
