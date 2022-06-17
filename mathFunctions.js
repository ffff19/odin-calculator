function add(m, n) {
	return m + n;
}

function subtract(m, n) {
	return m - n;
}

function multiply(m, n) {
	return m * n;
}

function divide(m, n) {
	return m / n;
}

function operate(op, m, n) {
	if (op == '+') {
		return add(m, n);
	} else if (op == '-') {
		return subtract(m, n);
	} else if (op == '*') {
		return multiply(m, n);
	} else if (op == '/') {
		return divide(m, n);
	}
}

console.log(operate('+', 4, 1));
console.log(operate('-', 6, 1));
console.log(operate('*', 5, 1));
console.log(operate('/', 10, 2));
