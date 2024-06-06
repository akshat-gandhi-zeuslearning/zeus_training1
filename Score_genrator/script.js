let homeDisplay = 0
let guestDisplay = 0;
function updateHomeDisplay(value) {
    homeDisplay += value;
    document.getElementById("homeDisplay").innerText = homeDisplay;
}

function updateGuestDisplay(value) {
    guestDisplay += value;
    document.getElementById("GuestDisplay").innerText = guestDisplay;
}
