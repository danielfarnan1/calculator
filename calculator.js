window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUserInputValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  //setup a variable for the data we need to collect from the user and 
  //set it to an object so we can set the properties to the inputs we are going to collect form the user
  const values = {amount: 300000, years: 30, rate: 2.7};
  //setup variable for each user input and use get element by id which will return an object that represents the users input
  const amountUserInput = document.getElementById("loan-amount");
  //set the user input value to the value in the object list
  amountUserInput.value = values.amount;
  const yearsUserInput = document.getElementById("loan-years");
  yearsUserInput.value = values.years;
  const rateUserInput = document.getElementById("loan-rate");
  rateUserInput.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  //set variable to the user inputs we have already collected
  const currentUserInputValues = getCurrentUserInputValues();
  updateMonthly(calculateMonthlyPayment(currentUserInputValues));//????
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //create monthly rate variable and set it equal to the rate divide this by 100 so it is now the number value of the percentage
  // now dive that by 12 to give us a monthly number to use
  const monthlyRate = (values.rate / 100) / 12;
  //multiple the years by 12 to give us the years value in months and 
  //round it givve us a whole integer (covers the edge case if someone types in a decimal year )
  const n = Math.floor(values.years * 12);
  //calculate using the provide equation and covert to a string using tofixed rounded to 2 decimal places

  return (
    (values.amount * monthlyRate) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);

}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  //setup monthly payment variable to 
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
