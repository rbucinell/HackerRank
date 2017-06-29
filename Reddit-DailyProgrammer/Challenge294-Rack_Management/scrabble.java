import java.util.*;

/**
* @author SwiftStriker00
* @url https://www.reddit.com/r/dailyprogrammer/comments/5go843/20161205_challenge_294_easy_rack_management_1/
*
* This class solves the challenge and optional bonus #1
**/
public class scrabble
{
	static String in1, in2;
	
	public static void main( String[] args )
	{
		if( args.length != 2 )
		{
			//error statement
			System.out.println( "Usage Error: scrabble <tiles> <word>");
			return;
		}
		else
		{
			//Return statement
			System.out.print( "scrabble(\""+args[0]+"\", \"" + args[1] + "\") -> " );
		}
		
		char[] tiles = args[0].toCharArray();
		String word = args[1];
		
		int wildcardCount = 0;		
		//sort the ? to the front
		Arrays.sort( tiles );
		for( int i =0; i < tiles.length; i++)
		{
			if( tiles[i] == '?')
				wildcardCount++;
			else
				break;
		}		
		int startIter = wildcardCount;	
		
		boolean buildable = true;
		
		//for each letter in the word
		for( int i = 0; i < word.length(); i++ )
		{
			char cur = word.charAt( i );
			int index = -1;
			
			//iterate through tiles
			for( int j = 0; j < tiles.length; j++)
			{
				if( tiles[j] == cur )
				{
					index = j;
					tiles[index] = '_';
					break;
				}
			}
			if( index == -1 )
			{
				if( wildcardCount > 0)
					wildcardCount--;
				else
				{
					buildable = false;
					break;
				}
			}	
		}
		System.out.println(buildable);
	}
}