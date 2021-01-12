require('jest');

const { store, retrieve } = require('../src/store.js');

// Test cases:
// the parameter to store should not be undefined
// when store is called, the value should be saved
// retrieve should return the most recent value stored


it('parameter to store should not be undefined', () => {
	// arrange
	const input = 'hello';

	// act
	store(input);
	store();  // parameter is undefined

	// assert
	let actual = retrieve();
	expect(actual).toBe(input);
})
