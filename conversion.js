document.getElementById('submit').addEventListener("click", heightConverter);

function heightConverter(){
    let feet = parseInt(document.getElementById("feet").value);

    let inches = parseInt(document.getElementById("inches").value / 12);
    let cm = (feet + inches) * 30.48;
    let n = cm.toFixed(2)
    document.getElementById("result").innerHTML = n;
}