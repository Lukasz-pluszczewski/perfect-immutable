# FP versions
Functional programming friendly version of `perfect-immutable` with the auto-curried iteratee-first data-last methods.

## Objects and arrays functions
### set
```js
import { set, push, splice } from 'perfect-immutable/fp';

case MY_FANCY_ACTION
 return set({
   'fieldOne.fieldTwo.someArray': push(action.payload),
   'fieldOne.fieldOther[1].someArray': splice(1, 2, 'newValue'),
 })(state);
```

### immutableDelete
```js
import { immutableDelete } from 'perfect-immutable/fp';

const arr1 = ['one', 'two', 'two', 'three'];
const arr2 = immutableDelete(1)(arr1);

console.log(arr1); // ['one', 'two', 'two', 'three']
console.log(arr2); // ['one', 'two', 'three']

// works also on objects
const obj1 = { foo: 1, bar: 2, baz: 3 };
const obj2 = immutableDelete('bar')(obj1);

console.log(obj1); // { foo: 1, bar: 2, baz: 3 }
console.log(obj2); // { foo: 1, baz: 3 }
```

### filter
```js
import { filter } from 'perfect-immutable/fp';

const arr1 = [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }];

const arr2 = filter('active')(arr1);
const arr3 = filter({ active: false })(arr1);
const arr4 = filter(el => el.id > 2)(arr1);

console.log(arr1); // [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }]
console.log(arr2); // [{ id: 1, active: true }, { id: 3, active: true }]
console.log(arr3); // [{ id: 2, active: false }]
console.log(arr4); // [{ id: 3, active: true }]

// works also on objects
const obj1 = { foo: 1, bar: 2, baz: 3 };

const obj2 = filter(el => el > 2)(obj1);

console.log(obj1); // { foo: 1, bar: 2, baz: 3 }
console.log(obj2); // { baz: 3 }
```

## Arrays functions

### splice
```js
import { splice } from 'perfect-immutable/fp';

const arr1 = ['first', 'two', 'three', 'fourth'];
const arr2 = splice(1, 2, 'second', 'third')(arr1);

console.log(arr1); // ['first', 'two', 'three', 'fourth']
console.log(arr2); // ['first', 'second', 'third', 'fourth']
```

### push
```js
import { push } from 'perfect-immutable/fp';

const arr1 = ['one', 'two'];
const arr2 = push('three', 'four')(arr1);

console.log(arr1); // ['one', 'two']
console.log(arr2); // ['one', 'two', 'three', 'four']
```

### pop
fp version works exactly the same as it accepts only one argument ;)

### shift
fp version works exactly the same as it accepts only one argument ;)

### unshift
```js
import { pop } from 'perfect-immutable/fp';

const arr1 = ['three', 'four'];
const arr2 = pop('one', 'two')(arr1);

console.log(arr1); // ['three', 'four']
console.log(arr2); // ['one', 'two', 'three', 'four']
```

### sort
```js
import { sort } from 'perfect-immutable/fp';

const arr1 = [4, 3, 1, 7, 3];
const arr2 = sort((el1, el2) => el1 > el2)(arr1);

console.log(arr1); // [4, 3, 1, 7, 3]
console.log(arr2); // [1, 3, 3, 4, 7]
```

### reverse
fp version works exactly the same as it accepts only one argument ;)
