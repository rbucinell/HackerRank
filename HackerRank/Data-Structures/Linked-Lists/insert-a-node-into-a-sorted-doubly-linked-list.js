/*
    Insert Node in a doubly sorted linked list
    After each insertion, the list should be sorted
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
*/
var Node = function(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}
// This is a "method-only" submission.
// You only need to complete this method.

function sortedInsert(head, data) {
    if( head === null )
    {
        return new Node( data );
    }
    var newNode = new Node( data );
    if( newNode.data < head.data )
    {
        newNode.next = head;
        head.prev = newNode;
        return newNode;
    }
    let cur = head;
    while( cur.next !== null && newNode.data > cur.data )
    {
        cur = cur.next;
    }
    if( newNode.data < cur.data )
    {
        cur.prev.next = newNode;
        newNode.prev = cur.prev;
        newNode.next = cur;
        cur.prev = newNode;
    }
    else
    {
        cur.next = newNode;
        newNode.prev = cur;
    }
    return head;

}



var head = null;
[2, 1, 4, 3].forEach(function(el){
    head = sortedInsert( head, el);
});
var c = head;
while( c !== null )
{
    console.log( c.data );
    c = c.next;
}
