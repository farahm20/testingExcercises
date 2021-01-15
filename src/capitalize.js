function capitalize(string) {
	if(hasIllegalCharacter(string)){
		return undefined;
	}

	const head = string.charAt(0).toUpperCase();
	const tail = string.substring(1).toLowerCase();
	return head + tail;
}

function hasIllegalCharacter(string) {
	const allowed = 'abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ .!?-';

	
	for( let i=0; i < string.length; i++ ) {
		const letter = string.charAt(i);
		// if the letter is not an allowed character -> return undefined
		if(!allowed.includes(letter)){
			return true;
		}
	}

	return false;
}

module.exports = { capitalize }