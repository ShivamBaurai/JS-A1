/* Arrow fuction
 const addtwonumbers=(A,B)=>
 {
    sum = A+B;
    return sum;
 }

 console.log(addtwonumbers(2,3))


 const addTwonumbers = function(C,D)
 {
     Sum=C+D;
     return Sum;
 }
 console.log(addTwonumbers(2,3));


 function addTwoNumbers(E,F)
 {
    SUM=E+F;
     return SUM;
 }
 console.log(addTwoNumbers(2,3));/*


//        question 2

/* const isValid=(A,B)=>
 {
    if(A<B<10)
     {
         return true;
     }
     else{
         return false;
     }
 }
 console.log(isValid(5,3)); /*


//         question 3

 const check=(A,B)=>
 {
     if(A%10==0&& B%10==0)
     {
          return true;
     }
     if(A%10==0 || B%10==0)
     {
          return true;
     }
     else
    {
         return false;
     }
 }
 console.log(check(20,30))
 console.log(check(21,31))
 console.log(check(21,30))


//    question 4
/*     without string
 const First_Digit= (A)=>
 {

        while(A!=0)
        {
         let  a= parseInt(A/1000);
           return a;
        }

 }

 console.log(First_Digit(2345)) /*

//     question 5

/* const Last_Digit= (A)=>
 {
      let remainder1= A%1000;
      let remainder2 = remainder1%100;
      let result = remainder2%10;

      return result;

 }

 console.log(Last_Digit(2345)); /*

//    question 6

 const find_The_Remainder=(A,B)=>
{
    let remainder = A%B;
    return remainder;

 }
 console.log(find_The_Remainder(5,3))


// question 7

 const multiply_Two_Numbers = (A,B)=>
 {
     result = A*B;
     return result;
 }
 console.log(multiply_Two_Numbers(2,3))

// question 8

const totalMarks=(A,B,C)=>
{
    let Sum = A + B + C;
    return Sum;
}
const Average = (A,B,C)=>
{
     console.log(Math.round(4.6))
     let total = totalMarks(50,20,100)
    let Average = total/3;
    return Average;
}

a= totalMarks(50,20,100);
b= Average(50,20,100);

console.log(a,Math.floor(b));