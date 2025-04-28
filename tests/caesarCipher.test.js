import { caesarCipher } from '../caesarCipher.js';

test('Caesar Cipher with positive shift', () => {
    expect(caesarCipher('abc', 2)).toBe('cde');
});