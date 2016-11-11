/**
 * Created by dinhthinh on 03/11/16.
 */

function showData(){
    var input = document.getElementById("test").value;
    localStorage.setItem("key","hello");
    document.getElementById("show").innerHTML = localStorage.getItem("key");
}
