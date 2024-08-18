function longestcommon(n1:string[]):string{
    if(n1.length === 0) 
        return "";

    for(let j = 0; j < n1[0].length; j++){
        for(let i = 0; i < n1.length; i++){
            if(n1[0][j] !== n1[i][j]){
                return n1[0].substring(0,j);
            }
        }
    }
    return n1[0];
}