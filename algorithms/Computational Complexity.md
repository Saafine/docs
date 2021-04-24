https://courses.edx.org/courses/course-v1:MITx+6.00.1x+2T2017_2/courseware/c3b8ed5a5c8b4b589002370ad9d49a94/1334ab336b1b4458b5c2972c50e903b2/5?activate_block_id=block-v1%3AMITx%2B6.00.1x%2B2T2017_2%2Btype%40vertical%2Bblock%409d908fa34e9b4825b0ab8aa33a1d14a5
# Example 1
def program1(x):
    total = 0
    for i in range(1000):
        total += i

    while x > 0:
        x -= 1
        total += x

    return total

Best case scenario: input 0 or lower
	// 1 step
	total = 0
	
	// 3 steps multiplied by 1000: assign i in loop, add number, assign to total
	for i in range(1000):
		total += i 
		
	// 1 step: check if x > 0	
	while x > 0 
	
	// 1 step
	return total
	
Complexity: 1 + 3000 + 1 + 1 = 3003
	
Worst case scenario: input is a large positive number
	// 3001 steps are the same as in best case scenario
	
	// 5 steps multiplied by n: check if x > 0, subtract 1 from x, assign to x,
	// add x to total, assign to total
	while x > 0:
		x -= 1
		total += x
	
	// 1 step
	return total

Complexity: 1 + 3000 + 1 + 5n + 1 = 3003 + 5n

# Example 2
def program2(x):
    total = 0
    for i in range(1000):
        total = i

    while x > 0:
        x = x//2
        total += x

    return total

Best case scenario: input 0 or lower
	// 1 step
    total = 0
	
	// 2 steps multiplied by 1000: assign i in loop and assign i to total
    for i in range(1000):
        total = i

	// 1 step: check if x > 0
    while x > 0:

	// 1 step
    return total
	
Complexity: 1 + 2000 + 1 + 1
	
Worst case scenario: input is a large positive number
	// 2001 steps are the same as in best case scenario
	
	// Loop is executed log2(n) + 1 times - on each iteration x is divided by 2,
	// and then it's floored. So for x = 8, 
	// the x is reduced to 4 -> 2 -> 1 > 0. 
	// log2(8) = 3
	// 1 step x > 0, 
	// 2 step: x//2, 
	// 3 step: x = x//2, 
	// 4 step: addition += x, 
	// 5 step: assign total += x
	// So we have 5 steps multiplied by log2(8) + 1 
	// (+ 1 because we need one additional step to get to 0)
	// 5 * (log2(n) + 1) steps with execution
	// 1 step to check that if x > 0
	while x > 0:
        x = x//2
        total += x
		
	// 1 step
    return total
	
Complexity: 1 + 2000 + 5 * (log2(n) + 1) + 1 + 1

# Example 3
def program3(L):
    totalSum = 0
    highestFound = None
    for x in L:
        totalSum += x

    for x in L:
        if highestFound == None:
            highestFound = x
        elif x > highestFound:
            highestFound = x

    return (totalSum, highestFound)
	
Best case scenario: input empty list
	totalSum = 0 // 1 step
	highestFound = None // 2 step
	return (totalSum, highestFound) // 3 step

Complexity: 1 + 1 + 1

Worst case scenario: input is a list with its elements sorted in increasing order (eg, [1, 3, 5, 7, ...]).
	totalSum = 0 // 1 step
    highestFound = None // 1 step
    for x in L: // 3 steps multiplied by L length
        totalSum += x
		
	// 3 steps the first time we execute the loop:
	// one step for assignment of x, then we check if highestFound == None,
	// and finally execute the assignment highestFound = x
	// The next (n-1) times we execute this loop, we perform 4 steps:
	//one for the assignment of x, then we run the check if highestFound == None,
	// and finding it to be False, we run the check elif x > highestFound. 
	// Since this is always True (the list is sorted in increasing order),
	// we execute the assignment highestFound = x.
    for x in L: 
        if highestFound == None:
            highestFound = x
        elif x > highestFound:
            highestFound = x

    return (totalSum, highestFound) // 1 step
	
Complexity: 1 + 1 + 3n + 4*n - 1 + 1  = 7*n + 2

# Example 4
def program1(L):
    multiples = []
    for x in L:
        for y in L:
            multiples.append(x*y)
    return multiples

Best case scenario: L is an empty list
    multiples = [] // 1 step
    return multiples // 1 step
Complexity: 1 + 1

Worst case scenario: L is a long list
	multiples = [] // 1 step
	// Assignment of a value to x
    for x in L:
		// Three operations: assignment of a value to y, x*y, and list appending
        for y in L:
            multiples.append(x*y)
    return multiples // 1 step
Complexity: 1 + n * ( 3 * n + 1 ) + 1 = 3*n^2 + n + 2
Complexity order: O(n^2)

# Example 5
def program2(L):
    squares = []
    for x in L:
        for y in L:
            if x == y:
                squares.append(x*y)
    return squares

Worst case scenario: L is a long list of one repeated number (ie [2, 2, 2, 2, ...]
	squares = [] // 1 step
	// 1 step: assign to x,
	for x in L: 
		//  4 steps: assign to y, checks x == y, x*y and list append
		for y in L:
			if x == y:
				squares.append(x*y)
	return squares // 1 step

Complexity: 1 + n * (4*n + 1) + 1 
Complexity order: O(n^2)

# Example 6
def program3(L1, L2):
    intersection = []
    for elt in L1:
        if elt in L2:
            intersection.append(elt)
    return intersection
Worst case scenario: every element of L1 is the same as the very last element of L2
		intersection = [] // 1 step
		// 1 operation
		for elt in L1:
			// elf is found as last element in L2, so check executed n times
			if elt in L2:
				intersection.append(elt) // 1 step
		return intersection // 1 step

Complexity: 1 + n * (n + 1 + 1) + 1
Complexity order: O(n^2)

# Example 7
Order of growth class that best describes an expression:
5n => O(n)
3n^2 + 2n - 100 => O(n^c)
10 log(n) + 5n => O(n)
10 log(n) + 5n^2 => O(n^c)
3n^3 - 2000n^2 => O(n^c)
2n^2 => O(n^c)
50n + nlog(n) => O(n log(n))
1000 + 200000 => O(1)
2^n + n^2 => O(c^n)
logn + 1000 => O(log(n))
