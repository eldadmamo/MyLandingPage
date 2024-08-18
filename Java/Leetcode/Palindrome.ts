function Palindrome(n1:number){
    let num = n1;
    let fly = 0;
    if(n1 < 0) {
        return 0;
    }
    while(n1 > 0){
        let digit = n1 % 10;
        fly = fly * 10 + digit;
        n1 = Math.floor(n1 / 10);
    }

    if(num == fly){
        return 1;
    } else {
        return 0;
    }
}