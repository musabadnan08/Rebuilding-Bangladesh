function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextFieldValueById(id) {
    const TextValue = document.getElementById(id).innerText;
    const TextValueValueNumber = parseFloat(TextValue);
    return TextValueValueNumber;
}

function showSectionById(id) {
    document.getElementById('donation-options').classList.add('display-none');
    document.getElementById('history-option').classList.add('display-none');
    document.getElementById('history-option').classList.remove('history-class');
    document.getElementById(id).classList.remove('display-none');

}