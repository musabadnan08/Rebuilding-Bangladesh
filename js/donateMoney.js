document.getElementById('donate-now-button-one')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const donationAmount = getInputFieldValueById('donation-amount-input-one');
        console.log("from shared function", donationAmount);

        if (typeof donationAmount === "number") {
            const currentAmount = getTextFieldValueById('current-amount-one');
            const accountBalance = getTextFieldValueById('account-balance');

            const newAmount = currentAmount + donationAmount;
            const newAccountBalance = accountBalance - donationAmount;

            document.getElementById('current-amount-one').innerText = newAmount + ' BDT';
            document.getElementById('account-balance').innerHTML = newAccountBalance + ' BDT';

            // transactions history
            const div = document.createElement('div');
            div.classList.add('history-styles');
            const date = new Date();
            const dateString = date.toLocaleString();
            div.innerHTML =
                `<h4>${donationAmount} BDT is Donated for Flood at Noakhali, Bangladesh.</h4>
                 <p>Date : ${dateString} (Bangladesh Standard Time)</p>`
            document.getElementById('history-container').appendChild(div)
        }
        else {
            alert('failed to add money');
        }
    })