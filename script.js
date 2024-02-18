let totalSelectedSeat = 0;
var buttons = document.getElementsByClassName("add-btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        this.style.backgroundColor = "green";
        const ticketName = this.innerText;

        const h2 = document.createElement("h2");
        h2.innerText = ticketName;
        document.querySelector('.SeletedSeatContainer')
        SeletedSeatContainer.appendChild(h2);

        totalSelectedSeat = totalSelectedSeat + 1;
        // console.log(typeof totalSelectedSeat);
    });
}