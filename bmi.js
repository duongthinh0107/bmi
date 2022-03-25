function calculator (h,w){
    let height = document.getElementById('input1').value;
    let weight = document.getElementById('input2').value;
    let bmi = weight / (height*2)
    if (bmi < 18)
        alert("Underweight")
    else if (bmi < 25.0)
        alert("Normal")
    else if (bmi < 30.0)
        alert("Overweight")
    else
        alert("Obese")
}
