document.addEventListener("DOMContentLoaded", function () {
  const accountsContainer = document.getElementById("accountsContainer");
  if (!accountsContainer) {
    console.error("Accounts container not found!");
    return;
  }

  const accounts = [
    {
      id: 1,
      name: "Account 1",
      price: "$150",
      image: "account1.jpg",
      legendaryWeapons: 5,
      epicWeapons: 10,
      mythWeapons: 2,
      legendaryCharacters: 3,
      epicCharacters: 7,
      mythCharacters: 1,
      logs: 50,
      activeLogs: 20,
    },
    {
      id: 2,
      name: "Account 2",
      price: "$200",
      image: "images/account2.jpg",
      legendaryWeapons: 6,
      epicWeapons: 12,
      mythWeapons: 1,
      legendaryCharacters: 2,
      epicCharacters: 9,
      mythCharacters: 0,
      logs: 60,
      activeLogs: 30,
    },
    // Add more accounts...
  ];

  function displayAccounts() {
   accountsContainer.innerHTML = "";
  // Clear current content
    accounts.forEach((account) => {
      const accountCard = `
        <div class="account-card">
          <img src="${account.image}" alt="${account.name}">
          <h3>${account.name}</h3>
          <p class="price">Price: ${account.price}</p>
          <div class="account-details">
            <div>
              <p><strong>Legendary Weapons:</strong> ${account.legendaryWeapons}</p>
              <p><strong>Epic Weapons:</strong> ${account.epicWeapons}</p>
              <p><strong>Myth Weapons:</strong> ${account.mythWeapons}</p>
            </div>
            <div>
              <p><strong>Legendary Characters:</strong> ${account.legendaryCharacters}</p>
              <p><strong>Epic Characters:</strong> ${account.epicCharacters}</p>
              <p><strong>Myth Characters:</strong> ${account.mythCharacters}</p>
            </div>
          </div>
          <p><strong>Total Logs:</strong> ${account.logs}</p>
          <p><strong>Active Logs:</strong> ${account.activeLogs}</p>
          <a href="order.html?account=${encodeURIComponent(
            account.name
          )}" class="order-btn">Order Now</a>
        </div>
      `;
      accountsContainer.innerHTML += accountCard;
    });
  }

  displayAccounts();
});