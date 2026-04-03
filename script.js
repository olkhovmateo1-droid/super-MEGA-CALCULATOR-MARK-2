let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".buttons"))




buttons.map((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        switch(e.target.innerText) {
            case "AC":
                display.innerText = "0";
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch(e) {
                    display.innerText = "ERROR!";
                }
                break;
            case "+/-":
                display.innerText = "-";
                break;
            case "%":
                let passedtext = display.innerText + "/100";
                display.innerText = eval(passedtext);
                break;
            default:
                if(display.innerText === "0" && e.target.innerText !== ".") {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
        }
    });
});




