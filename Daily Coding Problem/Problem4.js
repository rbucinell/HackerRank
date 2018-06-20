/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space.
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

function findLowestPositive( arr )
{
    return 2;
}


let examples = [
    [[3, 4, -1, 1],2],
    [[1, 2, 0], 3]
];

examples.forEach( e => console.assert( findLowestPositive( e[0] ) === e[1], `[${e[0]}],${findLowestPositive( e[0] )} != ${e[1]}`));
