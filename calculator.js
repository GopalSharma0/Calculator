

const screen = document.querySelector("#box");
const buttons = document.querySelectorAll(".border");
// console.log(buttons.innerT);
let screenValue = "";


for (item of buttons) {
    item.addEventListener("click", function (e) {

        const buttonText = e.target.innerText;
        screen.value = buttonText;
        console.log(screen.value);
        if (buttonText == "*") {
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == "AC") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "=") {

            screen.value = eval(screenValue);
            console.log(screen.value);
        }
        else if (buttonText == "Del") {
            screenValue = screenValue.slice(0, screenValue.length - 1);
            screen.value = screenValue;

            // screenValue += string.slice(0, -1);
            // let numbers = parseInt(screenValue)
            // screen.value = numbers;
            // console.log(screen.value);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;

        }


    })
}
