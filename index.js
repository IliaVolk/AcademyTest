(function(){
    var input = document.getElementById("input");
    var button = document.getElementById("button");
    var answer = document.getElementById("answer");
    answer.innerHTML = "no answer yet";
    button.onclick = function(){
        var inputValue = input.value;
        
        if (inputValue === ""){
            answer.innerHTML = "Your input is empty";
        }else {
            answer.innerHTML = "Your input: " + inputValue;
        }
    }
})();