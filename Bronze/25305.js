const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `5 2
100 76 85 93 98`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const [, k] = input()
	.split(' ')
	.map((v) => Number(v));

const arr = input()
	.split(' ')
	.map((v) => Number(v));

console.log(arr.sort((a, b) => b - a)[k - 1]);
