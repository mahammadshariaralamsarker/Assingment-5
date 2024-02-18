let totalSelectedSeat = 0;
var buttons = document.getElementsByClassName("add-btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // this.style.backgroundColor = "red";
        // this.classlist.add("red");
        // add color to button by fuction
        // buttons[i].classList.add("green");

        // Change the background color of the button
        buttons[i].style.backgroundColor = "#1DD100"; // Change this to whatever color you want

        // Disable the button
        buttons[i].disabled = true;
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
        
        if (totalSelectedSeat > 4) {
            
             return alert('You can not select more than 4 seat');
            
        }
        totalFair = totalSelectedSeat * 550;
        const totalFairContainer = document.querySelector('.totalFair');
        totalFairContainer.innerText = totalFair;
        console.log(totalFair);
        

    });
}