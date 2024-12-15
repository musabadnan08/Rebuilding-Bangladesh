// For Noakhali.
document.getElementById('donate-now-button-one')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const donationAmount = getInputFieldValueById('donation-amount-input-one');
        const currentAmount = getTextFieldValueById('current-amount-one');
        const accountBalance = getTextFieldValueById('account-balance');

        if (donationAmount <= 0) {
            alert('Failed to Donate Money.');
            return;
        }
        if (donationAmount > accountBalance) {
            alert("Insufficient Balance.");
            return;
        }
        if (isNaN(donationAmount)) {
            alert('Invalid Input, Please Check Your Input and Try Again.');
            return;
        }
        else {
            const newAmount = (currentAmount + donationAmount).toFixed(2);
            const newAccountBalance = (accountBalance - donationAmount).toFixed(2);
            document.getElementById('current-amount-one').innerText = newAmount + ' BDT';
            document.getElementById('account-balance').innerHTML = newAccountBalance + ' BDT';

            // donation history
            const div = document.createElement('div');
            div.classList.add('history-styles');
            const date = new Date();
            const dateString = date.toLocaleString();
            div.innerHTML =
                `<h4>${donationAmount} BDT is Donated for Flood at Noakhali, Bangladesh.</h4>
                 <p>Date : ${dateString} (Bangladesh Standard Time)</p>`
            document.getElementById('history-container').appendChild(div)
        }
    })

// For Feni.
document.getElementById('donate-now-button-two')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const donationAmount = getInputFieldValueById('donation-amount-input-two');
        const currentAmount = getTextFieldValueById('current-amount-two');
        const accountBalance = getTextFieldValueById('account-balance');

        if (donationAmount <= 0) {
            alert('Failed to Donate Money.');
            return;
        }
        if (donationAmount > accountBalance) {
            alert("Insufficient Balance.");
            return;
        }
        if (isNaN(donationAmount)) {
            alert('Invalid Input, Please Check Your Input and Try Again.');
            return;
        }
        else {
            const newAmount = (currentAmount + donationAmount).toFixed(2);
            const newAccountBalance = (accountBalance - donationAmount).toFixed(2);

            document.getElementById('current-amount-two').innerText = newAmount + ' BDT';
            document.getElementById('account-balance').innerHTML = newAccountBalance + ' BDT';

            // donation history
            const div2 = document.createElement('div');
            div2.classList.add('history-styles');
            const date = new Date();
            const dateString = date.toLocaleString();
            div2.innerHTML =
                `<h4>${donationAmount} BDT is Donated for Flood at Feni, Bangladesh.</h4>
                 <p>Date : ${dateString} (Bangladesh Standard Time)</p>`
            document.getElementById('history-container').appendChild(div2)
        }
    })

// For Quota Movement Heroes.
document.getElementById('donate-now-button-three')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const donationAmount = getInputFieldValueById('donation-amount-input-three');
        const currentAmount = getTextFieldValueById('current-amount-three');
        const accountBalance = getTextFieldValueById('account-balance');

        if (donationAmount <= 0) {
            alert('Failed to Donate Money.');
            return;
        }
        if (donationAmount > accountBalance) {
            alert("Insufficient Balance.");
            return;
        }
        if (isNaN(donationAmount)) {
            alert('Invalid Input, Please Check Your Input and Try Again.');
            return;
        }
        else {
            const newAmount = (currentAmount + donationAmount).toFixed(2);
            const newAccountBalance = (accountBalance - donationAmount).toFixed(2);

            document.getElementById('current-amount-three').innerText = newAmount + ' BDT';
            document.getElementById('account-balance').innerHTML = newAccountBalance + ' BDT';

            // donation history
            const div3 = document.createElement('div');
            div3.classList.add('history-styles');
            const date = new Date();
            const dateString = date.toLocaleString();
            div3.innerHTML =
                `<h4>${donationAmount} BDT is Donated for Quota Movement Heroes, Bangladesh.</h4>
                 <p>Date : ${dateString} (Bangladesh Standard Time)</p>`
            document.getElementById('history-container').appendChild(div3)
        }
    })