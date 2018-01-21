# FP versions
Functional programming friendly version of `perfect-immutable` with the auto-curried iteratee-first data-last methods.
For more information see [here](https://lodash.com/docs/4.17.4#curryRight)

## Objects and arrays functions
### set
```javascript
import { fp } from 'perfect-immutable';
const { set, push, splice } = fp;

case MY_FANCY_ACTION
 return set({
   'fieldOne.fieldTwo.someArray': push(action.payload),
   'fieldOne.fieldOther[1].someArray': splice(1, 2, 'newValue'),
 })(state);
```

### immutableDelete
```
import { immutableDelete } from 'perfect-immutable';

const arr1 = ['one', 'two', 'two', 'three'];
const arr2 = fp.immutableDelete(1)(arr1);

console.log(arr1); // ['one', 'two', 'two', 'three']
console.log(arr2); // ['one', 'two', 'three']

// works also on objects
const obj1 = { foo: 1, bar: 2, baz: 3 };
const obj2 = fp.immutableDelete('bar')(obj1);

console.log(obj1); // { foo: 1, bar: 2, baz: 3 }
console.log(obj2); // { foo: 1, baz: 3 }
```

### filter
```
import { fp } from 'perfect-immutable';

const arr1 = [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }];

const arr2 = fp.filter('active')(arr1);
const arr3 = fp.filter({ active: false })(arr1);
const arr4 = fp.filter(el => el.id > 2)(arr1);

console.log(arr1); // [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }]
console.log(arr2); // [{ id: 1, active: true }, { id: 3, active: true }]
console.log(arr3); // [{ id: 2, active: false }]
console.log(arr4); // [{ id: 3, active: true }]

// works also on objects
const obj1 = { foo: 1, bar: 2, baz: 3 };

const obj2 = fp.filter(el => el > 2)(obj1);

console.log(obj1); // { foo: 1, bar: 2, baz: 3 }
console.log(obj2); // { baz: 3 }
```

## Arrays functions

### splice
```
import { fp } from 'perfect-immutable';

const arr1 = ['first', 'two', 'three', 'fourth'];
const arr2 = fp.splice(1, 2, 'second', 'third')(arr1);

console.log(arr1); // ['first', 'two', 'three', 'fourth']
console.log(arr2); // ['first', 'second', 'third', 'fourth']
```

### push
```
import { fp } from 'perfect-immutable';

const arr1 = ['one', 'two'];
const arr2 = fp.push('three', 'four')(arr1);

console.log(arr1); // ['one', 'two']
console.log(arr2); // ['one', 'two', 'three', 'four']
```

### pop
fp version works exactly the same as it accepts only one argument ;)

### shift
fp version works exactly the same as it accepts only one argument ;)

### unshift
```
import { fp } from 'perfect-immutable';

const arr1 = ['three', 'four'];
const arr2 = fp.pop('one', 'two')(arr1);

console.log(arr1); // ['three', 'four']
console.log(arr2); // ['one', 'two', 'three', 'four']
```

### sort
```
import { fp } from 'perfect-immutable';

const arr1 = [4, 3, 1, 7, 3];
const arr2 = fp.sort((el1, el2) => el1 > el2)(arr1);

console.log(arr1); // [4, 3, 1, 7, 3]
console.log(arr2); // [1, 3, 3, 4, 7]
```

### reverse
fp version works exactly the same as it accepts only one argument ;)
