function isComplete(a: number[]): number {
    let minEven = Number.MAX_VALUE;
    let maxEven = Number.MIN_VALUE;
    let flag = false;
    let flag1 = false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            if (a[i] < minEven) {
                flag = true;
                minEven = a[i];
            }
            if (a[i] > minEven) {
                maxEven = a[i];
            }
        }
    }
    for (let i = minEven + 1; i <= maxEven - 1; i++) {
        flag1 = false;
        for (let j = 0; j < a.length; j++) {
            if (a[j] === i) {
                flag1 = true;
            }
        }
        if (!flag1) {
            return 0;
        }
    }
    if (minEven === maxEven || !flag) {
        return 0;
    }
    return 1;
}
