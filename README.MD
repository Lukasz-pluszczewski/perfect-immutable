# perfect-immutable
> Library to provide immutable methods (like immutable set similar to lodash's _.set) on standard JS objects

[![CircleCI](https://circleci.com/gh/Lukasz-pluszczewski/perfect-immutable.svg?style=svg)](https://circleci.com/gh/Lukasz-pluszczewski/perfect-immutable)

You're smart. You avoid mutating objects in your application. But you don't want to install big Immutable.js library and you don't want to refactor all your objects. Now you can have benefits of Immutable.js on normal JavaScript objects! Look for [real life exampes](docs/EXAMPLES.md).

**NOTE:**

This library is in early stage of development. Currently there is only one well tested (and already used in production) method: `set`. If you want to help feel free to submit your PR.

## Getting started
##### Install library
`npm i perfect-immutable --save`

##### Import functions you need
```
import { set, splice, push, pop, shift, unshift, sort, reverse, immutableDelete } from 'perfect-immutable';
```
or
```
import immu from 'perfect-immutable';

immu.set();
immu.splice();
immu.push();
immu.pop();
immu.shift();
immu.unshift();
immu.sort();
immu.reverse();
immu.immutableDelete();
```

## Docs
- [API](docs/API.md)
- [Examples](docs/EXAMPLES.md)
- [Changelog](docs/CHANGELOG.md)

## Credits
1. stringToPath function (used e.g. in set method) is based on lodash's function with the same name (also used in `_.set()`)
2. immutable array functions (like splice) were created by [Vincent Billey](https://vincent.billey.me/)
3. [Brainhub](https://brainhub.eu/) created [eslint config](https://github.com/adam-golab/eslint-config-brainhub) used in this repo

## FAQ
#### Why this exists?
There are a lot of Immutable.js-like libraries, but they all force you to use immutable specific objects (like Map) and you cannot use their methods on normal JavaScript objects. That's not a problem when you're starting new project and decide to use e.g. Immutable.js but what if the app is already there, and you want immutable tools?

#### Are there good alternatives?
- [immutability-helper](https://github.com/kolodny/immutability-helper) - Library based on react-addons-update, that solve exactly the same problem but with mongodb-like syntax instead of lodash or Immutable.js-like syntax. Definitely worth giving it a try. However, this library provides you with different syntax and allows you to use all helper methods (like immutable push) separately.

#### I found a bug! What should I do?
There are at least 3 options:
1. Add an issue, write test(s) for bug you found, write fix that will make your test(s) pass, submit pull request
2. Add an issue, write test(s) for bug you found, submit pull request with you test(s)
3. Add an issue

## TODO
- improve readme (add more usage examples)
- add more immutable functions:
  - delete similar to Immutable.js `deleteIn`
  - filter