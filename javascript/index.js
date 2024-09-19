
let showMenu = false;
let isXIcon = false;

function toggleMenu() {
    showMenu = !showMenu;
    isXIcon = !isXIcon;

    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (showMenu) {
        menu.classList.add('show');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        menu.classList.remove('show');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

function closeMenu() {
    showMenu = false;
    isXIcon = false;

    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    menu.classList.remove('show');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}


// Products section
// Select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Define the filtercards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Iterate over each filterable cards
    filterableCards.forEach(card => {
        // Add "hide" class to hide the card initially
        card.classList.add("hide")
        // Check if the card matches the slected filter or "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide")
        }
    });
};

// Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards))
