// const num = [2,5,5,11]
// const target = 10
// var twoSum = function(nums, target) {
//     // for(let i =0; i < nums.length; i++){
//     //     let nua = nums[i]
//     //     for (let j = 1; j < nums.length; j++){
//     //         if(nua + nums[j] === target){
//     //             if(i !== j) return [i,j]

//     //         }
//     //     }
//     // }

// };

// console.log(twoSum(num, target));

// const number = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// var removeDuplicates = function (nums) {
//     let i = 1;
//     for (let j = 0; j < nums.length - 1; j++) {
//         console.log(nums.length - 1);
//         console.log(j);
//         if (nums[j] !== nums[j + 1]) {
//             nums[i] = nums[j + 1];
//             i++;
//         }
//     }
//     return i;
// };

// console.log(removeDuplicates(number));

function check(i) {
    for (let index = 1; index < i.length; index++) {
        if (i[index].length == 0) {
            i.splice(index, 1);
        }
    }
}


const uj = ["RaChel", "", "helo", "", "", "tim"]
console.log(check(uj));