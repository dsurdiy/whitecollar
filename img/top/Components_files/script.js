// ------------- smooth UP scroll -------------
// document.addEventListener("DOMContentLoaded", function () {
//    document.addEventListener("click", function (e) {
//       const targetElement = e.target

//       if (targetElement.closest(".footer__up")) {
//          window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//          })
//          e.preventDefault()
//       }
//    })
// })
// ------------- END OF smooth UP scroll -------------

// ------------- smooth scroll-to-section -------------
// window.addEventListener("load", windowLoad)

// function windowLoad() {
//    document.addEventListener("click", documentActions)
// }

// function documentActions(e) {
//    const targetElement = e.target
//    // scroll
//    if (targetElement.hasAttribute("data-goto")) {
//       const gotoElement = document.querySelector(`${targetElement.dataset.goto}`)
//       const headerInner = document.querySelector(".header__inner")
//       const headerInnerHeight = headerInner ? headerInner.offsetHeight : 0

//       if (gotoElement) {
//          window.scrollTo({
//             top: gotoElement.offsetTop - headerInnerHeight,
//             behavior: "smooth",
//          })
//       }
//       e.preventDefault()
//    }
// }
// ------------- END OF smooth scroll-to-section -------------

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