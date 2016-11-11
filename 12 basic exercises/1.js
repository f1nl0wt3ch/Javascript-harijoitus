/**
 * Created by dinhthinh on 01/11/16.
 */
var date = new Date();
var pv = date.getDate();
var paivat = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var tunti = date.getHours();
var minutti = date.getMinutes();
var sekuntti = date.getSeconds();
if(tunti > 12) {
    console.log("Today is "+ paivat[pv-1]);
    console.log("Current time is "+(tunti-12)+" PM"+ " : "+minutti+" : "+sekuntti);
} else if(tunti < 12){
    console.log("Today is "+ paivat[pv-1]);
    console.log("Current time is "+tunti+" AM"+ " :"+minutti+" : "+sekuntti);
} else {
    console.log("Current time is "+"Today is "+ paivat[pv-1]);
    console.log("Current time is "+tunti+ " :"+minutti+" :"+sekuntti);
}
