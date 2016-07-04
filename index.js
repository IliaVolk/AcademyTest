(function(){
    var input = document.getElementById("input");
    var button = document.getElementById("button");
    var answer = document.getElementById("answer");
    answer.innerHTML = "no answer yet";
    button.onclick = function(){
        var number = input.value;
        if (number % 2 === 0){
            answer.innerHTML = "This number is odd";
        }else {
            answer.innerHTML = "This number is even";
        }
    }
})();