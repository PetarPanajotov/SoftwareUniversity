function evenOrOdd (input) {
    let num1 = Number(input[0]);
    let num2 = num1 % 2;
    if (num2 == 0) {
        console.log ("even");
    }   else {  
    console.log ("odd");
    }
}   
evenOrOdd([1024]);