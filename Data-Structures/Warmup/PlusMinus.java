import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

/**
* https://www.hackerrank.com/challenges/plus-minus/
**/
public class Solution {

    public static void main(String[] args) 
	{
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int arr[] = new int[n];
        
		double pos = 0, neg = 0 , zeros = 0;
        
		for(int arr_i=0; arr_i < n; arr_i++)
		{
            arr[arr_i] = in.nextInt();
            if ( arr[arr_i] == 0)
                zeros++;
            else if( arr[arr_i] < 0 )
                neg++;
            else
                pos++;
        }
        
        System.out.println(  pos/(double)n);
        System.out.println(  neg/(double)n);
        System.out.println( zeros/(double)n);
        
    }
}
