/*
  Delete Node at a given position in a linked list 
  head pointer input could be NULL as well for empty list
  Node is defined as 
  class Node {
     int data;
     Node next;
  }
*/
    // This is a "method-only" submission. 
    // You only need to complete this method. 

Node Delete(Node head, int position) {
  // Complete this method
    if( head == null ) return null;
    if( head.next == null ) return null;
    Node cur = head;
    if( position == 0 )
    {
        cur = head.next;
        head.next = null;
        return cur;
    }    
    Node prev = head;    
    for( int i = 0; i < position; i++ )
    {
        prev = cur;
        cur = cur.next;
    }
    prev.next = cur.next;
    cur.next = null;
    return head;
}

