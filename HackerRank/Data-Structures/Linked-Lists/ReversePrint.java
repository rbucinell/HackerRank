import java.util.Stack;

public class ReversePrint
{
	//https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse
	
	/*
	Insert Node at the end of a linked list 
	head pointer input could be NULL as well for empty list
	Node is defined as 
	class Node {
		int data;
		Node next;
	}
	*/
    // This is a "method-only" submission. 
    // You only need to complete this method. 

	void ReversePrint(Node head) 
	{
		// This is a "method-only" submission. 
		// You only need to complete this method. 
		Stack<Integer> stack = new Stack<Integer>();
		Node pointer = head;
		while( pointer != null )
		{
			stack.push( pointer.data );
			pointer = pointer.next;
			
		}
        while( !stack.isEmpty() )
		{
			System.out.println( stack.pop() );
		}
	}

}