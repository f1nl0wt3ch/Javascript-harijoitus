/**
 * Created by dinhthinh on 01/11/16.
 */
var today = new Date();
var chDay = new Date(today.getUTCFullYear(), 11, 25);
//var today2 = new Date(2016, 10, 2) ;

if(today.getMonth()== 11 && today.getDate() > 25)  {
    console.log ("The next cmas is "+chDay.getFullYear()+1);
}

var one_day = 24*60*60*1000;
var day_left = Math.ceil((chDay.getTime() - today.getTime())/one_day);
console.log("days left to christmas "+day_left);
console.log(today.getUTCMonth());


