const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const M = Number(input());
const Mnums = input().split(' ');
const N = Number(input());
const Nnums = input().split(' ');

const set = new Set();

for (let i = 0; i < M; i++) {
	set.add(Mnums[i]);
}

const ans = [];

Nnums.forEach((v) => {
	if (set.has(v)) ans.push(1);
	else ans.push(0);
});

console.log(ans.join(' '));
