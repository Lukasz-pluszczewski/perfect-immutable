## Objects and arrays functions
### set
Imagine [reducer](https://redux.js.org/docs/basics/Reducers.html):
```javascript
case MY_FANCY_ACTION
 return {
   ...state,
   fieldOne: {
     ...state.fieldOne,
     fieldTwo: {
       ...state.fieldTwo,
       fieldThree: 'foo',
     },
   },
 };
```

With prefect-immutable you can:
```javascript
import { set } from 'perfect-immutable';

case MY_FANCY_ACTION
 return set(state, 'fieldOne.fieldTwo.fieldThree', 'foo');
```

You can even set multiple fields at once, and set values in arrays (without mutating them!) or providing transforming function:
```javascript
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

## Arrays functions

### splice
```
import { splice } from 'perfect-immutable';

const arr1 = ['first', 'two', 'three', 'fourth'];
const arr2 = splice(arr1, 1, 2, 'second', 'third');

console.log(arr1); // ['first', 'two', 'three', 'fourth']
console.log(arr2); // ['first', 'second', 'third', 'fourth']
```

### push
```
import { push } from 'perfect-immutable';

const arr1 = ['one', 'two'];
const arr2 = push(arr1, 'three', 'four');

console.log(arr1); // ['one', 'two']
console.log(arr2); // ['one', 'two', 'three', 'four']
```

### pop
```
import { pop } from 'perfect-immutable';

const arr1 = ['one', 'two', 'three'];
const arr2 = pop(arr1);

console.log(arr1); // ['one', 'two', 'three']
console.log(arr2); // ['one', 'two']
```

### shift
```
import { shift } from 'perfect-immutable';

const arr1 = ['one', 'two', 'three'];
const arr2 = pop(arr1);

console.log(arr1); // ['one', 'two', 'three']
console.log(arr2); // ['two', 'three']
```

### unshift
```
import { unshift } from 'perfect-immutable';

const arr1 = ['three', 'four'];
const arr2 = pop(arr1, 'one', 'two');

console.log(arr1); // ['three', 'four']
console.log(arr2); // ['one', 'two', 'three', 'four']
```

### sort
```
import { sort } from 'perfect-immutable';

const arr1 = [4, 3, 1, 7, 3];
const arr2 = sort(arr1, (el1, el2) => el1 > el2);

console.log(arr1); // [4, 3, 1, 7, 3]
console.log(arr2); // [1, 3, 3, 4, 7]
```

### reverse
```
import { reverse } from 'perfect-immutable';

const arr1 = [4, 3, 2, 1];
const arr2 = reverse(arr1);

console.log(arr1); // [4, 3, 2, 1]
console.log(arr2); // [1, 2, 3, 4]
```

### immutableDelete
```
import { immutableDelete } from 'perfect-immutable';

const arr1 = ['one', 'two', 'two', 'three'];
const arr2 = immutableDelete(arr1, 1);

console.log(arr1); // ['one', 'two', 'two', 'three']
console.log(arr2); // ['one', 'two', 'three']
```

### filter
```
import { filter } from 'perfect-immutable';

const arr1 = [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }];

const arr2 = filter(arr1, 'active');
const arr3 = filter(arr1, { active: false });
const arr4 = filter(arr1, el => el.id > 2);

console.log(arr1); // [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }]
console.log(arr2); // [{ id: 1, active: true }, { id: 3, active: true }]
console.log(arr3); // [{ id: 2, active: false }]
console.log(arr4); // [{ id: 3, active: true }]
```


