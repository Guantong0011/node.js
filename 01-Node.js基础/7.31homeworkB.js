/**
 * Created by dllo on 17/7/31.
 */
var assert = require('assert');
assert.deepEqual(Error('a'), Error('b'));

const assert = require('assert');

const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};
const obj3 = {
    a: {
        b: 1
    }
};
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
// 通过，对象与自身相等

assert.deepEqual(obj1, obj2);
// 抛出 AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// b 的值不同

assert.deepEqual(obj1, obj3);
// 通过，两个对象相等

assert.deepEqual(obj1, obj4);
// 抛出 AssertionError: { a: { b: 1 } } deepEqual {}
// 原型会被忽略


const assert = require('assert');

assert.deepEqual({ a: 1 }, { a: '1' });
// 通过，因为 1 == '1'

assert.deepStrictEqual({ a: 1 }, { a: '1' });
// 抛出 AssertionError: { a: 1 } deepStrictEqual { a: '1' }
// 因为 1 !== '1' 使用全等运算符

// The following objects don't have own properties
const date = new Date();
const object = {};
const fakeDate = {};

Object.setPrototypeOf(fakeDate, Date.prototype);

assert.deepEqual(object, fakeDate);
// OK, doesn't check [[Prototype]]
assert.deepStrictEqual(object, fakeDate);
// AssertionError: {} deepStrictEqual Date {}
// Different [[Prototype]]

assert.deepEqual(date, fakeDate);
// OK, doesn't check type tags
assert.deepStrictEqual(date, fakeDate);
// AssertionError: 2017-03-11T14:25:31.849Z deepStrictEqual Date {}
// Different type tags

assert.notDeepEqual({ a: 1 }, { a: '1' });
// 抛出 AssertionError: { a: 1 } notDeepEqual { a: '1' }

assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
// 通过


assert.notEqual(1, 2);
// 通过

assert.notEqual(1, 1);
// 抛出 AssertionError: 1 != 1

assert.notEqual(1, '1');
// 抛出 AssertionError: 1 != '1'

assert.notStrictEqual(1, 2);
// 通过

assert.notStrictEqual(1, 1);
// 抛出 AssertionError: 1 !== 1

assert.notStrictEqual(1, '1');
// 通过


assert.ok(true);
// 通过
assert.ok(1);
// 通过
assert.ok(false);
// 抛出 "AssertionError: false == true"
assert.ok(0);
// 抛出 "AssertionError: 0 == true"
assert.ok(false, '不是真值');
// 抛出 "AssertionError: 不是真值"


assert.strictEqual(1, 2);
// 抛出 AssertionError: 1 === 2

assert.strictEqual(1, 1);
// 通过

assert.strictEqual(1, '1');
// 抛出 AssertionError: 1 === '1'

const a = 0;
const b = -a;
assert.notStrictEqual(a, b);
// 断言错误: 0 !== -0
// 不全等比较方法 不能区分 -0 和 +0 的差异
assert(!Object.is(a, b));
// 但 Object.is() 可以

const str1 = 'foo';
const str2 = 'foo';
assert.strictEqual(str1 / 1, str2 / 1);
// 断言错误: NaN === NaN
// 不全等比较方法 不能用来检查 NaN
assert(Object.is(str1 / 1, str2 / 1));
// 但 Object.is() 可以