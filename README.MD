# perfect-immutable
> Library to provide immutable methods (like immutable set similar to lodash's _.set) on standard JS objects

[![CircleCI](https://circleci.com/gh/Lukasz-pluszczewski/perfect-immutable.svg?style=svg)](https://circleci.com/gh/Lukasz-pluszczewski/perfect-immutable)

You're smart. You avoid mutating objects in your application. But you don't want to install big Immutable.js library and you don't want to refactor all you objects. Now you can have benefits of Immutable.js on normal JavaScript objects!

**NOTE:**

This library is in early stage of development. Currently there is only one well tested (and already used in production) method: `set`. If you want to help feel free to submit you PR.

## Getting started
##### Install library
`npm i perfect-immutable --save`

## API
#### `set(object, path, value, delimiter)`
 - `import { set } from 'perfect-immutable'`
 - `import immu from 'perfect-immutable'`
 - works like lodash's _.set() but does not mutate the object (can be used to easily, immutably set value in complicated nested structure)
 - arguments:
   - **object**: *object* object to set value in
   - **path**: *string|assignmentsObject}* path to the value you want to change, can be deep where field values are divided by *delimiter* (default: .) e.g. 'field.subField.somethingElse'. Can be an object e.g. { 'field.subField': 'newValue', 'anotherField.anotherSubField': 'anotherNewValue' } Lodash's array like syntax is not supported (e.g. 'field\[1\].subField')
   - **value**: *any* value to be set in the path (if path is an object *value* is ignored)
   - **delimiter**: *string* (defaut: **'.'**) delimiter used in the path
 - returns **newObject**

## FAQ
#### Why this exists?
There are a lot of Immutable.js-like libraries, but they all force you to use immutable specific objects (like Map) and you cannot use their methods on normal JavaScript objects. That's not a problem when you're starting new project and decide to use e.g. Immutable.js but what if the app is already there, and you want immutable tools?

#### Are there good alternatives?
I don't know about any. If you do, please, let me know!

#### I found a bug! What should I do?
There are at least 3 options:
1. Add an issue, write test(s) for bug you found, write fix that will make your test(s) pass, submit pull request
2. Add an issue, write test(s) for bug you found, submit pull request with you test(s)
3. Add an issue