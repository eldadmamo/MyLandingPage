function rotateArray(nums: number[], k: number): number[] {
    // Handle edge cases
    if (nums.length === 0 || k === 0) {
        return nums;
    }
    
    // Normalize k to be within array length
    k = k % nums.length;
    
    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    
    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);
    
    return nums;
}

function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Test the function
const example1 = [1, 2, 3, 4, 5, 6, 7];
console.log("Example 1:");
console.log("Input:", example1, "k = 3");
console.log("Output:", rotateArray(example1, 3));

const example2 = [-1, -100, 3, 99];
console.log("\nExample 2:");
console.log("Input:", example2, "k = 2");
console.log("Output:", rotateArray(example2, 2));