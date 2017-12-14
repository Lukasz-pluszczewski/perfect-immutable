#### `set(object, path, value, delimiter)`
 - `import { set } from 'perfect-immutable'`
 - works similar to lodash's `_.set()` or Immutable.js `set()` and `setIn()` but does not mutate the object and accepts plain JS object or array (can be used to easily, immutably set value in complicated nested structure)
 - arguments:
   - **object**: *object|array* object or array to set value in
   - **path**: *string|assignmentsObject* path to the value you want to change, can be deep where field values are divided by *delimiter* (default: .) e.g. 'field.subField.somethingElse'. Can be an object e.g. { 'field.subField': 'newValue', 'anotherField.anotherSubField': 'anotherNewValue' } Lodash's array like syntax is also supported (e.g. 'field\[1\].subField')
   - **value**: *any* value to be set in the path (if path is an object *value* is ignored)
 - returns **newObject**

#### `splice(array, start, deleteCount[, ...items])`
- `import { splice } from 'perfect-immutable'`
- works like array.prototype.splice but creates new array instead of mutating existing one
- arguments:
    - **array**: *array* source array
    - **start**: *number* zero-based index at which to start changing the array
    - **deleteCount**: *number* an integer indicating the number of old array elements to remove
    - **items**: *any* (optional) the elements to add to the array, beginning at the `start` index
- returns **newArray**