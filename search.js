document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    // Corrigido o ID do contêiner de cartões
    const cardContainer = document.getElementById("card-container");
    const cards = cardContainer.querySelectorAll(".card");
    const notFoundMessage = document.getElementById("not-found-message");

    function performSearch() {
        const searchText = searchInput.value.toLowerCase();
        let foundItemCount = 0;

        cards.forEach(function(card) {
            const cardTitle = card.querySelector(".card-title").innerText.toLowerCase();
            if (cardTitle.includes(searchText)) {
                card.style.display = "block";
                foundItemCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (foundItemCount === 0) {
            notFoundMessage.style.display = "block";
        } else {
            notFoundMessage.style.display = "none";
        }
    }

    searchButton.addEventListener("click", performSearch);

    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            performSearch();
            event.preventDefault();
        }
    });
});
