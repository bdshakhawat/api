var name = "kabul";
function add(num1,num2){
    var result = num1 + num2;
    console.log("result from inside", name);
    // console.log("result from inside", result);
    return result
}
console.log("result from outside", name);
// console.log("result from outside", result);
var sum = add(5,10);
console.log(sum);