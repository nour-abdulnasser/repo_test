
var count = 0; 
function count_inc(){
    var counter = document.getElementById("count");
    // var current_value = Number(counter.innerHTML);
    count +=1; // rather than the line above // better for string concatination (?)
    counter.innerHTML= "count is "+count+" in total";
    //console.log("net count is ", current_value);
}

function count_dec(){
    var counter = document.getElementById("count");
    // var current_value = Number(counter.innerHTML);
    count -=1;
    //counter.innerHTML= current_value -1;
    counter.innerHTML= "count is "+count+" in total";
    // console.log("net count is ", current_value-1);
}