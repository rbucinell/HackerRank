import math
from enum import Enum

class Dir(Enum):
    N = (-1,0)
    E = (0, 1)
    S = (1, 0)
    W = (0,-1 )

    def right( self ):
        if( self == Dir.N):
            return Dir.E
        if( self == Dir.E):
            return Dir.S
        if( self == Dir.S):
            return Dir.W
        if( self == Dir.W):
            return Dir.N

def move( curLocation, direciton ):
    return (curLocation[0] + direciton.value[0], curLocation[1] + direciton.value[1])

def canTurnRight( grid, curLoc, prevDir, w, h ):
    next = move( curLoc, prevDir.right())
    return next[0] >= 0 and next[0] < w and next[1] >= 0 and next[1] < h and grid[next[0]][next[1]] == 0

def buildSpiral( w, h ):
    grid = [[0 for x in range(w)] for y in range(h)] #Init grid of width and length
    cur = (math.floor( w/2), math.floor(h/2))
    num = 1
    grid[cur[1]][cur[0]] = num
    num+=1
    prevDir = Dir.N
    
    while( num <= (w*h)):
        if canTurnRight( grid, cur, prevDir, w, h):
            cur = move( cur, prevDir.right())
            prevDir = prevDir.right()
        else:
            cur = move( cur, prevDir)
        grid[cur[0]][cur[1]] = num
        num += 1
    return grid

def sumOfDiagonals( grid, w, h ):
    s = 0
    for i in range( 0, w ):
        j = i
        s += grid[i][j] + grid[w-1-i][j]
    return s-1 # -1 since we counted center square twice

w = h = 1001
grid = buildSpiral(w,h)
gridSum = sumOfDiagonals( grid, w, h )
print(grid)
print( gridSum )