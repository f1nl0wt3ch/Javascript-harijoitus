/**
 * Created by dinhthinh on 02/11/16.
 */
var x = 987654321;
var y = new Array();
function change (input) {
    var inputStr = input.toString();
    for (i = 0; i < inputStr.length; i++) {
        y.push(inputStr.charAt(i));
    }
    return y.reverse().join("");
}
console.log(change(x));

function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));