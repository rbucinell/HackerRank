def readInNumbers( filepath ):
    pyramid = []
    with open( filepath ) as fp:
        line = fp.readline()
        while line:
            row = line.strip().split(' ')
            numbers = []
            for i in row:
                numbers.append({ 'val': int(i), 'sum': None })
            pyramid.append( numbers )
            line = fp.readline()
    return pyramid

def left( r, c ):
    return r + 1, c
def right( r, c ):
    return r+1, c+1

def sum( pyr, row, col ):
    if row >= len(pyr) or col >= len(pyr[row]):
        return 0
    if pyr[row][col]['sum'] is not None:
        return pyr[row][col]['sum']
    else:
        maxChild = max( sum( pyr, *left( row, col )), sum( pyr, *right( row, col )) )
        pyr[row][col]['sum'] = pyr[row][col]['val'] + maxChild
        return pyr[row][col]['sum']

def solveFile( path ):
    nums = readInNumbers( path )
    print( f'Answer: {sum( nums, 0, 0 )}')


#solveFile( 'example.txt' )
solveFile( 'pyramid.txt' )