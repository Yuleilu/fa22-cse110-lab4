
## part2

# 1. 
3

# 2.
150

# 3.
150

# 4.
[50,100,150]
The function calctulate discount prices through a loop. Input a list of prices and output the discount prices. Especially when 'var' can be modified.

# 5.
error. because the variable i was defined in the for loop and is therefore not accessible outside of it. 

# 6.
error. because finalPrice is defined in the for loop, code block is in the loop. After the loop finish, it will be destroyed.

# 7.
150
because it's defined in the function rather than in the loop.

# 8.
[50, 100, 150]

# 9.
ReferenceError. because i is declared inside the for loop using let, which means its scope is limited to the loop block. Therefore, i does not exist outside of the loop, and trying to access it will result in an error.

# 10.
3
because length is assigned the value of p.length before the loop.

# 11.
[50, 100, 150]
The function takes an array of prices and a discount percentage. It calculates the discounted price for each product in the prices array. The discounted prices are then pushed into a new array, which is ultimately returned by the function.



# 12.
student.name，student['name']
student['Grad Year']
student.greeting()
student['favorite Teacher'].name
student['favorite Teacher']['name']
student.courseLoad[0]

# 13.
Arithmetic
‘3’ + 2          "32". The + operator concatenates the string '3' with the number 2.
‘3’ - 2          1. The - operator subtracts the number 2 from the string '3'.
3 + null         3. 3 + 0
‘3’ + null       "3null". The + operator concatenates the string '3' with the string representation of null
true + 3         4. true is treated as 1 in numeric contexts. 
false + null     0. false is treated as 0 in numeric contexts. 
'3' + undefined  "3undefined". The + operator concatenates the string '3' with the string representation of undefined
'3' - undefined  NaN. the - operator cannot be used with undefined. 

# 14.
Comparison
‘2’ > 1           true. operator > coerces the string '2' to a number and compares it with the number 1
‘2’ < ‘12’        true. The comparison operator < compares the strings lexicographically. In this case, the first character of '2' is compared with the first character of '12'
2 == ‘2’          true. the string '2' is coerced to a number 2
2 === ‘2’         false. strict equality operator === compares the operands without coercion
true == 2         false. 1!=0
true === Boolean(2)       true. Boolean(2)===true

# 15.
Explain the difference between the == and === operators.   
The == operator is a loose equality operator that coerces the operands to a common type and compares them. The strict equality operator === compares the operands without coercion.


# 17.
[2,4,6].
When looping the array, each element in the array is passed to callback function(doSomething). And doSomething return each element by mutiplying 2.

# 19.
1
4
3
2
