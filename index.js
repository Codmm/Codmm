document.addEventListener("DOMContentLoaded", function () {
  const accountsContainer = document.getElementById("accountsContainer");
  if (!accountsContainer) {
    console.error("Accounts container not found!");
    return;
  }

  const accounts = [
    {
      id: 1,
      name: "Unique Corn",
      price: "$1045",
      image: "Unique_corn.jpg",
      mythWeapons: 20,
      legendaryWeapons: 129,
      epicWeapons: 683,
      mythCharacters: 3,
      legendaryCharacters: 14,
      epicCharacters: 320,
      logs: 2,
      activeLogs: 2,
    },
    {
      id: 2,
      name: "Lady Purple",
      price: "$200",
      image: "Lady_purple.jpg",
      mythWeapons: 3,
      legendaryWeapons: 20,
      epicWeapons: 361,
      mythCharacters: 1(None Maxed),
      legendaryCharacters: 0,
      epicCharacters: 164,
      logs: 1,
      activeLogs: 1,
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
