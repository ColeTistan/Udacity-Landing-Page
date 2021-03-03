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

const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// creates menu links for navigation
const createMenuLink = (id, dataSet) => {
    const menuLink = `<a class ="menu__link" data-id="${id}">${dataSet}</a>`;
    return menuLink;
};

// adds active class to section
const addSectionActive = (section) => {
    section.classList.add('your-active-class');
};

// removes active class from section
const removeSectionActive = (section) => {
    section.classList.remove('your-active-class');
};

// Identifies which sections are visible to the user
const sectionInViewport = (event) => { 
    // local variables for viewport
    const bounding = event.getBoundingClientRect();
    let topBounding = bounding.top;
    let leftBounding = bounding.left;
    let bottomBounding = bounding.bottom;
    let rightBounding = bounding.right;

    // return visible areas of viewport
    return (
        topBounding >= 0 &&
        leftBounding >= 0 &&
        bottomBounding <= (window.innerHeight || document.documentElement.clientHeight) &&
        rightBounding <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navigation
const navConstructor = () => {
    for(section of sections) {
        const navItem = document.createElement('li');
        const sectionData = section.getAttribute('data-nav');
        const sectionId = section.getAttribute('id');
        navItem.innerHTML = createMenuLink(sectionId, sectionData);
        fragment.appendChild(navItem);
    }

    const navList = document.getElementById('navbar__list');
    navList.appendChild(fragment);
};

// Add class 'active' to section when near top of viewport
const setActiveClass = () => {
    for (section of sections){
        if (sectionInViewport(section)){
            addSectionActive(section);    
        } else {
            removeSectionActive(section);
        }
    }
};

// Scroll to anchor ID using scrollTO event
const scrollToElement = (event) => {
    if(event.target.nodeName === 'A'){
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
};



/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll', () => {
    setActiveClass();
});
const navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', (event) => {
    scrollToElement(event)
})
// Build menu 
navConstructor()

