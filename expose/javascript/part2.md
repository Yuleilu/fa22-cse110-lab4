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
