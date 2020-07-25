function submit() {
    let age = $(".age-input")[0].value;
    let weight = $(".weight-input")[0].value;
    let height = $(".height-input")[0].value;
    let gender = $("input[name=gender]:checked")[0].value;
    let bmi = calculateBMI(height, weight);
    let status = bmiStatus(bmi);
    let htmlString = `
        <div>
            <div> BMI:${bmi}</div>
            <div> STATUS:${status}</div>
        </div>`;
    $(".output").append(htmlString)
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