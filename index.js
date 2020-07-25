function submit() {
    let age = $(".age-input")[0].value;
    if (age.length <= 0 || age < 0) {
        alert("Invalid age");
        return;
    }

    let genderEl = $("input[name=gender]:checked")[0];
    if (!genderEl) {
        alert("Select gender");
        return;
    }

    let height = $(".height-input")[0].value;
    if (height.length <= 0 || height < 0) {
        alert("Invalid height");
        return;
    }

    let weight = $(".weight-input")[0].value;
    if (weight.length <= 0 || weight < 0) {
        alert("Invalid weight");
        return;
    }

    let bmi = calculateBMI(height, weight);
    try {
        let status = bmiStatus(bmi);
        let htmlString = `
            <div class="wrapper">
                <div class="bmi"> BMI: ${bmi}</div>
                <div class="status"> STATUS: ${status}</div>
            </div>`;
        $(".output")[0].innerHTML = "";
        $(".output").append(htmlString);
    } catch (error) {
        alert("Invalid value");
        return;
    }

}
function calculateBMI(height, weight) {
    let bmi = (10000 * weight) / (height * height)
    return bmi;
}
function bmiStatus(bmi) {
    let status;
    switch (true) {
        case (bmi < 18.5) && (bmi > 0):
            status = "Underweight";
            break;
        case (bmi < 25) && (bmi >= 18.5):
            status = "Normal-weight";
            break;
        case (bmi < 30) && (bmi >= 25):
            status = "Over-weight";
            break;
        case (bmi >= 30):
            status = "Obese";
            break;
        default:
            throw new Error("Invalid value");
    }
    return status;
}