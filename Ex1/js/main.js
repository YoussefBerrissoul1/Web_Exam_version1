
let counter = document.getElementById("counter");
let successAlert = document.getElementById("success-alert");
let cancelAlert = document.getElementById("cancel-alert");
let btnReset = document.getElementById("reset");



function showAlert(alertElement) {
    alertElement.style.display = "block"; 
    setTimeout(() => {
        alertElement.style.display = "none"; 
    }, 3000);
}


function addProduct(event) {
    let quantityInput = event.target.previousElementSibling;
    let quantity = parseInt(quantityInput.value); 
    let currentValue = parseInt(counter.innerText); 
    counter.innerText = currentValue + quantity;
    showAlert(successAlert);
}


function cancelProduct() {
    let currentValue = parseInt(counter.innerText); 
    if (currentValue > 0) {
        counter.innerText = currentValue - 1; 
        showAlert(cancelAlert);
    }
}

let resetPanier = () => {
    counter.innerText = "0"; 
};


let addButtons = document.getElementsByClassName("btn");
for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", addProduct);
}

let cancelButtons = document.getElementsByClassName("cancel");
for (let i = 0; i < cancelButtons.length; i++) {
    cancelButtons[i].addEventListener("click", cancelProduct);
}

btnReset.addEventListener("click", resetPanier);