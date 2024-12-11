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
            const p = document.createElement('p');
            p.innerText = `Added ${donationAmount} BDT. ; New Balance is ${newAmount}`;
            console.log(p)
            document.getElementById('history-container').appendChild(p)
        }
        else {
            alert('failed to add money');
        }
    })




