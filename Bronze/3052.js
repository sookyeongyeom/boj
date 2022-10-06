const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `42
84
252
420
840
126
42
84
420
126
`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const arr = [];
for (let i = 0; i < 10; i++) {
	arr.push(input() % 42);
}

const set = new Set(arr);

console.log(set.size);
