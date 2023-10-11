// NAME X
let nameX = document.querySelector("#nameX");
let getnameX = localStorage.getItem("usernameX");
// NAME O
let nameO = document.querySelector("#nameO");
let getnameO = localStorage.getItem("usernameO");

// PHOTO X
let photoX = document.querySelector("#photoX img");
let getphotoX = localStorage.getItem("profileX");

// PHOTO O
let photoO = document.querySelector("#photoO img");
let getphotoO = localStorage.getItem("profileO");

// HIDE SIGNIN AND SIGNUP
let sign = document.querySelector(".sign")
let out = document.querySelector(".out");

if (getnameX) {
    nameX.innerHTML = getnameX;                      // X
    nameO.innerHTML = getnameO;                      // O
    sign.style.display = "none";                     // SIGNIN AND SIGNUP
    out.style.display = "block";                     // LOGOUT BTN
} else {
    nameX.innerHTML = "X player";                    // X
    nameO.innerHTML = "O player";                    // O
    sign.style.display = "block";                     // SIGNIN AND SIGNUP
    out.style.display = "none";                     // LOGOUT BTN
}

if (getphotoX && getphotoO) {
    photoX.setAttribute("src", getphotoX);          // X
    photoO.setAttribute("src", getphotoO);        // O
}

// LOGOUT
function logout() {
    localStorage.clear();
}

// THE GAME PLAYING
let title = document.querySelector(".title");
let title2 = document.querySelector(".title2");
let again = document.querySelector(".again");
let notification = document.querySelector(".notification");


let scoreX = document.querySelector("#scoreX");
scoreX.innerHTML = 0;
let scoreO = document.querySelector("#scoreO");
scoreO.innerHTML = 0;
let turn = "x";

again.addEventListener("click", () => {                    // START A NEW GAME
    notification.style.top = "-50%";
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i);
        squares[i].innerHTML = "";
    }
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i);
        squares[i].style.background = "#808080ab";

    }
    turn = "x";
    title.innerHTML = "X Player";
})



function end(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} winner`;

    // for (let i = 1; i < 10; i++) {
    //     squares[i] = document.getElementById("item" + i);
    //     // squares[i].style.background = "#808080ab";
    //     console.log(squares[i]);
    //     if(squares[i] != ""){
    //         squares[i].innerHTML = "";
    //         console.log("kero")
    //     }

    // }

    if (squares[num1] == "x") {                                            // SCORE
        scoreX.innerHTML = parseInt(parseInt(scoreX.textContent) + 1);
    } else {
        scoreO.innerHTML = parseInt(parseInt(scoreO.textContent) + 1);
    }

    notification.style.top = "50%";                                      // NOTIFICSTION
    title2.innerHTML = `${squares[num1]}`;
    document.getElementById("item" + num1).style.background = "#A8DF8E";   // STYLE
    document.getElementById("item" + num2).style.background = "#A8DF8E";
    document.getElementById("item" + num3).style.background = "#A8DF8E";
}

let squares = [];
function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }
    // ROW
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "") {
        end(1, 2, 3);
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != "") {
        end(4, 5, 6);
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != "") {
        end(7, 8, 9);
    }
    // COLUMN
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != "") {
        end(1, 4, 7);
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != "") {
        end(2, 5, 8);
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != "") {
        end(3, 6, 9);
    }
    // CROSS
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != "") {
        end(1, 5, 9);
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != "") {
        end(3, 5, 7);
    }
}



// function clear() {
//     for (let i = 1; i < 10; i++) {
//         squares[i] = document.getElementById("item" + i).innerHTML;
//         // squares[i].innerHTML = "";
//     }

//     if (squares[1] != "" && squares[2] != "" && squares[3] != "" && squares[4] != "" && squares[5] != "" && squares[6] != "" && squares[7] != "" && squares[8] != "" && squares[9] != "") {
//         // squares[i].innerHTML = "";
//         console.log("kero");
//     }
// }
// clear();

function game(id) {
    let element = document.getElementById(id);
    if (turn === "x" && element.innerHTML == "") {
        element.innerHTML = "x";
        title.innerHTML = "O Player";
        turn = "o";
    } else if (turn === "o" && element.innerHTML == '') {
        element.innerHTML = "o";
        title.innerHTML = "X Player";
        turn = "x";
    }

    for (let i = 1; i < 10; i++) {                                      // CLEAR VALUES IN ITEMS
        squares[i] = document.getElementById("item" + i);
    }
    if (squares[1].innerHTML != "" && squares[2].innerHTML != "" && squares[3].innerHTML != "" && squares[4].innerHTML != "" && squares[5].innerHTML != "" &&
        squares[6].innerHTML != "" && squares[7].innerHTML != "" && squares[8].innerHTML != "" && squares[9].innerHTML != "") {

            squares[1].innerHTML = "";
            squares[2].innerHTML = "";
            squares[3].innerHTML = "";
            squares[4].innerHTML = "";
            squares[5].innerHTML = "";
            squares[6].innerHTML = "";
            squares[7].innerHTML = "";
            squares[8].innerHTML = "";
            squares[9].innerHTML = "";
    }
    winner();
}

