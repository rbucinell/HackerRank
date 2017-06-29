import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class DynamicArray {

    public static void main(String[] args) {
        /* https://www.hackerrank.com/challenges/dynamic-array */
		Scanner sc = new Scanner( System.in );
		int N = sc.nextInt();
		int Q = sc.nextInt();
		
		int lastAns = 0;
		
		ArrayList<ArrayList<Integer>> sequences = new ArrayList<ArrayList<Integer>>();
		for( int i = 0; i < N; i++ )
		{
			sequences.add( new ArrayList<Integer>());
		}
		
		for( int i = 0; i < Q; i++ )
		{
			int query = sc.nextInt();
			int x = sc.nextInt();
			int y = sc.nextInt();
			
			int seq = ( x ^ lastAns ) % N ;
			if( query == 1 )
			{
				sequences.get( seq ).add( y );
			}
			else
			{
				ArrayList<Integer> getSeq = sequences.get( seq );
				lastAns = getSeq.get( y % getSeq.size() );
				System.out.println( lastAns );
			}
			
		}
    }
}
