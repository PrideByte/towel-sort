
// You should implement your task here.

module.exports = function towelSort (m) {
	return m && m.reduce((acc, el, i) => acc = (!(i % 2)) ? [...acc, ...el]: [...acc, ...el.reverse()], []) || [];
}