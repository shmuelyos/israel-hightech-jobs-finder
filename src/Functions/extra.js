export function filterByEnglishLetters(strings) {
    var englishOnly = [];
    var englishRegex = /^[A-Za-z\s]+$/;  // Regular expression for English letters and spaces

    for (var i = 0; i < strings.length; i++) {
        if (englishRegex.test(strings[i])) {
            englishOnly.push(strings[i]);
        }
    }

    return englishOnly;
}