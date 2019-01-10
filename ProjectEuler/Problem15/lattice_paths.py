def lattice( x, y ):
    #print( 'lattice( ' + str(x) + ',' + str(y) + ')' )
    if( x <= 0 or y <= 0 ):
        return 1
    elif x == y and x == 1:
        return 2
    elif (x == 2 and y == 1) or ( x == 1 and y == 2 ):
        return 3
    else:
        return lattice( x -1, y  ) + lattice( x, y-1 )

    
paths = { (1,1): 2 }

def lattice_memo( x, y ):
    #print( 'lattice( ' + str(x) + ',' + str(y) + ')' )
    if( x <= 0 or y <= 0 ):
        return 1
    else:
        right = (x-1,y)
        if right not in paths:
            paths[ right ] = lattice_memo(x-1, y)

        down = ( x, y-1 )
        if down not in paths:
            paths[ down ] = lattice_memo( x, y-1 )

        return paths[right] + paths[down]
    
def lattice_paths( grid_size ):
    return lattice_memo( grid_size, grid_size )
    #print( lattice( grid_size, grid_size ) )

for i in range(1,21):
    print( '[' + str(i) + 'x' + str(i) + '] = ' + str(lattice_paths(i)) )
