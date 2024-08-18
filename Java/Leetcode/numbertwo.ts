function largestNumberInArray(n: number): number {
    const result: number[] = new Array(n + 1).fill(0);
    result[0] = 0;
    result[1] = 1;

    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            result[i] = result[i / 2];
        } else {
            result[i] = result[(i - 1) / 2] + result[(i - 1) / 2 + 1];
        }
    }

    return Math.max(...result);
}

console.log(largestNumberInArray(7));