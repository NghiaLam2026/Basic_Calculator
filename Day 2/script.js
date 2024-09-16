const meal_amount = document.querySelector(".total_amount")
const tip_input = document.querySelector(".tip_amount")
const tip_button = document.querySelector(".tip_button")

function total_bill(){
    const meal_amount_value = parseFloat(meal_amount.value)
    const tip_input_decimal = parseFloat(tip_input.value) / 100
    const tip_amount = tip_input_decimal * meal_amount_value

    alert(meal_amount_value + tip_amount)
}

tip_button.addEventListener("click", total_bill)
