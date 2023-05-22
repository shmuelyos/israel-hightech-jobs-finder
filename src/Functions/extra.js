export function filterByEnglishLetters(strings) {
    let englishOnly = [];
    let englishRegex = /^[A-Za-z\s]+$/;  // Regular expression for English letters and spaces

    for (let i = 0; i < strings.length; i++) {
        if (englishRegex.test(strings[i])) {
            englishOnly.push(strings[i]);
        }
    }

    return englishOnly;
}

