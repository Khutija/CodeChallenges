/*
have the function reversePolishNotation(str) read str which will be an arithmetic expression composed of 
only integers and the operators: +,-,* and / and the input expression will be in postfix notation 
(Reverse Polish notation), an example: 
 (1 + 2) * 3 would be 1 2 + 3 * in postfix notation. 
 Your program should determine the answer for the given postfix expression. 
 For example: if str is 2 12 + 7 / then your program should output 2.
*/
function reversePolishNotation(str)
{
    let stack = [];
    let operators = ["+", "-", "/", "*"];
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++)
    {
        if (!operators.includes(arr[i]))
        {
            stack.push(arr[i]);
        } else
        {
            let operand2 = parseInt(stack.pop());
            let operand1 = parseInt(stack.pop());
            if (arr[i] === "+")
            {
                stack.push(operand1 + operand2);
            } else if (arr[i] === "-")
            {
                stack.push(operand1 - operand2);
            } else if (arr[i] === "/")
            {
                stack.push(operand1 / operand2);
            } else if (arr[i] === "*")
            {
                stack.push(operand1 * operand2);
            }
        }
    }
    return stack.pop();
}
console.log(reversePolishNotation("3 4 + 5 *"));