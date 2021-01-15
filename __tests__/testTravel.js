require('jest');

const { setOrigin, bookTrip, goOnTrip, getPosition } = require('../src/travel.js');


describe('setOrigin', () => {
	/* 5a. Attempts to define the user's current location. The
	* parameter must be a non-empty string. Returns true if successful.
	*/
	it('should return true for a non-empty string', () => {
		// arrange
		const input = 'Göteborg';
		const expected = true;

		// act
		const actual = setOrigin(input);

		// assert
		expect(actual).toBe(expected);
	})

	it('should return false for an empty string', () => {
		// arrange
		const input = '';
		const expected = false;

		// act
		const actual = setOrigin(input);

		// assert
		expect(actual).toBe(expected);
	})

	it('should return false for null', () => {
		// arrange
		const input = null;
		const expected = false;

		// act
		const actual = setOrigin(input);

		// assert
		expect(actual).toBe(expected);
	})
})



// describe('bookTrip', () => { })
// describe('goOnTrip', () => { })
// describe('getPosition', () => { })
