var es_nums = ['oh', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
var es_tens_prefix = ['tweleve', '*', 'twenty', 'thirty', 'fourty', 'fifty'];

var test1 = "00:00";


var displayTime = function( time )
{
    var hrs = time.substring(0, 2);
    var mins = time.substring(3,5);
    var ampm = hrs >= 12 ? 'pm' : 'am';

    var tens = Math.floor( mins/10 );
    var ones = mins % 10;

    hrs = Math.floor(hrs%12) == 0 ? es_tens_prefix[0]:es_nums[(hrs%12)];

    if( mins == 0 )
        mins = ''; 
    else if( mins < 10 )
        mins = es_nums[tens] + ' ' + es_nums[ones]; 
    else if( mins < 20 )
        mins = es_nums[mins];
    else
        if( mins % 10 == 0 )
            mins = es_tens_prefix[tens];
        else
            mins = es_tens_prefix[tens] + ' ' + es_nums[ones];

    var newtime = hrs + ' ' + mins + ' ' + ampm;

    console.log( 'It\'s',newtime );
}

displayTime("00:00");
displayTime("01:30");
displayTime("12:05");
displayTime("14:01");
displayTime("20:29");
displayTime("21:00");