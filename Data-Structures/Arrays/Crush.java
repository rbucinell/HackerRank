import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Crush {

    public static void main(String[] args) {
        
		/*
			The trick is not to add every k to get an exact value between a and b. What you do is add k to index a and subtract k from b+1. This creates a slope for the changes at the edges of every (a-b)m. 
			Then starting from 0 add the slopes from the indexes. Wherever the sum was the highest is you're max value since all values started at 0 to begin with. 
			This brings the time complexity of the algorithm from quadratic O( n^2 )  to constant O( n ). Actually O(2n) since we have to walk through it to find the max.
		*/
		
        Scanner sc = new Scanner( System.in );
        long N = sc.nextLong();
        long M = sc.nextLong();
		
        HashMap<Long, Long> map = new HashMap<Long, Long>();        
		long max = 0, sum = 0;
		
		for( long i = 0; i < M; i++ )
        {
			long a = sc.nextLong(), b = sc.nextLong(), k = sc.nextLong();
			Long aVal = map.get( a-1 );
			map.put( a-1, (aVal != null ) ? aVal + k : k );
			
			Long bVal = map.get( b );
			map.put( b, (bVal != null ) ? bVal - k : -k );
		}
		
		for( long i = 0; i < N; i++ )
		{
			Long val = map.get( i );
			if( val != null )
			{
				sum += val;
				if( sum > max ) max = sum;
			}
		}
		System.out.println( max );
    }
}