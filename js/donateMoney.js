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

            const modalDiv = document.createElement('div');
            modalDiv.classList.add('modal');
            modalDiv.innerHTML = `<h2>Congratulations!</h2>
                                <img src="assets/coin.png" alt="">
                                <p>You Have Donated ${donationAmount} BDT for Flood at Noakhali, Bangladesh.</p>
                                <h2>Successfully.</h2>
                                <button id="modal-close-button">Close Confirmation</button>`
            document.getElementById('modal').appendChild(modalDiv)

            document.getElementById('modal-close-button').addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementById('modal').removeChild(modalDiv)
            })

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

            const modalDiv2 = document.createElement('div');
            modalDiv2.classList.add('modal');
            modalDiv2.innerHTML = `<h2>Congratulations!</h2>
                                <img src="assets/coin.png" alt="">
                                <p>You Have Donated ${donationAmount} BDT for Flood at Feni, Bangladesh.</p>
                                <h2>Successfully.</h2>
                                <button id="modal-close-button">Close Confirmation</button>`
            document.getElementById('modal').appendChild(modalDiv2)

            document.getElementById('modal-close-button').addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementById('modal').removeChild(modalDiv2)
            })

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

            const modalDiv3 = document.createElement('div');
            modalDiv3.classList.add('modal');
            modalDiv3.innerHTML = `<h2>Congratulations!</h2>
                                <img src="assets/coin.png" alt="">
                                <p>You Have Donated ${donationAmount} BDT for Quota Movement Heroes of Bangladesh.</p>
                                <h2>Successfully.</h2>
                                <button id="modal-close-button">Close Confirmation</button>`
            document.getElementById('modal').appendChild(modalDiv3)

            document.getElementById('modal-close-button').addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementById('modal').removeChild(modalDiv3)
            })

            // donation history
            const div3 = document.createElement('div');
            div3.classList.add('history-styles');
            const date = new Date();
            const dateString = date.toLocaleString();
            div3.innerHTML =
                `<h4>${donationAmount} BDT is Donated for Quota Movement Heroes of Bangladesh.</h4>
                 <p>Date : ${dateString} (Bangladesh Standard Time)</p>`
            document.getElementById('history-container').appendChild(div3)
        }
    })