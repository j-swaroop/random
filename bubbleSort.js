

function bubbleSort(nums){
    if (!nums.length) return []
    
    
    for (let i = 0; i < nums.length; i++){
        let noSwaps = true
        for (let j = 0; j < nums.length - i - 1; j++){
            if (nums[j] > nums[j + 1]){
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                noSwaps = false
            }
        }
        if (noSwaps){
            return nums
        }
    }
    
    return nums
    
}


const nums = [3, 1, 4, 1, 5, 9, 2, 6];

console.log(bubbleSort(nums))
