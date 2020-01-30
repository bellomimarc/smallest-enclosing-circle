from lib.pkg_smallestEnclosingCircle.smallestEnclosingCircle import smallestEnclosingCircle
import random
import datetime
import sys 

n = int(sys.argv[1])
coordinates = []

def generate_points(n = 1):
    for i in range(n):
        x = random.random()
        y = random.random()
        coordinates.append([x,y])
    return coordinates

'''
Start Code
'''
for j in range (5):
    print("Iteration n°:" + str(j))
    start = datetime.datetime.utcnow()
    points = generate_points(n)
    end = datetime.datetime.utcnow()
    diff = end - start

    print("Duration generation: " + str(diff))

    startEnc = datetime.datetime.utcnow()
    smallestEnclosingCircle.make_circle(points)
    endEnc = datetime.datetime.utcnow()
    diffEnc = endEnc - startEnc

    print("Duration enclosing: "+ str(diffEnc))
