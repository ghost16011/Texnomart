const catalog_link = () => {
  return window.open("/assets/other pages/catalog.html");
}

const htmlacademy_link = () => {
  return window.open("https://www.htmlacademy.ru");
}

let slideIndex = 1;
showSlides(slideIndex);

let plusSlides = (n) => { showSlides(slideIndex += n); }
let currentSlide = (n) => { showSlides(slideIndex = n); }

function showSlides (n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";  
  dots[slideIndex - 1].className += " active";
}

// list of services
// script to show services
const openCity = (evt, cityName) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("section-4__container__content-blocks__tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("section-4__container__content-tab__btn-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// end of service script

// script that will popup the map in extended version of it
const popupMap = () => {
  let container = document.getElementById("popup_map").style.display = "flex";
  return container;
};

const closePopup = () => {
  let closeContainer = document.getElementById("popup_map").style.display = "none";
  return closeContainer;
}
// end of popup map script

// form popup script
const popupForm = () => {
  let formContainer = document.getElementById("form_popup").style.display = "flex";
  return formContainer;
}

const closePopupForm = () => {
  let formContainerClose = document.getElementById("form_popup").style.display = "none";
  return formContainerClose;
}

// end of form popup script

