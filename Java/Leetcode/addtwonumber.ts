function addTwoNumbers(arr1: number[], arr2: number[]): number[] {
    let carry = 0;
    let result: number[] = [];
    
    let maxLength = Math.max(arr1.length, arr2.length);
    
    for (let i = 0; i < maxLength || carry; i++) {
        let sum = (arr1[i] || 0) + (arr2[i] || 0) + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    
    return result.reverse();
}

const arr1 = [2, 4, 3];  
const arr2 = [5, 6, 4];     

const output = addTwoNumbers(arr1, arr2); 
console.log(output);