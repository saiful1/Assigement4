


//Get Input Value


function finalTicketAmount(id) {

    const finalTicket = document.getElementById(id);

    const finalTicketNumber = parseInt(finalTicket.value);

    return finalTicketNumber;

}


//Get Inner Text

function finalTicketPrice(id) {

    const finalTicketPriceAmount = document.getElementById(id).innerText;

    return finalTicketPriceAmount;

}


//ticketType  first class or economy

function ticketInputValue(ticketType) {

    const ticketInput = document.getElementById(ticketType + '-ticket');

    const ticketNumber = parseInt(ticketInput.value);


    return ticketNumber;

}



// isIncrease parameter control true or false value

function ticketNumberCalculation(ticketType, isIncrease) {

    const ticketNumber = ticketInputValue(ticketType);

    let ticketCounter = ticketNumber;

    if (isIncrease === true) {

        ticketCounter = ticketNumber + 1;

    } else if (isIncrease === false && ticketCounter > 0) {

        ticketCounter = ticketNumber - 1;
    
    }




    document.getElementById(ticketType + '-ticket').value = ticketCounter;

    let subtotal = 0;

    if (ticketType == 'firstClass') {
        subtotal = ticketCounter * 150;
    } else if (ticketType == 'economy') {
        subtotal = ticketCounter * 100;
    }

    document.getElementById('subtotal').innerText = subtotal;
    priceCalculator();
    emptyInput();


}








// Subtotal Price , 10% Vat and Total Price


function priceCalculator() {

    const firstClassTicketPrice = ticketInputValue('firstClass');

    const economyTicketPrice = ticketInputValue('economy');


    const subtotal = firstClassTicketPrice * 150 + economyTicketPrice * 100;

    document.getElementById('subtotal').innerText = subtotal;


    const taxPrice = subtotal * .1;
    document.getElementById('tax').innerText = Math.round(taxPrice);

    const totalPrice = subtotal + taxPrice;
    document.getElementById('total').innerText = Math.round(totalPrice)

}






// You can't Click Book Now Button With 0 Ticket


function emptyInput() {

    const firstClassTicketPrice = ticketInputValue('firstClass');

    const economyTicketPrice = ticketInputValue('economy');

    if (firstClassTicketPrice == 0 && economyTicketPrice == 0) {

        document.getElementById('submit-button').setAttribute('disabled', true)
    }
    
    else if (firstClassTicketPrice > 0 || economyTicketPrice > 0) {



        document.getElementById('submit-button').removeAttribute('disabled', true)

    
    }
}






// This function help you to go to (book ticket) page from success page


function requestSent() {


    const requestSent = document.getElementById('request');



    requestSent.style.display = 'block';


    const ticketForm = document.getElementById('ticket-form');


    ticketForm.style.display = 'none';

    amountOfTicket();

}














// This Function Will Active After Book  Ticket




function amountOfTicket() {

    const firstClassTicketNumber = finalTicketAmount('firstClass-ticket');
    
    document.getElementById('firstClassTicketAmount').value = firstClassTicketNumber;
    const finalFirstClassTicketPrice = firstClassTicketNumber * 150;
    document.getElementById('firstClassTicketPrice').value = '$ ' + finalFirstClassTicketPrice;

    const economyTicketNumber = finalTicketAmount('economy-ticket');
    document.getElementById('economyTicketAmount').value = economyTicketNumber;
    const finalEconomyTicketPrice = economyTicketNumber * 100;
    document.getElementById('economyTicketPrice').value = '$ ' + finalEconomyTicketPrice;

    const finalSubtotal = finalTicketPrice('subtotal');
    document.getElementById('finalSubtotalPrice').value = '$ ' + finalSubtotal;

    const finalVat = finalTicketPrice('tax');
    document.getElementById('finalVatPrice').value = '$ ' + finalVat;

    const finalTotal = finalTicketPrice('total');
    document.getElementById('finalTotalPrice').value = '$ ' + finalTotal;
}