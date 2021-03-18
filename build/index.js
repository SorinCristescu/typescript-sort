"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
// import {Sorter} from './Sorter'
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, -5, 0, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('Sorin');
charactersCollection.sort();
console.log(charactersCollection.data);
