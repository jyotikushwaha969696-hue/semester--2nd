function convertTemp() {
    let c = document.getElementById("celsius").value;

    if (c === "") {
        document.getElementById("result").innerHTML = "Please enter a value!";
        return;
    }

    let f = (c * 9/5) + 32;

    document.getElementById("result").innerHTML =
        "Temperature in Fahrenheit: " + f.toFixed(2) + " °F";
}