
function hideMessage() {
    document.getElementById("donate").remove();
}

function alertMessage() {
    if (document.getElementById("Any-Pet").value == 'dog') {
        alert("You are looking for a: Dog");
    } else {
        alert("You are looking for a: Cat");
    }
}

var count1 = 3;

var countElement = document.querySelector(".petting");

function add1() {
    count1++;
    countElement.innerText = count1 + "petting(s)";
}

var count2 = 5;

var count2Element = document.querySelector(".petting_2");

function add2() {
    count2++;
    count2Element.innerText = count2 + "petting(s)";
}

var count3 = 8;

var count3Element = document.querySelector(".petting_3");

function add3() {
    count3++;
    count3Element.innerText = count3 + "petting(s)";
}