/**
 * Created by dinhthinh on 02/11/16.
 */
function check_palindrome(input){
    var count = 0;
    var inputStr = input.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    if(inputStr.length == 0){
        console.log("Input is not a palindrome");
    } else {
        if(inputStr.length%2 === 0){
            console.log("Input is not a palindrome");
        } else {
            count = inputStr.length/2 + 1;
            for (i=0; i < count; i++){
                if(inputStr[i] != inputStr.substr(-1-i)[0]){
                    console.log("Input is not a palindrome");
                    return false;
                }
            }
            console.log("Input is palindrome");
            return true;
        }
    }
}

console.log(check_palindrome("thiht"));