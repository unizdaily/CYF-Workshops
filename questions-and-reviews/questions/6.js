



/* function printTimesTables(n) {
    const count = 1;
    while(count <= 12) {
        const product = n * i;
        console.log(`${n} * ${i} = ${product}`);
        count++;
    }
}
*/

/* A: When I tried to run the code there is an error in Line 8: ReferenceError 'i' is not defined.
When a variable is not define, 'i' variable is basically does not exist and has no return value. */

/* To debug: I change the 'i' to 'count' since 'count' is the variable that is already define
instead of the 'i' that was never created or defined.*/

/* Then when I run again another error which is TypeError: Assignment to constant variable.
Since the 'count' variable is a constant variable Javascript  will not allow us to reassign 
the value of 'count'. */ 

/*To debug: I will change it to 'let' parameter that will allow me to reassign and use the 
variable 'count' in the while loop. */

/* To print and get the value of the printTimesTables(5), I just put console.log() and now
return the value:
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
5 * 11 = 55
5 * 12 = 60
*/


function printTimesTables(n) {
    let count = 1;
    while(count <= 12) {
        const product = n * count;
        console.log(`${n} * ${count} = ${product}`);
        count++;
    }
}

console.log(printTimesTables(5));