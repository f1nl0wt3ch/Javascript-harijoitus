/**
 * Created by dinhthinh on 01/11/16.
 */
//note so sanh 2 number trong js thi dung ==, con so sanh string thi dung 3 dau bang ===
    var machine = Math.ceil(Math.random()*10);
      var input = prompt("pls enter ur number "+ machine);
        if (input == machine) {
            alert("work good");
        } else {
            alert("not matched");
        }

