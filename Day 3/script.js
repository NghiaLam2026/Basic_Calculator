const add_button = document.querySelector(".counter_button")

function increment(){
    let counter = 0

    function increment_number(){
        counter += 1
        document.querySelector(".number").innerHTML = counter
    }
    return increment_number;
}

add_button.addEventListener("click", increment());
