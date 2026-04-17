//Question 4 - Show a summary of the shopping cart with the total cost.
function SummaryOrderdisplay(){
    let cart = JSON.parse(localStorage.getItem('gf_cart')) || [];
    let Summary = document.getElementById('checkoutItems');
    let totalDisplay = document.getElementById('checkoutTotal');
    let total = 0;

    Summary.innerHTML = "";

    if(cart.length === 0){
        Summary.innerHTML = "<br><br><p style='color: red; text-align: center; font-size:25px;'>Your cart is empty.</p><br>";
    } else {
        cart.forEach(item => {
            let price = parseFloat(item.price);
            let tax = price * 0.15;
            let discount = price * 0.10;
            let subtotal = (price + tax) - discount;

            Summary.innerHTML += `
                <div class="Summary-row">
                    <strong>${item.name}</strong> - $${subtotal.toFixed(2)}
                </div>
            `;

            total += subtotal;
        });
    }

    totalDisplay.innerHTML = '$' + total.toFixed(2);

    // Update receipt items
    document.getElementById("rCheckoutItems").innerHTML = Summary.innerHTML;
    document.getElementById("rAmount").textContent = total.toFixed(2);
}

//Question 4 - Confirm button (confirms the checkout)
function confirmOrder() {
    let name = document.getElementById('fullName').value;
    let amountPaid = parseFloat(document.getElementById('amountPaid').value);
    let finalTotal = parseFloat(localStorage.getItem('gf_total'));

    if (amountPaid === finalTotal){
        
        window.location.href = '../Codes/invoice.html';

        // SHOW RECEIPT
        document.querySelector(".receipt-section").style.visibility = "visible";

        // BASIC INFO
        document.getElementById("rFullname").textContent = name;
        document.getElementById("rAddress").textContent =
            document.getElementById("address").value;

        document.getElementById("rTRN").textContent =
            document.getElementById("Trn").value;

        document.getElementById("rDate").textContent =
            new Date().toLocaleDateString();

        document.getElementById("rInvoiceId").textContent =
            Math.floor(Math.random() * 1000000);

        // GET CART DATA
        let cart = JSON.parse(localStorage.getItem('gf_cart')) || [];

        let receiptItems = document.getElementById("rCheckoutItems");
        receiptItems.innerHTML = "";

        cart.forEach(item => {
            let price = parseFloat(item.price);
            let tax = price * 0.15;
            let discount = price * 0.10;
            let subtotal = (price + tax) - discount;

            receiptItems.innerHTML += `
                <p>${item.name} - $${subtotal.toFixed(2)}</p>
            `;
        });

        // SET TOTAL
        document.getElementById("rAmount").textContent = finalTotal.toFixed(2);

        alert("Thank you, " + name + "! Your order has been confirmed.");

    } else {
        alert("The amount entered does not match the total.");
        window.location.href = '../Codes/product.html';

    }
}

// Question 4 - Cancel button (go back to the cart)

function clearCart(){
    localStorage.removeItem('gf_cart');
    location.reload();
}

function processCheckout(){
    if (document.getElementById('checkoutTotal').innerText === '$0.00' 
        || document.getElementById('checkoutTotal').innerText === '$0' 
        || document.getElementById('checkoutTotal').innerText === null)
    {
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }
    alert("Proceeding to payment...");
    window.onload = SummaryOrderdisplay;
}

//Question 5 - Append this invoice to the user’s array of invoices (array of objects). Also store the invoice to localStorage with the key called AllInvoices (as an array of objects) to access later.
//Store Invoice in localStorage with the key called AllInvoices (as an array of objects) to access later. 
function storeInvoice(){
    let invoice = {
        trn: document.getElementById("Trn").value,
        fullName: document.getElementById("fullName").value,
        address: document.getElementById("address").value,
        date: new Date().toLocaleDateString(),
        invoiceId: Math.floor(Math.random() * 1000000),
        items: JSON.parse(localStorage.getItem('gf_cart')) || [],
        totalAmount: parseFloat(document.getElementById('checkoutTotal').innerText.replace('$',''))
    };

    //display a message indicating that the invoice has been “sent” to the user’s email. 
    alert("Invoice has been sent to your email!");

    // Store individual invoice
    localStorage.setItem('latest_invoice', JSON.stringify(invoice));

    // Store in AllInvoices array
    let allInvoices = JSON.parse(localStorage.getItem('AllInvoices')) || [];
    allInvoices.push(invoice);
    localStorage.setItem('AllInvoices', JSON.stringify(allInvoices));
}

window.onload = function(){
    SummaryOrderdisplay();

    let total = localStorage.getItem('gf_total');

    if(total){
        document.getElementById('amountPaid').value = parseFloat(total).toFixed(2);
    }
}

//Cancel order function
function cancelOrder(){
    if (confirm("Are you sure you want to cancel the order?")){
        localStorage.removeItem('gf_cart');
        localStorage.removeItem('gf_total');
        window.location.href = '/Codes/product.html';
    }
}

//Finish order function
function finishOrder(){
    //Clear cart and total and redirect to home page
    localStorage.removeItem('gf_cart');
    localStorage.removeItem('gf_total');
    window.location.href = '/Codes/product.html';
}
