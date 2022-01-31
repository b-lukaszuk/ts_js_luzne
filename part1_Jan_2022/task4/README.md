# Task 4

[Amicable Pairs](https://rosettacode.org/wiki/Amicable_pairs):

## Description

### Basic Info

Two integers `N` and `M` are said to be `amicable pairs` if `N != M` and `sum(propDivs(N)) = M` as well as `sum(propDivs(M)) = N`

### Example

1184 and 1210 are an amicable pair, with proper divisors:

+ 1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 and
+ 1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 respectively.

### What to do?

Calculate and show here the Amicable pairs below 20,000; (there are eight).

### Additional info

Due to performance I limited my programs to look for amiable pairs below 2'000.

Still, it takes around 40 sec. to find them (TS/JS), interestingly similar program in Python needs ~180 sec (the same device, similar code).
