mytext = document.getElementById("mytext");
// console.log(mytext)
button = document.querySelectorAll('button');

for (item of button) {
    item.addEventListener("click", (event) => {
        innertext = event.target.innerText;
        let audio = document.createElement('audio');
        audio.setAttribute('src', './ringtone.mp3#t=00:00:26');
        audio.play()

        if (innertext == "AC") {
            mytext.value = "";

        }
        else if (innertext == "X") {
            mytext.value = mytext.value + "*";
        }
        else if (innertext == "=") {
            mytext.value = eval(mytext.value);
        }
        else if (innertext == "=") {
            mytext.value = eval(mytext.value);
        }
        else {
            mytext.value = mytext.value + innertext
        }
    })
}