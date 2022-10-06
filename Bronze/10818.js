const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `5
20 10 35 30 7
`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const cnt = input();
const arr = input()
	.split(' ')
	.sort((a, b) => a - b);

console.log(`${arr[0]} ${arr[cnt - 1]}`);
