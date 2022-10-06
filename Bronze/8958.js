const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX
`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const cnt = input();
const scoreList = [];

for (let i = 0; i < cnt; i++) {
	const result = input().split('X');
	let score = 0;
	for (let j = 0; j < result.length; j++) {
		score += (result[j].length * (result[j].length + 1)) / 2;
	}
	scoreList.push(score);
}

scoreList.map((v) => console.log(v));
