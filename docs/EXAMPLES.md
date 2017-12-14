## set
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

You can even set multiple fields at once, and set values in arrays (without mutating them!):
```javascript
import { set } from 'perfect-immutable';

case MY_FANCY_ACTION
 return set(state, {
   'fieldOne.fieldTwo.foo': 'newValue',
   'fieldOne.fieldTwo.bar': 'anotherValue',
   'fieldOne.fieldTwo.baz': 'thirdValue',
   'someArray[3].fieldOne': 'fourthValue',
 });
```

## splice
```
import { splice } from 'perfect-immutable';

const arr1 = ['first', 'two', 'three', 'fourth'];
const arr2 = splice(arr1, 1, 2, 'second', 'third');

console.log(arr1); // ['first', 'two', 'three', 'fourth']
console.log(arr2); // ['first', 'second', 'third', 'fourth']
```