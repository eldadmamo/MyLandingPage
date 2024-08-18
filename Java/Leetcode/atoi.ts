function atoi(n1:String){
    let INT_MIN = -2147483647;
    let INT_MAX = 2147483647;
    let i = 0;
    let sign = 0;
    let result = 0;

    while(i < n1.length && n1[i] === ''){
        i++;
    }

    if(i < n1.length && (n1[i] === '+' || n1[i] === '-')){
        sign = n1[i] === '-' ? -1: 1;
        i++;
    }

    while(i < n1.length && n1[i] >= '0' && n1[i] <= '9'){
        let digit = n1.charCodeAt(i) - '0'.charCodeAt(0);
        if(result > (INT_MAX - digit) / 10) {
            return sign == 1? INT_MAX : INT_MIN;
        }
        result = result * 10 + digit;
        i++;
    }
    return sign * result;
}