const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `2
3 ABC
5 /HTP`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const cases = input();

const answer = [];

for (let i = 0; i < cases; i++) {
	const line = input().split(' ');
	const times = line[0];
	const target = line[1];
	const result = target.split('').map((v) => v.repeat(times));
	answer.push(result.join(''));
}

answer.forEach((v) => console.log(v));
