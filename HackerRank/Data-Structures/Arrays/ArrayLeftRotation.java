import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

/**
*	 https://www.hackerrank.com/challenges/array-left-rotation
**/
public class ArrayLeftRotation {

    public static void main(String[] args) {
       
		Scanner sc = new Scanner( System.in );
		int n = sc.nextInt(); // n space-sperated integers
		int d = sc.nextInt(); // perform d left rotations
		
		int[] arr = new int[ n ];
		int counter = 0, index = n - d;
		while( counter != n )
		{
			int next = sc.nextInt();
			counter++;
			arr[index++] = next;
			if( index == n ) index = 0;			
		}
		
		for( int i = 0; i < n; i++ )
		{
			System.out.print( arr[i] + " ");
		}
	}
}
