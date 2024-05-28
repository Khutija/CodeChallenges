/*
Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, 
and return the number of valid combinations that can be formed with num pairs of parentheses. 
For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, 
namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). 
There are 5 total combinations when the input is 3, so your program should return 5.
*/

function bracketCombinations(num)
{
    return (factorial(2 * num)) / ((factorial(num + 1)) * (factorial(num)));
    // n! / ((n+1)! * n!) i.e. 2n! / ((n+1)! * n!) 

}

const factorial = (num) =>
{
    if (num === 0 || num === 1)
        return 1;
    for (let i = num - 1; i >= 1; i--)
    {
        num *= i; // n! i.e. n*(n-1)*(n-2)*...*1
    }
    return num;
}

console.log(bracketCombinations(3));