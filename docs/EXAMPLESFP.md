# FP versions
Functional programming friendly version of `perfect-immutable` with the auto-curried iteratee-first data-last methods.
For more information see [here](https://lodash.com/docs/4.17.4#curryRight)

## Objects and arrays functions
### set
```javascript
import { set, push, splice } from 'perfect-immutable/fp';

case MY_FANCY_ACTION
 return set({
   'fieldOne.fieldTwo.someArray': push(action.payload),
   'fieldOne.fieldOther[1].someArray': splice(1, 2, 'newValue'),
 })(state);
```

## Arrays functions

### splice
```
import { splice, placeholder as _ } from 'perfect-immutable/fp';

const arr1 = ['first', 'two', 'three', 'fourth'];
const arr2 = splice(1, 2, 'second', 'third')(arr1);

console.log(arr1); // ['first', 'two', 'three', 'fourth']
console.log(arr2); // ['first', 'second', 'third', 'fourth']
```

### push
```
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
```
import { unshift } from 'perfect-immutable/fp';

const arr1 = ['three', 'four'];
const arr2 = pop('one', 'two')(arr1);

console.log(arr1); // ['three', 'four']
console.log(arr2); // ['one', 'two', 'three', 'four']
```

### sort
```
import { sort } from 'perfect-immutable/fp';

const arr1 = [4, 3, 1, 7, 3];
const arr2 = sort((el1, el2) => el1 > el2)(arr1);

console.log(arr1); // [4, 3, 1, 7, 3]
console.log(arr2); // [1, 3, 3, 4, 7]
```

### reverse
fp version works exactly the same as it accepts only one argument ;)

### immutableDelete
```
import { immutableDelete } from 'perfect-immutable/fp';

const arr1 = ['one', 'two', 'two', 'three'];
const arr2 = immutableDelete(1)(arr1);

console.log(arr1); // ['one', 'two', 'two', 'three']
console.log(arr2); // ['one', 'two', 'three']
```

### filter
```
import { filter } from 'perfect-immutable/fp';

const arr1 = [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }];

const arr2 = filter('active')(arr1);
const arr3 = filter({ active: false })(arr1);
const arr4 = filter(el => el.id > 2)(arr1);

console.log(arr1); // [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }]
console.log(arr2); // [{ id: 1, active: true }, { id: 3, active: true }]
console.log(arr3); // [{ id: 2, active: false }]
console.log(arr4); // [{ id: 3, active: true }]
```


