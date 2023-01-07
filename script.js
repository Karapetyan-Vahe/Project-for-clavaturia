let text = document.querySelectorAll(".txt")
let shift = document.getElementById("mec")
let shift_2 = document.getElementById("mec_2")
let arj_tox = document.querySelectorAll('.arj_tox');
let color = document.getElementById("keycolor")
let key = document.getElementById("keybord")
let clic = false;
let c = document.getElementById("xach_1")
let delite = document.querySelector('.backspace')
let arr = []
let p = document.getElementById("mini_key")
let num = document.getElementById("number")
let textarea = document.querySelector("textarea")
let space_btn = document.querySelector('.space')
function upperCase() {
    switch (true) {
        case clic === false:
            clic = true;
            for (let elem of arj_tox) {
                elem.style.transform = 'rotateY(180deg)';
            }
            break;
        default:
            clic = false;
            for (let elem of arj_tox) {
                elem.style.transform = 'rotateY(360deg)';
            }
    }
}


number.addEventListener('click', () => {
    let q = document.getElementById("q").innerHTML;
    if (q == "q") {
        document.getElementById("q").innerHTML = 1;
        document.getElementById("w").innerHTML = "2";
        document.getElementById("e").innerHTML = "3";
        document.getElementById("r").innerHTML = "4";
        document.getElementById("t").innerHTML = "5";
        document.getElementById("y").innerHTML = "6";
        document.getElementById("u").innerHTML = "7";
        document.getElementById("i").innerHTML = "8";
        document.getElementById("o").innerHTML = "9";
        document.getElementById("p").innerHTML = "0";
    } else {
        document.getElementById("q").innerHTML = "q";
        document.getElementById("w").innerHTML = "w";
        document.getElementById("e").innerHTML = "e";
        document.getElementById("r").innerHTML = "r";
        document.getElementById("t").innerHTML = "t";
        document.getElementById("y").innerHTML = "y";
        document.getElementById("u").innerHTML = "u";
        document.getElementById("i").innerHTML = "i";
        document.getElementById("o").innerHTML = "o";
        document.getElementById("p").innerHTML = "p"
    }

})
let sm = document.getElementById("smile")
smile.addEventListener('click', () => {

    let v = document.getElementById("q").innerHTML;
    if (v == "q") {
        document.getElementById("q").innerHTML = "😂";
        document.getElementById("w").innerHTML = "🤣";
        document.getElementById("e").innerHTML = "😎";
        document.getElementById("r").innerHTML = "👹";
        document.getElementById("t").innerHTML = "🤐";
        document.getElementById("y").innerHTML = "❤️";
        document.getElementById("u").innerHTML = "👍";
        document.getElementById("i").innerHTML = "🤢";
        document.getElementById("o").innerHTML = "🤡";
        document.getElementById("p").innerHTML = "☠️"
    } else {
        document.getElementById("q").innerHTML = "q";
        document.getElementById("w").innerHTML = "w";
        document.getElementById("e").innerHTML = "e";
        document.getElementById("r").innerHTML = "r";
        document.getElementById("t").innerHTML = "t";
        document.getElementById("y").innerHTML = "y";
        document.getElementById("u").innerHTML = "u";
        document.getElementById("i").innerHTML = "i";
        document.getElementById("o").innerHTML = "o";
        document.getElementById("p").innerHTML = "p"
    }

})


shift.addEventListener('click', () => {
    upperCase();
})

shift_2.addEventListener('click', () => {
    upperCase();

})


for (let elem of text) {
    elem.addEventListener('click', function () {
        arr = textarea.innerHTML += elem.innerHTML;
        arr = textarea.innerHTML.split('')
    });
}

color.addEventListener('click', function () {
    let a = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let c = Math.ceil(Math.random() * 255);
    keybord.style.backgroundColor = `rgb(${a},${b},${c})`
});
xach_1.addEventListener('click', function () {
    document.getElementById("parent").style.display = "none";
    keybord.style.display = "none";
    document.getElementById("mini_key").style.display = "block";
});
mini_key.addEventListener('click', function () {
    document.getElementById("parent").style.display = "flex";
    keybord.style.display = "flex";
    document.getElementById("mini_key").style.display = "none";
});


delite.addEventListener('click', () => {
    arr.pop()
    textarea.innerHTML = arr.join('');
});

space_btn.addEventListener('click', () => {
    arr.push(' ')
    textarea.innerHTML = arr.join('')
})
let en = document.getElementById("enter")
enter.addEventListener('click', function () {
    textarea.innerText = ""
});