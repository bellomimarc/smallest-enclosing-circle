from lib.pkg_smallestEnclosingCircle.smallestEnclosingCircle import smallestEnclosingCircle
import random
import sys 
from math import pow
import time

n = int(sys.argv[1])

def generate_points(n = 1):
    coordinates = [None] * n
    for i in range(n):
        coordinates[i] = [random.random() * pow(10, 9), random.random() * pow(10, 9)]
    return coordinates

'''
Start Code
'''
NUMBER_OF_ITERATION = 1
results = []

for j in range (NUMBER_OF_ITERATION):
    print("Iteration n°:" + str(j))
    start_time = time.time()
    points = generate_points(n)

    print("--- %s ms ---" % (round(time.time() - start_time, 4) * 1000))

    start_time = time.time()
    print(smallestEnclosingCircle.make_circle(points))

    diffTime = round(time.time() - start_time, 4) * 1000
    results.append(diffTime)
    print("--- %s ms ---" % diffTime)

print(sum(results) / NUMBER_OF_ITERATION)