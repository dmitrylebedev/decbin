'use strict';

const isNumber = require('isnumber');

module.exports = function (input) {
	if (!isNumber(input) || typeof input === 'string') {
		throw new TypeError(`Expected a number, got input: ${typeof input}`);
	}

	return parseInt(input, 10).toString(2);
};
