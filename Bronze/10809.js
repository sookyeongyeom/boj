const fs = require('fs');
const stdin = (
	process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `baekjoon`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
const word = Array.from(input());
const location = [];

alphabet.map((v) => {
	location.push(word.indexOf(v));
});

console.log(location.join(' '));
