/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space.
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

/**
 *Finds the lowestest positive integeger that doesn't exist in the array.
 *In O(n) time, 0(C) space
 *
 * @param {Array} arr the array search
 * @returns {Number} an int
 */
function findLowestPositive( arr )
{
   //First attempt will we play dumb
   let val = arr.sort().filter( (e) => e >=0 ).find( (e, i, a) => e + 1 != a[i+1] ) ;
   return val+1;
}


let examples = [
    [[3, 4, -1, 1],2],
    [[1, 2, 0], 3],
    [[9,10,8,-1,10,-7,33,12,-6],11]
];
examples.forEach( e => console.assert( findLowestPositive( e[0] ) === e[1], `[${e[0]}],${findLowestPositive( e[0] )} != ${e[1]}`));
