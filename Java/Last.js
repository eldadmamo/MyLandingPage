function Bean(num) {
    for (var i = 0; i < num.length; i++) {
        for (var j = 0; j < num.length; j++) {
            if (num[i] + 1 == num[j] && num[i] - 1 == num[j]) {
                return true;
            }
        }
    }
    return false;
}
var seek = Bean([2, 10, 9, 3]);
console.log(seek);
