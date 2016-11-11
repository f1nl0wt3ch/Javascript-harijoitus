/**
 * Created by dinhthinh on 01/11/16.
 */
 var date = new Date();
var mm = date.getMonth();
var dd = date.getDate();
var yyyy = date.getFullYear();
if(dd.valueOf() == 1 && mm.valueOf() == 1) {
    console.log("0"+mm+"-"+"0"+dd+"-"+yyyy);
    console.log("0"+mm+"/"+"0"+dd+"/"+yyyy);
} else if (dd.valueOf() == 1 && mm.valueOf() > 1) {
    console.log(mm+"-"+"0"+dd+"-"+yyyy);
    console.log(mm+"/"+"0"+dd+"/"+yyyy);
} else if (dd.valueOf() > 1 && mm.valueOf() == 1) {
    console.log("0"+mm+"-"+dd+"-"+yyyy);
    console.log("0"+mm+"/"+dd+"/"+yyyy);
} else {
    console.log(mm+"-"+dd+"-"+yyyy);
    console.log(mm+"/"+dd+"/"+yyyy);
}
