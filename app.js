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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const ul = document.getElementById("menu_list");
const sections = document.querySelectorAll("section");
const Fragment = document.createDocumentFragment();
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
function navbar() {
  sections.forEach((section) => {
    const listsNav = document.createElement("li");
    const linksNav = document.createElement("a");
    const id = section.getAttribute("id");
    const sectionDataNav = section.getAttribute("data-nav");
    linksNav.setAttribute("href", `#${id}`);
    // linksNav.href = `#${id}`;
    linksNav.textContent = sectionDataNav;
    linksNav.addEventListener("click", function (event) {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
    linksNav.classList = "menu__link";
    listsNav.appendChild(linksNav);
    Fragment.appendChild(listsNav);
  });
  ul.appendChild(Fragment);
}
// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    const estops = section.getBoundingClientRect().top;
    const link = document.querySelector(`a[href="#${section.id}"]`);
    console.log(link);
    if (estops > 0 && estops < 250) {
      section.classList.add("your-active-class");
      link.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      link.classList.remove("active");
    }
  });
});
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */
navbar();
// Build menu

// Scroll to section on link click

// Set sections as active
