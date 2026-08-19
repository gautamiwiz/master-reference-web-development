//import a named export
import {name} from './2.js';
console.log(name);

//import a default export. x can be any name
import x from './3.js';
console.log(x);

//import multiple exports
import {place, planet} from './4.js';
console.log('Place', place);
console.log('Planet', planet);

//import multiple exports as an object
import * as someObject from './5.js';
console.log('Default key', someObject.default);
console.log('Place 2', someObject.place2);
console.log('Planet 2', someObject.planet2);

//import multiple exports as named aliasas
import {place as alias1, planet as alias2} from './4.js';
console.log('Alias 1', alias1);
console.log('Alias 2', alias2);
