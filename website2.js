// let myMenu = document.getElementById('menu');
// let myIcon = document.getElementById('icon');


// function toggleMenu(){
//     (myMenu.matches (max-width, '768px'));
//     if(myMenu.style.display === 'none'){
//         myMenu.style.display = 'flex';
//         icon.style.transform = 'rotate(180deg)';
//     }
//     else{
//         myMenu.style.display = 'none';
//         icon.style.transform = 'rotate(0deg)';
//     }
// }

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