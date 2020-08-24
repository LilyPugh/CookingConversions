
let resultVal = "";


function calcButPress() {
    let Origunit = document.getElementById('Origunit');
    let OrigunitSel = Origunit.options[Origunit.selectedIndex].text;
    
    let Requnit = document.getElementById('Requnit');
    let RequnitSel = Requnit.options[Requnit.selectedIndex].text;
    
    let origMeasure = document.getElementById('OrigMeasure').value;

    if (OrigunitSel == 'Cups' && RequnitSel == 'Grams'){
        resultVal = origMeasure * 128;
    } else if (OrigunitSel == 'Cups' && RequnitSel == 'Ounces') {
        resultVal = origMeasure * 4.5;
    } else if (OrigunitSel == 'Grams' && RequnitSel == 'Cups') {
        resultVal = origMeasure / 128;
    } else if (OrigunitSel == 'Grams' && RequnitSel == 'Ounces') {
        resultVal = origMeasure / 28.35;
    } else if (OrigunitSel == 'Ounces' && RequnitSel == 'Cups') {
        resultVal = origMeasure / 4.5;
    } else if (OrigunitSel == 'Ounces' && RequnitSel == 'Grams') {
        resultVal = origMeasure * 28.35;
    } else {
        resultVal = origMeasure;
    }
    document.getElementById("result").value = resultVal;
}

