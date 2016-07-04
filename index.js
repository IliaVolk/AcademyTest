(function(){
    var input = document.getElementById("input");
    var button = document.getElementById("button");
    var answer = document.getElementById("answer");
    answer.innerHTML = "no answer yet";
    button.onclick = function(){
        answer.innerHTML = "Your input: " + input.value;
    }
})();