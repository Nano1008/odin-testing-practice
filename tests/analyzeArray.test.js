import { analyzeArray } from '../analyzeArray.js';

test('analyzeArray should return an object with average, min, max, and length properties', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});