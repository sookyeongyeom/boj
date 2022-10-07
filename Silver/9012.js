const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString()
		: `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(
`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const cnt = input();

for (let i = 0; i < cnt; i++) {
	let pattern = input();
	let token = 0;
	let isWrong = false;
	for (let j = 0; j < pattern.length; j++) {
		if (pattern[j] === '(') ++token;
		else --token;
		if (token < 0) {
			isWrong = true;
			break;
		}
	}
	if (token !== 0) isWrong = true;
	if (isWrong) console.log('NO');
	else console.log('YES');
}
