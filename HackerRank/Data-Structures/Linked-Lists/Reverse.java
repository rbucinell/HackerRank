import java.util.*;

/**
/* https://www.hackerrank.com/challenges/reverse-a-linked-list
**/
public class Reverse
{
	public Reverse(){ }
	
	public Node Reverse( Node head )
	{
		Stack<Node> stack = new Stack<Node>();
		
		while( head != null )
		{
			stack.push( head );
			head = head.next;
		}
		
		Node newHead = stack.peek();
		while( !stack.isEmpty() )
		{
			Node popped = stack.pop();
			if( !stack.isEmpty() )
			{
				popped.next = stack.peek();
			}
			else
			{
				popped.next = null;
			}
		}
		
		return newHead;
	}
}
