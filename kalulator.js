function reset() {
    document.getElementById("result").value = ""
}
function display(val) {
    document.getElementById('result').value += val
}
function addInput(event) {
    if(event.key == '0' ||
       event.key == '1' ||
       event.key == '2' ||
       event.key == '3' ||
       event.key == '4' ||
       event.key == '5' ||
       event.key == '6' ||
       event.key == '7' ||
       event.key == '8' ||
       event.key == '9' ||
       event.key == '+' ||
       event.key == '-' ||
       event.key == '*' ||
       event.key == '/'){
    document.getElementById("result").value += event.key
       }
}
    const calculator = document.getElementById("calculator")
    calculator.onkeyup = function(event) {
        if (event.keyCode === 13) {
            console.log("Enter");
            let x = document.getElementById("result").value
            console.log(x);
            solve();
        }
    }

function solve() {
    let x = document.getElementById("result").value
    let sum = eval(x);
    document.getElementById("result").value = sum
}