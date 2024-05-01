document.addEventListener("DOMContentLoaded", function() {
    const infiList = document.getElementById("infi-list");
    const itemsPerPage = 10; // Number of items to add on each scroll
    const totalItems = 50; // Total number of items to show
    let currentPage = 1; // Current page number

    // Function to generate list items
    function generateItems(startIndex, endIndex) {
        for (let i = startIndex; i <= endIndex; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = "Item " + i;
            infiList.appendChild(listItem);
        }
    }

    // Function to check if scroll is at the bottom
    function isScrollAtBottom() {
        return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    }

    // Initial population of list
    generateItems(1, itemsPerPage);

    // Event listener for scroll
    window.addEventListener("scroll", function() {
        if (isScrollAtBottom() && infiList.children.length < totalItems) {
            const nextPageStart = currentPage * itemsPerPage + 1;
            const nextPageEnd = Math.min((currentPage + 1) * itemsPerPage, totalItems);
            generateItems(nextPageStart, nextPageEnd);
            currentPage++;
        }
    });
});