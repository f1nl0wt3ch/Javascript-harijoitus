/**
 * Created by dinhthinh on 01/11/16.
 */
// find which day of year 1984
// note getMonth() luon tra ve thang kem 1 don vi so voi thang hien tai
    // getDay() se tra ve tu 0-7, trong do 0 la chu nhat va 1 la thu hai.
var d = new Date(1984, 9, 22);
var days = ["su","ma","ti","ke","to","pe","la"];
//noinspection JSUnresolvedVariable
console.log("your bornday was "+days[d.getDay()]);
var date = new Date();
console.log(date.getHours());

//find which year the date 1 tst is sunday from 2014 to 2050

for(var year = 2014; year < 2050; year++){
    var date = new Date(year, 0, 1);
    if(date.getDay() === 0){
        console.log("The first January on Sunday is "+year);
    }
}