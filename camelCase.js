/*
Have the function camelCaseWithoutSpecialCharacters(str) take the str parameter being passed 
and return it in proper camel case format where the first letter of each word is capitalized 
(excluding the first letter). The string will only contain letters and some combination of delimiter 
punctuation characters separating each word.

For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.
*/

function camelCaseWithoutSpecialCharacters(str)
{
    return str
        .toLowerCase() //Convert to lowercase
        .replace(/[^\w]+(.)/g, (letter) => letter.toUpperCase())  // to find all sequences in a string where one or more non-word characters are followed by a single character, capturing that single character.
        .replace(/[^a-zA-Z]/g, ''); //Remove special characters
}
console.log(camelCaseWithoutSpecialCharacters("cats AND*Dogs-are Awesome"));


/*
function toCamelCase(str)
{
    let newStr = "";
    // First convert all the letters to lower case and then split the string 
    // into an array of words removing any special characters
    let wordArr = str.toLowerCase().split(/[^\w]/g);
    for (let i in wordArr)
    {
        if (i > 0)
        {
            // Capitalize the first letter of each word
            // and add it to the new string here slice(1) to remove the first character to avoid double capitalization
            newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1); 
        } else
        {
            newStr += wordArr[i] // If it is the first word just add it to the new string
        }
    }

    return newStr;
}
console.log(toCamelCase("cats AND*Dogs-are Awesome"));
*/