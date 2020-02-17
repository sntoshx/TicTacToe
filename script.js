let turn = 0;
let choice;
let count = 0;

// let p1name = prompt("Enter name of first player: ");
// let p2name = prompt("Enter name of second player: ");
// p1name = p1name.toLowerCase();
// p2name = p2name.toLowerCase();
// p1name = capitalize(p1name);
// p2name = capitalize(p2name);
// console.log(p1name);
// console.log(p2name);
// capitalize = str1 => {
//   str1 = str1[0].toUpperCase() + str1.slice(1);
//   return str1;
// };

let matrix = {
  "zero-zero": false,
  "zero-one": false,
  "zero-two": false,
  "one-zero": false,
  "one-one": false,
  "one-two": false,
  "two-zero": false,
  "two-one": false,
  "two-two": false
};

let matrix1 = {
  "zero-zero": false,
  "zero-one": false,
  "zero-two": false,
  "one-zero": false,
  "one-one": false,
  "one-two": false,
  "two-zero": false,
  "two-one": false,
  "two-two": false
};

let matrix2 = {
  "zero-zero": false,
  "zero-one": false,
  "zero-two": false,
  "one-zero": false,
  "one-one": false,
  "one-two": false,
  "two-zero": false,
  "two-one": false,
  "two-two": false
};

window.onload = function() {
  cross = () => {
    let elem = document.querySelector(".container-body");
    elem.style.animation = "fade-out .2s linear both";
    choice = "cross";
    let elem2 = document.querySelector(".game-container");
    elem2.style.animation = "fade .1s linear both";
    elem2.style.setProperty("z-index", 1);
    document
      .querySelector(".container-body")
      .style.setProperty("pointer-events", "none");
    document
      .querySelector(".game-container")
      .style.setProperty("pointer-events", "auto");
  };

  circle = () => {
    let elem = document.querySelector(".container-body");
    elem.style.animation = "fade-out .2s linear both";
    choice = "circle";
    let elem2 = document.querySelector(".game-container");
    elem2.style.animation = "fade .1s linear both";
    elem2.style.setProperty("z-index", 1);
    document
      .querySelector(".container-body")
      .style.setProperty("pointer-events", "none");
    document
      .querySelector(".game-container")
      .style.setProperty("pointer-events", "auto");
  };

  userFill = param => {
    if (turn == 0) {
      if (matrix[param] == false) {
        let img = document.createElement("img");
        if (choice == "cross") img.src = "./images/option-circle.png";
        else img.src = "./images/options-cross.png";
        var dest = document.getElementById(param);
        dest.appendChild(img);
        matrix[param] = true;
        matrix1[param] = true;
        turn = 1;
        count = count + 1;
        winCheck1();
        winner();
      } else {
        console.log("hehehe");
      }
    } else {
      if (matrix[param] == false) {
        let img = document.createElement("img");
        if (choice == "circle") img.src = "./images/option-circle.png";
        else img.src = "./images/options-cross.png";
        var dest = document.getElementById(param);
        dest.appendChild(img);
        matrix[param] = true;
        matrix2[param] = true;
        turn = 0;
        count = count + 1;
        winCheck2();
        winner();
      } else console.log("hehe");
    }
  };

  winCheck1 = () => {
    if (
      matrix1["zero-zero"] == true &&
      matrix1["zero-one"] == true &&
      matrix1["zero-two"] == true
    ) {
      winner1 = "notdraw";
      paint1("zero-zero", "zero-one", "zero-two");
    } else if (
      matrix1["one-zero"] == true &&
      matrix1["one-one"] == true &&
      matrix1["one-two"] == true
    ) {
      winner1 = "notdraw";
      paint1("one-zero", "one-one", "one-two");
    } else if (
      matrix1["two-zero"] == true &&
      matrix1["two-one"] == true &&
      matrix1["two-two"] == true
    ) {
      winner1 = "notdraw";
      paint1("two-zero", "two-one", "two-two");
    } else if (
      matrix1["zero-zero"] == true &&
      matrix1["one-zero"] == true &&
      matrix1["two-zero"] == true
    ) {
      winner1 = "notdraw";
      paint1("zero-zero", "one-zero", "two-zero");
    } else if (
      matrix1["zero-one"] == true &&
      matrix1["one-one"] == true &&
      matrix1["two-one"] == true
    ) {
      winner1 = "notdraw";
      paint1("zero-one", "one-one", "two-one");
    } else if (
      matrix1["zero-two"] == true &&
      matrix1["one-two"] == true &&
      matrix1["two-two"] == true
    ) {
      winner1 = "notdraw";
      paint1("zero-two", "one-two", "two-two");
    } else if (
      matrix1["zero-zero"] == true &&
      matrix1["one-one"] == true &&
      matrix1["two-two"] == true
    ) {
      winner1 = "notdraw";
      paint1("zero-zero", "one-one", "two-two");
    } else if (
      matrix1["zero-two"] == true &&
      matrix1["one-one"] == true &&
      matrix1["two-zero"] == true
    ) {
      winner1 = "notdraw";
      paint1("zero-two", "one-one", "two-zero");
    } else {
      winner1 = "draw";
    }
  };
  winCheck2 = () => {
    if (
      matrix2["zero-zero"] == true &&
      matrix2["zero-one"] == true &&
      matrix2["zero-two"] == true
    ) {
      winner2 = "notdraw";
      paint2("zero-zero", "zero-one", "zero-two");
    } else if (
      matrix2["one-zero"] == true &&
      matrix2["one-one"] == true &&
      matrix2["one-two"] == true
    ) {
      winner2 = "notdraw";
      paint2("one-zero", "one-one", "one-two");
    } else if (
      matrix2["two-zero"] == true &&
      matrix2["two-one"] == true &&
      matrix2["two-two"] == true
    ) {
      winner2 = "notdraw";
      paint2("two-zero", "two-one", "two-two");
    } else if (
      matrix2["zero-zero"] == true &&
      matrix2["one-zero"] == true &&
      matrix2["two-zero"] == true
    ) {
      winner2 = "notdraw";
      paint2("zero-zero", "one-zero", "two-zero");
    } else if (
      matrix2["zero-one"] == true &&
      matrix2["one-one"] == true &&
      matrix2["two-one"] == true
    ) {
      winner2 = "notdraw";
      paint2("zero-one", "one-one", "two-one");
    } else if (
      matrix2["zero-two"] == true &&
      matrix2["one-two"] == true &&
      matrix2["two-two"] == true
    ) {
      winner2 = "notdraw";
      paint2("zero-two", "one-two", "two-two");
    } else if (
      matrix2["zero-zero"] == true &&
      matrix2["one-one"] == true &&
      matrix2["two-two"] == true
    ) {
      winner2 = "notdraw";
      paint2("zero-zero", "one-one", "two-two");
    } else if (
      matrix2["zero-two"] == true &&
      matrix2["one-one"] == true &&
      matrix2["two-zero"] == true
    ) {
      winner2 = "notdraw";
      paint2("zero-two", "one-one", "two-zero");
    } else {
      winner2 = "draw";
    }
  };

  paint1 = (first, second, third) => {
    if (choice == "cross") {
      document
        .getElementById(first)
        .style.setProperty("background-color", "rgb(104, 0, 76)");
      document
        .getElementById(second)
        .style.setProperty("background-color", "rgb(104, 0, 76)");
      document
        .getElementById(third)
        .style.setProperty("background-color", "rgb(104, 0, 76)");
      blocking();
      setTimeout(() => {
        newgame();
      }, 1500);
    } else {
      document
        .getElementById(first)
        .style.setProperty("background-color", "rgb(0, 47, 93)");
      document
        .getElementById(second)
        .style.setProperty("background-color", "rgb(0, 47, 93)");
      document
        .getElementById(third)
        .style.setProperty("background-color", "rgb(0, 47, 93)");
      blocking();
      setTimeout(() => {
        newgame();
      }, 1500);
    }
  };

  paint2 = (first, second, third) => {
    if (choice == "circle") {
      document
        .getElementById(first)
        .style.setProperty("background-color", "rgb(104, 0, 76)");
      document
        .getElementById(second)
        .style.setProperty("background-color", "rgb(104, 0, 76)");
      document
        .getElementById(third)
        .style.setProperty("background-color", "rgb(104, 0, 76)");
      blocking();
      setTimeout(() => {
        newgame();
      }, 1500);
    } else {
      document
        .getElementById(first)
        .style.setProperty("background-color", "rgb(0, 47, 93)");
      document
        .getElementById(second)
        .style.setProperty("background-color", "rgb(0, 47, 93)");
      document
        .getElementById(third)
        .style.setProperty("background-color", "rgb(0, 47, 93)");
      blocking();
      setTimeout(() => {
        newgame();
      }, 1500);
    }
  };

  winner = () => {
    if (count == 9 && winner1 == "draw" && winner2 == "draw") {
      setTimeout(() => {
        draw();
      }, 500);
    }
  };

  draw = () => {
    for (i = 0; i < 9; i++) document.querySelectorAll("td")[i].innerHTML = "";
    let thestr = "ITISADRAW";
    for (i = 0; i < 9; i++) {
      document.querySelectorAll("td")[i].innerHTML = thestr[i];
    }
    if (window.innerWidth < 500)
      document.querySelector("table").style.fontSize = "11vw";
    else document.querySelector("table").style.fontSize = "4vw";

    setTimeout(() => {
      newgame();
    }, 2300);
  };

  blocking = () => {
    document.querySelector("table").style.setProperty("pointer-events", "none");
  };

  newgame = () => {
    document
      .querySelector(".game-container")
      .style.setProperty("animation", "fade-out .1s linear both");
    document
      .querySelector(".container-body")
      .style.setProperty("animation", "fade .2s linear both");
    document
      .querySelector(".container-body")
      .style.setProperty("pointer-events", "auto");

    document
      .querySelector(".game-container")
      .style.setProperty("z-index", "-1");
    document
      .querySelector(".game-container")
      .style.setProperty("pointer-events", "none");

    for (i in matrix)
      document
        .getElementById(i)
        .style.setProperty("background-color", "rgb(0,0,0,0)");
    for (i in matrix) matrix[i] = false;
    for (i in matrix1) matrix1[i] = false;
    for (i in matrix2) matrix2[i] = false;
    for (i = 0; i < 9; i++) document.querySelectorAll("td")[i].innerHTML = "";
    document.querySelector("table").style.fontSize = "0";
    count = 0;
    document.querySelector("table").style.setProperty("pointer-events", "auto");
  };
};
