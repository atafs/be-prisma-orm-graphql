import myCurrentLocation, { message, name, getGreeting } from './myModule'
import myAddFunction, { subtract } from './math'

// myModule.js
console.log('Hello graphQL')
console.log('Message:', message)
console.log('Name: ', name)
console.log('myCurrentLocation:', myCurrentLocation)
console.log(getGreeting('Americo Tomas de Agrela!!'))

// math.js
console.log('Add 1 + (-2): ', myAddFunction(1, -2))
console.log('Subtract 10 - 2: ', subtract(10, 2))