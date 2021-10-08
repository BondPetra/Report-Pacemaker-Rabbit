//unitのクリック計算
var unit_check = document.getElementsByName('unit');

for(i=0;i<unit_check.length;i++){
    unit_check[i].addEventListener('click', function(e){
        price_sum();
    });
}

//合計計算
document.getElementById('submit').onclick = 
function price_sum(){
    var sum = 0;
    for (var i = 0; i < unit_check.length; i++){
        if(unit_check[i].checked){
            sum += parseInt(unit_check[i].value);
        }
    }

var goal_day = document.getElementById('goal').value;
var gal = parseInt(goal_day);
console.log(sum);
// document.myform.total.value=sum/gal;
total = document.getElementById("result");
total.innerHTML = '一日　'+ sum/gal +'　個ずつ進めれば終わります！' + '<br>[切り上げ] ' + Math.ceil(sum/gal) + "  個進めよう！";
// document.myform.safty.value=Math.ceil(sum/gal);
}
