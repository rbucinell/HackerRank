/*
This problem was asked by Google.Given the root to a binary tree, 
implement serialize(root), which serializes the tree into a 
string, and deserialize(s), which deserializes the string 
back into the tree.For example, given the following Node 
class
class Node: 
    def init(self, val, left=None, right=None): 
        self.val = val 
        self.left = left 
        self.right = right 
The following test should pass:
node = Node('root', Node('left', Node('left.left')), Node('right')) 
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

class Node
{
    constructor (val, left, right)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var serialize = function( node )
{
    return JSON.stringify( node );
}

var deserialize = function( serialized )
{
    return JSON.parse( serialized );
}
let node = new Node( 'root', new Node( 'left', new Node('left.left')), new Node('right'));
console.assert( deserialize(serialize(node)).left.left.val === 'left.left' );