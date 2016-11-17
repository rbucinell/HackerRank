import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

/**
*	 https://www.hackerrank.com/challenges/array-left-rotation
**/
public class SparseArrays {

    public static void main(String[] args) {
       
		Scanner sc = new Scanner( System.in );
		int n = sc.nextInt(); // n strings
		
		String[] strings = new String[ n ];
		
		for( int i = 0; i < n; i++ )
		{
			strings[i] = sc.next();
		}
		
		int q = sc.nextInt(); // q queries
		int[] queries = new int[q];
		
		for( int i = 0; i < q; i++ )
		{
			String query = sc.next();
			int count = 0;
			for( int j = 0; j < n; j++ )
			{
				if( strings[j].equals( query )) 
				{
					count ++;
				}
			}
			queries[i] = count;
		}
		
		//Print all of the query results later
		for( int i = 0; i < q; i++ )
		{
			System.out.println( queries[i]);
		}
	}
}
