const validPin = 1122;
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("add money btn clicked");
    const bank = document.getElementById("add-bank").value;
    const accountNumber = document.getElementById("add-account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin-number").value);

    console.log(bank, accountNumber, amount, pin);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    console.log(availableBalance);
    if (accountNumber.length < 11) {
      alert("Please provide the valid account number");
      return;
    }

    if (pin !== validPin) {
      alert("Please Enter the valid pin number.");
      return;
    }
    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });
