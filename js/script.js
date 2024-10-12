const bodyElement = document.body;

document.addEventListener("click", documentActions);

function documentActions(e) {
   const targetElement = e.target;

   if (targetElement.closest(".icon-menu")) {
      bodyElement.classList.toggle("menu-open");
   }

   if (bodyElement.classList.contains("menu-open") && targetElement.closest(".menu__link")) {
      bodyElement.classList.remove("menu-open");
   }
}