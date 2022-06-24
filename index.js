mytext = document.getElementById("mytext");
button = document.querySelectorAll('button');
let mytextvalue = "";
for (item of button) {
    item.addEventListener("click", (event) => {
        innertext = event.target.innerText;
        if (innertext == "AC") {
            mytext.value = "";

        }
        else if (innertext == "=") {
            mytext.value = eval(mytext.value);
        }
        else {
            mytext.value=mytext.value+innertext
        }
    })
}