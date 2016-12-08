//https://www.hackerrank.com/challenges/compare-two-linked-lists?h_r=next-challenge&h_v=zen
public class CompareLists.java
{
	int CompareLists(Node headA, Node headB)
	{
		// This is a "method-only" submission. 
		// You only need to complete this method 
		while( headA != null && headA != null )
		{
			if( headA.data != headB.data )
				return 0;
			if( headA.next == null ^ headB.next == null )
				return 0;
			headA = headA.next;
			headB = headB.next;
		}
		return 1;
	}
}