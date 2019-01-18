import math

def readInNumbers( filepath ):
    numbers = []
    with open( filepath ) as fp:
        line = fp.readline()
        while line:
            row = line.strip().split( ' ')
            for i in row:   
                numbers.append( {int(i), None} )
            line = fp.readline()
    return numbers
    

numbers = readInNumbers('pyramid.txt')
numbers[0][1] = numbers[0][0]
print( numbers[0] )
