/**
 A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.

 For this exersise, given a string (A), print "Yes" if it is a palindrome, print "No" otherwise.

 Constraints
 String A will consist of at most 50 lower case english letters.

 Stretch - configure the code so that it doesn't matter if there are uppercase letters in the string.

 Sample Input:
 madam

 Sample Output:
 Yes
 -------------------

 Sample Input:
 tiger

 Sample Output:
 No
 -------------------

 Stretch Sample Input:
 Racecar

 Stretch Sample Output:
 Yes

 */


function reversedString(A){
    // Convert the string to lowercase to handle uppercase letters
    let lowerA = A.toLowerCase();

    // Reverse the string
    let reversedA = lowerA.split('').reverse().join('');

    // Check if the original string is the same as the reversed string
    if (lowerA === reversedA) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

reversedString("madam");//Yes
reversedString("tiger");//No
reversedString("Racecar"); // Yes (Stretch goal)