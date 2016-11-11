/**
 * Created by dinhthinh on 01/11/16.
 */
var side1 = 5;
var side2 = 6;
var side3 = 7;
var perimetter = (side1 + side2+ side3)/2;
var area = Math.sqrt(perimetter*(perimetter - side1)*(perimetter-side2)*(perimetter-side3));
//var areaDouble = Math.floor(area);
//var areaDouble = Math.round(area);
var areaDouble = Math.ceil(area, 4);
console.log(areaDouble);

