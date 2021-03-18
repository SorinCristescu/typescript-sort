import { NumbersCollection } from './NumbersCollection';
import {CharactersCollection } from './CharactersCollection';
// import {Sorter} from './Sorter'

const numbersCollection = new NumbersCollection([10, -5, 0, 2])

numbersCollection.sort();

console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('Sorin')

charactersCollection.sort();

console.log(charactersCollection.data)