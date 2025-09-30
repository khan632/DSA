1. Time complexity is used to measure efficiency of an algorithm in terms of speed, as input will grow more and more.
2. Time Complexity !== Time Taken by code to run

3. Asymptotic Notations:
    - Big O Notation (Worst case): Important and just a notation which represnt an algo's worst case compleity
    - Big Omega Notation (Best case)
    - Big Theta Notation ( Average case)

type of complexity:

O(1) >> O(logn) >> O(n) >> O(nlogn) >> O(n^2) >> O(n^3) >> O(2^n) >> O(n!)

 let n = 565677;
 let k = 2;
		
example: 
O(1): when calculation is not dependent on input size
  System.out.println("Hello");

O(n): when uses single loop inside an algo: [Best example: Linear Search]
1.    int i = 0;
		while (i < n) {
			System.out.println("Hey");
			// O(N)
			i++;
		}

2.      while (i <= n) {
			System.out.println("Hey");
			// O(N)
			i += 2;
			i += 3;
		}

3.      while (i <= n) {
			System.out.println("Hey");
			// O(N/K)
			i += k;
		}

O(logn): when i/p size reduces by half in each iteration: [Best example: Binary Search]
1.    while (i <= n) {
			System.out.println("Hey");
			// O(Log(N)) base 2
			i *= 2;
	}
2.    while (n > 0) {
			System.out.println("Hey");
			// O(Log(N)) base 2
			n /= 2;
		}
3.      while (i <= n) {
			System.out.println("Hey");
			// O(Log(N)) base 6
			i *= 2;
			i *= 3;
		}
4.      while (i <= n) {
			System.out.println("Hey");
			// O(Log(N)) base K
			i *= k;
		}

O(nlogn): when uses nested loop inside an algo and that loop work in n/2 form: [Best example: merge Sort]
1.      for(let i 0-> n) {
            while (i <= n) {
			System.out.println("Hey");
			i *= 2;
	}
			// O(Log(N)) base 2
}

O(n^2): when uses nested loop inside an algo and that loop work in n form: [Best example: bubble Sort]
//Independent loop
1.      for(let i 0-> n) {
            for(let j 0-> n) {
			System.out.println("Hey");
			i *= 2;
	}
			// O(N^2)
}

// dependent loop
2.        for (i = 1; i <= n; i++) {
			for (int j = 1; j <= i * i; j++) {
				for (k = 1; k <= n / 2; k++) {
					// O(N^4)
					System.out.println("hey");
				}
			}
		}

3.         for (i = 1; i <= n; i++) {
			for (int j = 1; j <= n; j += i) {
				// O((N)log(N))
				System.out.println("hey");
			}
		}



