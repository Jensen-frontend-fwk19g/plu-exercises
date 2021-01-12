
function capitalize(string) {
	for( let i=0; i<string.length; i++ ) {
		const letter = string.charAt(i);
		// om bokstaven inte är ett tillåtet tecken -> return undefined
	}

	const head = string.charAt(0).toUpperCase();
	const tail = string.substring(1).toLowerCase();
	return head + tail;
}

module.exports = { capitalize }
