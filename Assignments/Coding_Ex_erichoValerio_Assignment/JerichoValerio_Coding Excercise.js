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

<script>

// Arrange the data in a suitable format
const student1 = [70.5, 88.0, 91.0, 85.5, 66.5];
const student2 = [90.5, 92.5, 90.0, 95.0, 87.5];
const student3 = [75.5, 75.0, 77.0, 75.5, 81.5];
const student4 = [55.5, 68.0, 71.5, 85.0, 66.0];
const student5 = [70.5, 88.0, 91.0, 85.5, 66.5];
const student6 = [80.5, 87.0, 57.0, 75.5, 64.0];

// Create multidimensional array of all student results
const allResults = [];
allResults.push(student1, student2, student3, student4, student5, student6);

let studentNumber = 0;  
let studentLess60Message = "";

// Loop through each student
for (let studentResultsArray of allResults) 
{
    // Keep track of score total for each student
    let sum = 0;

    // Increment studentNumber to keep track of student
    studentNumber += 1;

    // Loop through each student result
    for (let result of studentResultsArray) 
    {
        sum += result;

        // Check to see if student has scored less than 60
        if (result < 60) 
        {
            studentLess60Message += "Student " + studentNumber + " has gotten a score of less than 60% => " + result + "\n\n";
        }
    } // END loop

    // Calculate average score of student
    let avg = sum/studentResultsArray.length;

    console.log("Student " + studentNumber + " average = " + avg.toFixed(2));
} // END loop

</script>

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

