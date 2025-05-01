1. It would print out prices.length, this is because the for loop would increase i until it reaches prices.length.

2. It would print the last discounted price that it had stored. This is because var persists even after a for loop ends

3. This would also print the last value that it had as it still persists outside the for loop

4. If there is nothing wrong with the inputs this should just return the array of disounted prices, but if there is no check for different types this could cause an error

5. There would be an error because i is not defined in that scope. Let make i contained within the for loop and cannot be accesed from the outside

6. Same problem as before, discounted price cannot be accesed outside the for loop because let makes it contained within the for loop

7. This would print out the discounted value in different lines ("50", "100", "200") because let was defined outside the for loop and defined inside of it, this means it can still be accessed and that the changes made to it re-asign the variables value 

8. This would return an array containing [50,100,150] if all inputs are correct

9.  It will be an undefined error since the let doesn't make i visible outside the for loop

10. this would give 3 because it is defined with prices.length  

11. this would return the array [100,100,100] as the const discounted price cannot be re-assigned another value it will keep adding its value to the array

12. a) student.name
    b) student['Grad Year']
    c) student.greeting()
    d) student['Favorite Teacher'].name
    e) student.courseLoad[0]

13. a) '32'
    b) 1
    c) 3
    d) '3null'
    e) 4
    f) 0
    g) '3undefined'
    h) NaN

14. a) true
    b) false
    c) true
    d) false
    e) false
    f) true

15. The == operator checks if both inputs are figuratively the same (2 == '2') but the === operator checks that and if they are the same type ('2' === '2')

17.The function would return the array [2,4,6] This is because everything runs as expected until the callback. The callback inmediatly executes the doSomething function that returns the double of the number. This number is pushed onto the array. The result would be the for loop iterating through [1,2,3], running do something, which then is pushed into the new array that ends up like [2,4,6] 

19. The output should be "1 4 3 2"