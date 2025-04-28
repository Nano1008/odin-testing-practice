function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
    const cipheredStr = str.split('').map(char => {
        const index = alphabet.indexOf(char.toLowerCase());
        if (index === -1) return char; // Non-alphabetic characters remain unchanged
        const newChar = shiftedAlphabet[index];
        return char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
    }).join('');
    return cipheredStr;
}

export { caesarCipher };