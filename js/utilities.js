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

function changeButtonColor(id) {
    document.getElementById("show-donation-option").classList.remove('active-route');
    document.getElementById("show-history-option").classList.remove('active-route');

    if (id === 'show-history-option') {
        document.getElementById('show-history-option').classList.add('active-route');
        document.getElementById('show-donation-option').classList.add('inactive-button');
    }
    else {
        document.getElementById('show-donation-option').classList.add('active-route');
    }
}

function showSectionById(id) {
    document.getElementById('donation-options').classList.add('display-none');
    document.getElementById('history-option').classList.add('display-none');
    document.getElementById('history-option').classList.remove('history');
    document.getElementById(id).classList.remove('display-none');

}