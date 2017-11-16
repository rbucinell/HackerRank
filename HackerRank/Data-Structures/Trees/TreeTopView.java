//https://www.hackerrank.com/challenges/tree-top-view/problem

public class TreeTopView
{
    void topView( Node root )
    {
        if( root != null )
        {
            topView( root.left, false );
            System.out.print( root.data + " " );
            topView( root.right, true );
        }
    }

    void topView( Node root, boolean dir )
    {
        if( root != null )
        {
            if( dir )
            {
                System.out.print( root.data + " " );
                topView( root.right, dir );
            }
            else
            {
                topView(root.left, dir );
                System.out.print( root.data + " " );
            }            
        }
    }
}