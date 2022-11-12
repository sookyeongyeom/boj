const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const [N, M] = input()
	.split(' ')
	.map((v) => Number(v));

const set = new Set();

for (let i = 0; i < N; i++) {
	const elem = input();
	set.add(elem);
}

let cnt = 0;

for (let i = 0; i < M; i++) {
	const target = input();
	if (set.has(target)) cnt++;
}

console.log(cnt);
