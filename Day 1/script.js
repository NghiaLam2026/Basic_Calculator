const first_number = document.querySelector(".first_number");
const second_number = document.querySelector(".second_number");
let operators = document.querySelector(".operators");
const submit_button = document.querySelector(".submit_button")

function perform_operator(){
    const num1 = Number(first_number.value);
    const num2 = Number(second_number.value);
    const operator = operators.value;

    if (operator === "+"){
        alert(num1 + num2)
    } else if (operator === "-"){
        alert(num1 - num2)
    } else if (operator === "÷"){
        alert(num1 / num2)
    } else {
        alert(num1 * num2)
    }
}

submit_button.addEventListener("click", perform_operator);


