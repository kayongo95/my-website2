

function toggleMenu() {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const myIcon = document.getElementById("icon"); // assuming the icon has an ID of "icon"
    const myMenu = document.getElementById("menu"); // assuming the menu has an ID of "myMenu"

    if (mediaQuery.matches) {
        if (myMenu.style.display === 'none') {
            myMenu.style.display = 'block';
        } else {
            myMenu.style.display = 'none';
        }
    }
}

toggleMenu(); // initial call to toggle menu on page load