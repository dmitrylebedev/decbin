import test from 'ava';

const decbin = require('./');

test(t => {
	t.throws(() => t.is(decbin('2'), TypeError));
	t.throws(() => t.is(decbin(NaN), TypeError));
	t.throws(() => t.is(decbin(Infinity), TypeError));
	t.throws(() => t.is(decbin(Infinity), TypeError));
	t.throws(() => t.is(decbin(Infinity), TypeError));
	t.throws(() => t.is(decbin([]), TypeError));
	t.throws(() => t.is(decbin({}), TypeError));
	t.throws(() => t.is(decbin(null), TypeError));
	t.throws(() => t.is(decbin(undefined), TypeError));

	t.is(decbin(10), '1010');
	t.is(decbin(-1), '-1');
	t.is(decbin(0), '0');
	t.is(decbin(-0), '0');
	t.is(decbin(+0), '0');
	t.is(decbin(0x3A5), '1110100101');
});
