const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `3
29
38
12
57
74
40
85
61
`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const arr = [];
for (let i = 0; i < 9; i++) {
	arr.push(input());
}
const copy = [...arr];

const max = copy.sort((a, b) => b - a)[0];
console.log(max);
console.log(arr.indexOf(max) + 1);
