const fs = require('fs');
const stdin = (
	process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `10`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const target = Number(input());

function fibo(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(target));
