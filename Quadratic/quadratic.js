let a, b, c;
let outputText;
document.querySelectorAll('form');

function validate() {
    a = document.forms["input_form"]["aterm"].value;
    b = document.forms["input_form"]["bterm"].value;
    c = document.forms["input_form"]["cterm"].value;




    if (a == 0) {
        outputText = "<em>a</em> cannot equal zero!";
    } else if (isNaN(a)) {
        outputText = "<em>a</em> must be a number!";
    } else if (isNaN(b)) {
        outputText = "<em>b</em> must be a number!";
    } else if (isNaN(c)) {
        outputText = "<em>c</em> must be a number!";

    } else {
        let x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        let x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        outputText = `For the equation <strong> ${(a == 1 ? "" : a )}x<sup>2</sup> + ${(b == 1 ? "" : b )}x + ${c}</strong>,
        <strong>x</strong> could be <strong>${x2}</strong> or <strong>${x1} </strong>`;

    }
    document.getElementById("output_text").innerHTML = outputText;
}