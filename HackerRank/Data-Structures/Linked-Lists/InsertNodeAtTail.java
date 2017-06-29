/*
  Insert Node at the end of a linked list 
  head pointer input could be NULL as well for empty list
  Node is defined as 
  class Node {
     int data;
     Node next;
  }
*/
Node Insert(Node head,int data) {
    Node newNode = new Node();
    newNode.data = data;
    
    if( head == null)
    {
        return newNode;    
    }
    Node tail = head;
    while( tail.next != null ){ tail = tail.next; }
    tail.next = newNode;
    return head;
}
