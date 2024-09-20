const start_button = document.querySelector(".start_button")
const reset_button = document.querySelector(".reset_button")
const five_second_button = document.querySelector(".five_second")
const seconds = document.querySelector(".seconds")
let intervalId;

function add_seconds(){
    let seconds_value = parseInt(seconds.innerHTML)
    seconds_value += 5
    seconds.innerHTML = seconds_value
}

function reset_seconds(){
    document.querySelector(".seconds").innerHTML = 0
}

function count_down(){
    let seconds_value = parseInt(seconds.innerHTML)
    if (seconds_value > 0){
        seconds_value -= 1
        seconds.innerHTML = seconds_value
    } else {
        clearInterval(intervalId)
    }
    
}

start_button.addEventListener("click", () => {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(count_down, 1000);
})
five_second_button.addEventListener("click", add_seconds)
reset_button.addEventListener("click", reset_seconds)