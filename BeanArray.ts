function BeanArray(a:number[]): number | boolean{
    let hasnine = false;
    let hasthirteen = false;
    let hasseven = false;
    let hassixteen = false;
    for(let i=0; i < a.length; i++){
        if (a[i] == 9){
            hasnine = true;
        }
        if(a[i] == 13){
            hasthirteen = true;
        }
        if(a[i] == 7){
            hasseven = true;
        }
        if(a[i] == 16){
            hassixteen = true;
        }
    }
    if((hasnine && !hasthirteen) || (!hasnine && hasthirteen) || (hasseven && hassixteen)){
        return false;
    }
    return true;
}