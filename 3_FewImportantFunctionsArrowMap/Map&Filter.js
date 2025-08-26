/** Map
*   give an array , given back a new arra in which every value if multiplied
*   every value by 2
*/

const input = [1, 2, 3, 4, 5];
const newArray = [];
for(let i = 0; i < input.length; i++){
    newArray.push(input[i] * 2);
}
console.log(newArray);


/**
 *  Given an Array
 *  Given a fuction
 *  Can we Create a third function which can perform some operation.
 */

function transform(i){
    return i * 2;
}

const ans = input.map(transform);
console.log(ans);


/**
 *  other way
 */

const ans1 = input.map(function(i){
    return i * 2;
}) 
console.log(ans1);

/**
 * create a map function that takes 1 inputs an array
 * ans a transformation callback/fn and transforms the
 * the array into a new one using the trasnformation fn
 */

 
// -----------------------------------------------------------------------------
// Filtering
// what if i tell u, given a input array, give me
//  back all the even values from it

const arr = [1, 2, 3, 4, 5];
const newArr = [];
for(let i = 0 ; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        newArr.push(arr[i]);
    }
}
console.log(newArr);


/**
 * using filter function.
 */


function filterLogic(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

const ans2 =  arr.filter(filterLogic);
console.log(ans2);


// or

const ans3 =  arr.filter(function (n){
    if(n % 2 == 0){
        return true;
    }
    return false;
});
console.log(ans3);


// Question
const stringArr = ["Sameer", "Sumit", "Kajal", "Pinnki", "Sagar"];
const ans4 = stringArr.filter(function(str){
    if(str.startsWith('S')){
        return true;
    }
    return false;
})
console.log(ans4);