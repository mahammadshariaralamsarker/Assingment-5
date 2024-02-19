let totalSelectedSeat = 0;
var buttons = document.getElementsByClassName("add-btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (totalSelectedSeat > 3) {

            return alert('You Cannot Select More Than 4');;
        }
        buttons[i].disabled = true;
        buttons[i].style.backgroundColor = "#1DD100";
        const ticketName = this.innerText;
        const h2 = document.createElement("h2");
        h2.innerText = ticketName;
        const SeletedSeatContainer = document.querySelector('.SeletedSeatContainer');
        SeletedSeatContainer.appendChild(h2);
        const SelectedSeatType = document.querySelector('.SelectedSeatType').innerText;

        const SeletedSeatTypeContainer = document.querySelector('.SelectedSeatTypeContainer');
        const h3 = document.createElement("p");
        h3.innerText = SelectedSeatType;
        SeletedSeatTypeContainer.appendChild(h3);

        const SelectedSeatPrices = document.querySelector('.SelectedSeatPrice').innerText;
        const SelectedSeatPriceContainer = document.querySelector('.SelectedSeatPriceContainer');
        const h4 = document.createElement("p");
        h4.innerText = SelectedSeatPrices;
        SelectedSeatPriceContainer.appendChild(h4);
        totalSelectedSeat = totalSelectedSeat + 1;
        const SelectedSeatUnitElement = document.getElementById('SelectedSeatUnit');
        SelectedSeatUnitElement.innerText = totalSelectedSeat;
        const RemainingAvailableSeatElement = document.getElementById('RemainingAvailableSeat');
        const RemainingAvailableSeatText = RemainingAvailableSeatElement.innerText;
        const RemainingAvailableSeats = parseInt(RemainingAvailableSeatText);
        const remainSeat = RemainingAvailableSeats - 1;
        RemainingAvailableSeatElement.innerText = remainSeat;
        totalFair = totalSelectedSeat * 550;

        const totalFairContainer = document.querySelector('.totalFair');
        totalFairContainer.innerText = totalFair;




    });

}
var nameInput = document.getElementById('nameInput');
var numberInput = document.getElementById('numberInput');
var emailInput = document.getElementById('emailInput');

// Find the button element
var submitButton = document.getElementById('submitButton');

// Add click event listener to the button
submitButton.addEventListener('click', function () {
    // Get the value from the input field
    var inputName = nameInput.value;
    var inputNumber = numberInput.value;
    var inputEmail = emailInput.value;

    // Perform actions with the input inputValuevalue
    if (inputName === '' || inputNumber === '' || inputEmail === '') {
        alert('Please fill all the details');
    }
    else {
        const modal = document.getElementById('modal');
    }
});
var button = document.getElementById('myButton');
button.addEventListener('click', function () {
    const couponInputText = this.innerText;
    const inputField = document.getElementById('couponInputText');
    const couponValues = inputField.value;
    const couponValuess = couponValues.trim();
    var couponValue = couponValuess.toUpperCase();
    console.log(couponValue);
    if (couponValue === "NEW 15") {
        console.log(totalFair);
        const discount = totalFair * 0.15;
        console.log(discount);
        var newH2 = document.createElement('h2');
        newH2.textContent = discount;
        var discountElement = document.getElementById('discount');
        discountElement.appendChild(newH2);
        button.classList.add('hidden');
        inputField.classList.add('hidden');
        const totalFairSpan = document.querySelector('.totalFairs');
        const value = totalFairSpan.textContent;
        const grandTotalValue = totalFair - discount;
        totalFairSpan.textContent = grandTotalValue;
        console.log(grandTotalValue);

    }
    else if (couponValue === "COUPLE 20") {
        // console.log(totalFair);
        const discount = totalFair * 0.2;
        console.log(discount);
        var newH2 = document.createElement('h2');
        newH2.textContent = discount;
        var discountElement = document.getElementById('discount');
        discountElement.appendChild(newH2);
        button.classList.add('hidden');
        inputField.classList.add('hidden');
        const totalFairSpan = document.querySelector('.totalFairs');
        const value = totalFairSpan.textContent;
        const grandTotalValue = totalFair - discount;
        totalFairSpan.textContent = grandTotalValue;
        console.log(grandTotalValue);

    }
    else {
        console.log('Your coupon is not valid');
    }


});


