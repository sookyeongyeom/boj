const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `10
40
30
60
30
`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const arr = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
	const num = Number(input());
	arr.push(num);
	sum += num;
}

const avg = sum / 5;

console.log(avg);

console.log(arr.sort((a, b) => a - b)[2]);
