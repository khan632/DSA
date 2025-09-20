Basic structure to solve all pattern problem

1. find no row we need to work
2. find what task we need to do.
3. start a main loop row <= no of star
4. start a counter
5. start a inner n no of loop for n number of task
6. after inner loop logic for next line and increment row
example:
***
***
***
syntax:
//row number
let row = 1;
// no of task: 1 (print star)
let star = N
// start a loop
while(row <= N) {
    let i = 1;
    //inner loop for no of task
    while(i <= star) {
        log("*");
        i++;
    }
// prepration for next line
log("\n")
star++;
}


pattern problems:

pattern 1:
* * * *
* * * *
* * * *
* * * *

pattern 2:
*
* *
* * *
* * * *

pattern 3:

1
1 2
1 2 3
1 2 3 4

pattern 4:

1 2 3 4
1 2 3 
1 2 
1

pattern 5:
     *
    **
   ***
  ****
 *****

 pattern 6:

 1
 1 0
 1 0 1
 1 0 1 0
 1 0 1 0 1
  