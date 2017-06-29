//[2017-05-22] Challenge #316 [Easy] Knight's Metric
function Pt( x, y, steps ){ this.x = x; this.y = y; this.steps = (typeof steps === 'undefined') ? 0 : steps; };
Pt.prototype.toString = function(){ return '('+this.x+','+this.y+')';}

function nextMoves( loc )
{
    return [new Pt(loc.x-2, loc.y-1, loc.steps+1), new Pt(loc.x-1, loc.y-2, loc.steps+1),
            new Pt(loc.x+1, loc.y-2, loc.steps+1), new Pt(loc.x-2, loc.y-1, loc.steps+1),
            new Pt(loc.x+2, loc.y+1, loc.steps+1), new Pt(loc.x+1, loc.y+2, loc.steps+1),
            new Pt(loc.x-1, loc.y+2, loc.steps+1), new Pt(loc.x-2, loc.y+1, loc.steps+1)];
}
function is( cur, target )
{
    return cur.x === target.x && cur.y === target.y;
}
function indexOfPt( arr, pt )
{
    for( var i = 0; i < arr.length; i++)
    {
        if( is( arr[i], pt)  ) return i;
    }
    return -1;
}

function ptArrToString( arr )
{
    var str = '[';
    for( var i = 0; i < arr.length; i++ )
    {
        str += arr[i].toString();
        if( i+1 !== arr.length )
            str += ', ';
    }
    str += ']';
    return str;
}
function bfs( start, end )
{
    var path = [];
    var queue = [ start ];
    start.steps = 0; start.prev = null;
    var visisted = [];
    while( queue.length != 0 )
    {
        var cur = queue.shift();
        visisted.push( cur );
        if( is( cur, end ) )
        {
            //found the end. add it to the path, and print out path and dist
            path.push( end );
            var previous = cur.prev;
            while( previous !== null )
            {
                path.push( previous );
                previous = previous.prev;
            }
            path = path.reverse();
            console.log( ptArrToString(path), cur.steps );
            break;
        }
        else
        {
            var nextSteps = nextMoves( cur );
            for( var i = 0; i < nextSteps.length; i++ )
            {
               if( indexOfPt(visisted,nextSteps[i]) === -1 )
               {
                   nextSteps[i].prev = cur;
                   queue.push( nextSteps[i] );
               }
            }
        }

    }
}

var start   = new Pt(0,0);
var end     = new Pt(3,7);

bfs( start, end );