const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `5
54321
`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const cnt = input();
const num = input();

const sum = num.split('').reduce((acc, cur) => (acc += Number(cur)), 0);

console.log(sum);
