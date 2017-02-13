import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Crush {

    public static void main(String[] args) {
        
		Scanner sc = new Scanner( System.in );
        long N = sc.nextLong();
        long M = sc.nextLong();
                
        HashMap<Long, Long> map = new HashMap<Long, Long>();        
		long max = 0;
		
        for( long i = 0; i < M; i++ )
        {
            long a = sc.nextLong(), b = sc.nextLong(), k = sc.nextLong();
			
			if( a == b )
			{
				map.put( a - 1, map.containsKey( a-1) ? map.get( a-1 ) + k : k );
				if( map.get(a-1) > max ) max = map.get(a - 1 );
			}
			else
			{		
				for( long j = a - 1; j <= b - 1; j++ )
				{
					map.put( j, map.containsKey( j ) ? map.get( j ) + k : k );
					if( map.get(j) > max ) max = map.get(j);
				}  
			}
        }        
        System.out.println( max );
    }
}