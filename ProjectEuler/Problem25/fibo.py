fvals =  [1,1]

def fibo( n ):
    if n <= 2:
        return 1
    elif n < len( fvals ) and fvals[n] is not None:
        return fvals[n]
    else:
        while len( fvals ) < (n+1):
            fvals.append( None )
        fvals[n] = (fibo( n - 1 ) + fibo( n - 2 ))
        return fvals[n]

i = 1
while len( str( fibo(i) ) ) != 1000:
    print( f"f{i} = {fibo(i)}" )
    i+=1

print( f"Answer: {i}" )