import { add, del } from 'foo'
import Person = require('bar');

add(1, 2)
del(1, 2)

const person = new Person('foo', 18)

console.log(person.name);
