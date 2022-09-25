// 1. Write a function to find the sum of the elements inside the array

<script>
    // Creating array
    var arr = [4, 8, 7, 13, 12]
  
    // Creating variable to store the sum
    var sum = 0;
  
    // Running the for loop
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Prints: 44
    document.write("Sum is " + sum)
</script>


// 2. Using a function for loop print all even numbers up to n (parameter in function);

<script>   
    console.log('Even numbers are ');

for (var i = 2 ; i < 12 ; i += 2 ) {
    console.log(i);
}
</script>


// 3. Write a function take a string as a parameter, Check if a string contains the letter “y”. If yes print "YES" and only one time.
// For example - "Crayzy" "Yes"

<script>
var inputString = "crazy";
var findme = "y";

if ( inputString.indexOf(findme) > -1 ) {
    alert( "YES" );
} else {
    alert( "NO" );
}
</script>


// 4. Write a function to find the factorial of a given number n

<script>
function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  

let n = 6;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);
}
</script>


// 5. // Write a function which accepts 4 parameters (different scores of a student for subjects), and
// then calculate the average of all the score.
// If the average is more than 90 , then console grade A
// If the average is between 70 and 90 , then console grade B
// If the average is between 50-70, then console grade C
// Other wise console grade F

// 6. Write a function which prints the star pattern like that for the given value n

// *
// **
// ***
// ****
// *****
// ******
// *******


console.log
("*
 **
 ***
 ****
 *****
 ******
 *******");
  



// 7.

// *
// **
// ***
// ****
// *****
// ******
// *******
// ******
// *****
// ****
// ***
// **
// *


console.log
(" 
 *
 **
 ***
 ****
 *****
 ******
 *******
 ******
 *****
 ****
 ***
 **
 *");


// 8. Write a function to reverse a string

<script>
function ReverseString(str) {

	// Check input
	if(!str || str.length < 2 ||
			typeof str!== 'string') {
		return 'Not valid';
	}
	
	// Take empty array revArray
	const revArray = [];
	const length = str.length - 1;
	
	// Looping from the end
	for(let i = length; i >= 0; i--) {
		revArray.push(str[i]);
	}
	
	// Joining the array elements
	return revArray.join('');

}

document.write(ReverseString("APPLE Is Better Than SAMSUNG"))
</script>

