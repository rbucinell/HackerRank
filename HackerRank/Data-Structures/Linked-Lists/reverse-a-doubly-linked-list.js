//https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem

function reverse( head )
{
    if( head === null || head.next === null)
        return head;
    let end = head;
    while( end.next !== null )
    {
        end = end.next;
    } 
    let cur = head;
    while( cur !== end && !(cur.swapped || end.swapped) )
    {
        let temp = cur.data;
        cur.data = end.data;
        end.data = temp;
        cur.swapped = true;
        end.swapped = true;
        cur = cur.next;
        end = end.prev;        
    }
    return head;
}