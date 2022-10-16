const totalMoneyElement = document.querySelector("#total-money");
const tipPercentElement = document.querySelector("#tip-percent");
const submitButtonElement = document.querySelector("#submit-button");
const remainingMoneyElement = document.querySelector("#remaining-money");
const tipAmountElement = document.querySelector("#tip-amount");
const errorMessageElement = document.querySelector("#error-message");

const tipCalculator = (totalMoney, tipPercent) => {
    if (totalMoney < 0 || tipPercent < 0) {
        // alert("Please enter a positive number");
        errorMessageElement.textContent = "Please enter a positive number";
    } 
    else if (totalMoney == 0 && tipPercent == 0) {
        // alert("Please enter a number greater than 0");
        errorMessageElement.textContent = "Please enter a number greater than 0";
    
    }
    else if (tipPercent > 100) {
        // alert("Please enter a tip percentage less than 100 or equal to 100");
        errorMessageElement.textContent = "Please enter a tip percentage less than 100 or equal to 100";
    }
    
    else {
        const tipAmount = totalMoney * (tipPercent / 100);
        const remainingMoney = parseFloat(totalMoney) + parseFloat(tipAmount);
        tipAmountElement.textContent = tipAmount.toFixed(2) ;
        remainingMoneyElement.textContent = remainingMoney.toFixed(2) ;
        errorMessageElement.textContent = "";
    }

}


submitButtonElement.addEventListener("click", () => {
    const totalMoney = totalMoneyElement.value;
    const tipPercent = tipPercentElement.value;
    tipCalculator(totalMoney, tipPercent);
});
