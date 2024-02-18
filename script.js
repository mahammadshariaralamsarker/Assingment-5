let totalSelectedSeat = 0;
var buttons = document.getElementsByClassName("add-btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        this.style.backgroundColor = "green";
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
        // console.log(SelectedSeatPrice);
        const SelectedSeatPriceContainer = document.querySelector('.SelectedSeatPriceContainer');
        const h4 = document.createElement("p");
        h4.innerText = SelectedSeatPrices;
        SelectedSeatPriceContainer.appendChild(h4);
        totalSelectedSeat = totalSelectedSeat + 1;
        const SelectedSeatUnitElement = document.getElementById('SelectedSeatUnit');
        SelectedSeatUnitElement.innerText = totalSelectedSeat;
        // console.log(totalSelectedSeat);
        const RemainingAvailableSeatElement = document.getElementById('RemainingAvailableSeat');
        const RemainingAvailableSeatText = RemainingAvailableSeatElement.innerText;
        // console.log(typeof RemainingAvailableSeat);
        const RemainingAvailableSeats = parseInt(RemainingAvailableSeatText);
        // console.log(RemainingAvailableSeats);
        const remainSeat = RemainingAvailableSeats - 1;
        // console.log(remainSeat);
        RemainingAvailableSeatElement.innerText = remainSeat;
        // const seats = 
        // const RemainingAvailableSeat = 40 - RemainingAvailableSeats;
        // console.log(RemainingAvailableSeat);

        // RemainingAvailableSeattext.innerText = "30";
        // console.log(RemainingAvailableSeats);
        // console.log(totalSelectedSeat);
        if (totalSelectedSeat > 4) {
            alert('You can not select more than 4 seat');
        }
        
        totalFair = totalSelectedSeat * 550;
        const totalFairContainer = document.querySelector('.totalFair');
        totalFairContainer.innerText = totalFair;
        console.log(totalFair);
    });
}