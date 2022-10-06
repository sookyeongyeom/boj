const fs = require('fs');
const stdin = (
	process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `734 893`
).split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const nums = input().split(' ');
const a = Number(Array.from(nums[0]).reverse().join(''));
const b = Number(Array.from(nums[1]).reverse().join(''));

if (a > b) console.log(a);
else console.log(b);
