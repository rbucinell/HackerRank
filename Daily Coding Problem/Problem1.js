//Good morning! Here's your coding interview problem for today.
//Given a list of numbers, return whether any two sums to k.
//For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
//Bonus: Can you do this in one pass?

function sumsexist( arr, k )
{
    for( let i = 0; i < arr.length; i++ )
    {
        for( let j = 0; j < arr.length; j++ )
        {
            if( arr[i] + arr[j] === k )
                return true;
        }   
    }
    return false;
}



let example1 = sumsexist( [10, 15, 3, 7], 17 ) //true
console.log( [10, 15, 3, 7], 17, example1 );
