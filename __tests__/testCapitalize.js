require('jest');

const { capitalize } = require('../src/capitalize.js');

// 3 Skriv testfall till funktionen capitalize(text), som ska ta en sträng som parameter och göra första tecknet till en stor bokstav. Exempel: capitalize('pelle') === 'Pelle'

it('should return a string with first letter capitalized and the rest small', () => {
	// arrange
	const input = 'may the force be with you';
	const expected = 'May the force be with you';

	// act
	let actual = capitalize(input);

	// assert
	expect(actual).toBe(expected);
})

it('should return undefined if the string contains non-letter characters', () => {
	// arrange
	const input = 'C3-P0';
	const expected = undefined;

	// act
	let actual = capitalize(input);

	// assert
	expect(actual).toBe(expected);
})


// capitalize('password123')  -->  undefined
// captalize('Får inte innehålla siffror')  -->  'Får inte innehålla siffror'
// capitalize(null)  -->  kasta Error
