/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navMenu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navConstructor () {
  let navList = '';
  sections.forEach(section => {
    const sectionId = section.id;
    const sectionData = section.dataset.nav;
    navList += `<li class="menu__link ${section.className}"><a class="nav__link" href="#${sectionId}">${sectionData}</a></li>`;

  })

  navMenu.innerHTML = navList;
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
function scrollTotop () {
  
}
// Set sections as active

navConstructor();