const fs = require('fs');
const stdin = (
	process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `nljj`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

let word = input();

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

croatia.forEach((v) => {
	const rgx = new RegExp(v, 'g');
	word = word.replace(rgx, 0);
});

console.log(word.length);
