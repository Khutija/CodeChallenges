/*Using the JavaScript language, have the function BinaryConverter(str) 
return the decimal form of the binary value. For example:
if 101 is passed return 5, or if 1000 is passed return 8. */
function binaryConverter(str)
{
    let res = 0;
    let arr = str.split("").reverse().join("");
    for (let i = 0; i < arr.length; i++)
    {

        if (arr[i] == "1")
        {
            res += Math.pow(2, i);
        }
    }
    return res;
}

console.log(binaryConverter("1000"));
// You can even use parseInt() to convert a binary to decimal.
//console.log(parseInt("1010", 2));