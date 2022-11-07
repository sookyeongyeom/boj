const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `5
5
2
3
4
1`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const cnt = input();
const nums = [];

for (let i = 0; i < cnt; i++) {
	nums.push(input());
}

nums.sort((a, b) => a - b);

nums.forEach((v) => console.log(v));
