function analyzeArray(arr) {
    const length = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const average = arr.reduce((acc, val) => acc + val, 0) / length;
    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

export { analyzeArray };
