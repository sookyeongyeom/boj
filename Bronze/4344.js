const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const cnt = input();

for (let i = 0; i < cnt; i++) {
	let student = input().split(' ').slice(1);
	let avg = student.reduce((acc, cur) => (acc += Number(cur)), 0) / student.length;
	let elite = student.filter((v) => Number(v) > avg);
	console.log(`${((elite.length / student.length) * 100).toFixed(3)}%`);
}
