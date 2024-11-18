function sendAccountDetails(event) {
    event.preventDefault();

    // Collect form data
    const form = document.getElementById("add-account-form");
    const formData = new FormData(form);

    const templateParams = {
        name: formData.get("seller-name"),
        discord: formData.get("discord-id"),
        account: formData.get("account-name"),
        price: formData.get("initial-price"),
        linkedLogs: formData.get("linked-logs"),
        availableLogs: formData.get("available-logs"),
        legendaryCount: formData.get("legendary-count"),
        mythicCount: formData.get("mythic-count"),
        epicCount: formData.get("epic-count"),
        cpAmount: formData.get("cp-amount"),
    };

    emailjs
        .send("Thisiscodmm", "template_bbns4g1", templateParams)
        .then(() => {
            document.getElementById("confirmation-message").style.display = "block";
            form.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Something went wrong. Please try again later.");
        });
}