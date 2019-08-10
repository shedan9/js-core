// call / bind / new / promise

// call
Function.prototype._call = function (context, ...arg) {
  context._tempFn = this;
  const res = context._tempFn(...arg);
  Reflect.deleteProperty(context, '_tempFn');
  return res;
};

// --test sam--
function test(gender, age) {
  console.log(`${this.name}的性别是${gender}，年龄${age}`);
}
const obj = {
  name: 'sam',
};
test._call(obj, '男', 18);
console.log(Object.prototype.toString._call([]));

// bind
Function.prototype._bind = function (context) {
  const fn = this;
  return function (...arg) {
    context._tempFn = fn;
    const res = context._tempFn(...arg);
    Reflect.deleteProperty(context, '_tempFn');
    return res;
  };
};

// --test test conflict--
const newTest = test._bind(obj);
newTest('女', 20);
