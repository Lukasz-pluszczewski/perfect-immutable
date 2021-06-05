## Objects and arrays functions
### set
Imagine [reducer](https://redux.js.org/docs/basics/Reducers.html):
```js
case MY_FANCY_ACTION
 return {
   ...state,
   fieldOne: {
     ...state.fieldOne,
     fieldTwo: {
       ...state.fieldOne.fieldTwo,
       fieldThree: 'foo',
     },
   },
 };
```

With prefect-immutable you can:
```js
import { set } from 'perfect-immutable';

case MY_FANCY_ACTION
 return set(state, 'fieldOne.fieldTwo.fieldThree', 'foo');
```

You can even set multiple fields at once, and set values in arrays (without mutating them!) or providing transforming function:
```js
import { set, push } from 'perfect-immutable';

case MY_FANCY_ACTION
 return set(state, {
   'fieldOne.fieldTwo.foo': 'newValue',
   'fieldOne.fieldTwo.bar': 'anotherValue',
   'fieldOne.fieldTwo.baz': 'thirdValue',
   'someArray[3].fieldOne': 'fourthValue',
   'fieldOne.fieldTwo.someArray': arr => push(arr, action.payload),
 });
```

For examples of usage the functional versions of immutable methods see [here](EXAMPLESFP.md)

### immutableDelete
```js
import { immutableDelete } from 'perfect-immutable';

const arr1 = ['one', 'two', 'two', 'three'];
const arr2 = immutableDelete(arr1, 1);

console.log(arr1); // ['one', 'two', 'two', 'three']
console.log(arr2); // ['one', 'two', 'three']

// works also on objects
const obj1 = { foo: 1, bar: 2, baz: 3 };
const obj2 = immutableDelete(obj1, 'bar');

console.log(obj1); // { foo: 1, bar: 2, baz: 3 }
console.log(obj2); // { foo: 1, baz: 3 }
```

### filter
```js
import { filter } from 'perfect-immutable';

const arr1 = [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }];

const arr2 = filter(arr1, 'active');
const arr3 = filter(arr1, { active: false });
const arr4 = filter(arr1, el => el.id > 2);

console.log(arr1); // [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }]
console.log(arr2); // [{ id: 1, active: true }, { id: 3, active: true }]
console.log(arr3); // [{ id: 2, active: false }]
console.log(arr4); // [{ id: 3, active: true }]

// works also on objects
const obj1 = { foo: 1, bar: 2, baz: 3 };

const obj2 = filter(obj1, el => el > 2);

console.log(obj1); // { foo: 1, bar: 2, baz: 3 }
console.log(obj2); // { baz: 3 }
```

## Arrays functions

### splice
```js
import { splice } from 'perfect-immutable';

const arr1 = ['first', 'two', 'three', 'fourth'];
const arr2 = splice(arr1, 1, 2, 'second', 'third');

console.log(arr1); // ['first', 'two', 'three', 'fourth']
console.log(arr2); // ['first', 'second', 'third', 'fourth']
```

### push
```js
import { push } from 'perfect-immutable';

const arr1 = ['one', 'two'];
const arr2 = push(arr1, 'three', 'four');

console.log(arr1); // ['one', 'two']
console.log(arr2); // ['one', 'two', 'three', 'four']
```

### pop
```js
import { pop } from 'perfect-immutable';

const arr1 = ['one', 'two', 'three'];
const arr2 = pop(arr1);

console.log(arr1); // ['one', 'two', 'three']
console.log(arr2); // ['one', 'two']
```

### shift
```js
import { shift } from 'perfect-immutable';

const arr1 = ['one', 'two', 'three'];
const arr2 = shift(arr1);

console.log(arr1); // ['one', 'two', 'three']
console.log(arr2); // ['two', 'three']
```

### unshift
```js
import { unshift } from 'perfect-immutable';

const arr1 = ['three', 'four'];
const arr2 = unshift(arr1, 'one', 'two');

console.log(arr1); // ['three', 'four']
console.log(arr2); // ['one', 'two', 'three', 'four']
```

### sort
```js
import { sort } from 'perfect-immutable';

const arr1 = [4, 3, 1, 7, 3];
const arr2 = sort(arr1, (el1, el2) => el1 > el2);

console.log(arr1); // [4, 3, 1, 7, 3]
console.log(arr2); // [1, 3, 3, 4, 7]
```

### reverse
```js
import { reverse } from 'perfect-immutable';

const arr1 = [4, 3, 2, 1];
const arr2 = reverse(arr1);

console.log(arr1); // [4, 3, 2, 1]
console.log(arr2); // [1, 2, 3, 4]
```
