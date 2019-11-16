function generateRandomString(arrayOfCharacters, lengthOfString) {
	
	var availPasswordCharArr = [];
	for (i=0; i<lengthOfString; i++) {
		var randomValue = arrayOfCharacters[Math.floor(Math.random() * arrayOfCharacters.length)]; //gets random characters for the number of characters you wanted your password to be
		availPasswordCharArr.push(randomValue);
	}
	var passwordString = availPasswordCharArr.join(""); // Converts array to string with no comma seperator
	return passwordString;
}
