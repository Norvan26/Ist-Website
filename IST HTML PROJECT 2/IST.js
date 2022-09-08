/*const DarkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

while(DarkMode() == true){
  alert('yo');
  document.getElementById("p2").style.backgroundColor = "#121212";
  document.getElementById("p1").style.color = "white";
  document.getElementById("p3").style.color = "white";
  document.getElementById("p4").style.color = "white";
  document.getElementById("p5").style.color = "white";
  document.getElementById("p6").style.color = "white";
  document.getElementById("p7").style.color = "white";
  document.getElementById("p8").style.backgroundColor = "white";
  document.getElementById("p9").style.backgroundColor = "white";
  document.getElementById("p10").style.backgroundColor = "white";
  document.getElementById("p11").style.color = "white";
  document.getElementById("p12").style.color = "white";

}
*/

//==========================================
{
  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");

      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginRight= "0";
     
    } else {
      nav.classList.remove("nav--hidden");

      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginRight= "0";
    }

    lastScrollY = window.scrollY;
  });
}


//------------------------------------------------------

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
}
function currentSlide(n) {
   showSlides(slideIndex = n);
}
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
}


//---------------------------------------------

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}



//----------------------------------------------------

function showFieldset(fieldsetToShow, fieldsetToHide) {
  fieldsetToShow = document.getElementById(fieldsetToShow);
  fieldsetToHide = document.getElementById(fieldsetToHide);
  var userInput = fieldsetToShow.querySelector("input");
  fieldsetToShow.classList.add("show_fieldset");
  fieldsetToHide.classList.remove("show_fieldset");

  setTimeout(function () {
    userInput.focus();
  }, 500);
}


function submitForm(submitButton) {
  var fieldSet = submitButton.closest("fieldset");
  var email = fieldSet.querySelector("#email");
  if (email && validateEmail(email)) {
    document.getElementById("login").submit();
  }
}

function validateEmail(email) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.trim() === "") {
    alert("Please provide an email address.");
    email.focus();
    return false;
  } else if (email.value.match(validRegex)) {
    return true;
  } else {
    alert("Email address is invalid.");
    email.focus();
    return false;
  }
}


//----------------------------------------------------



var videoControler = 0;
window.addEventListener("scroll", revealElements);

function revealElements() {

  var windowHeight = window.innerHeight; //how big is the page
    var elementVisible = 100; // always want to show the elements when they are 80 from the top page

  //This is the first set of elements, two images of the phone.
  var img1to2SetReveal = document.getElementById("img1");
    var elementTop = img1to2SetReveal.getBoundingClientRect().top; // how far from the top of the page is it
    //console.log("elementTop " + elementTop + " windowHeight" + windowHeight + " elementVisible" + elementVisible + " position " +(windowHeight- elementVisible));

    if (elementTop < windowHeight - elementVisible) {
      document.getElementById("img1").classList.add("on");
      document.getElementById("img2").classList.add("on");
  } else {
      document.getElementById("img1").classList.remove("on");
      document.getElementById("img2").classList.remove("on");
  }

  //This is the second set of elements, an images of a flower.
  var img1to2SetReveal = document.getElementById("flower");
    var elementTop = img1to2SetReveal.getBoundingClientRect().top; // how far from the top of the page is it
    //console.log("elementTop " + elementTop + " windowHeight" + windowHeight + " elementVisible" + elementVisible + " position " +(windowHeight- elementVisible));

    if (elementTop < windowHeight - elementVisible) {
      document.getElementById("flower").classList.add("on");
  } else {
      document.getElementById("flower").classList.remove("on");
  }

  //This is the third set of elements, two images of the phone.

  var img3to4SetReveal = document.getElementById("img3");
    var elementTop = img3to4SetReveal.getBoundingClientRect().top; // how far from the top of the page is it
    //console.log("elementTop " + elementTop + " windowHeight" + windowHeight + " elementVisible" + elementVisible + " position " +(windowHeight- elementVisible));

    if (elementTop < windowHeight - elementVisible) {
      document.getElementById("img3").classList.add("on");
      document.getElementById("img4").classList.add("on");
  } else {
      document.getElementById("img3").classList.remove("on");
      document.getElementById("img4").classList.remove("on");
  }

  //This is the last set of elements, three images of the colours of the phone.

  var img3to4SetReveal = document.getElementById("img6");
    var elementTop = img3to4SetReveal.getBoundingClientRect().top; // how far from the top of the page is it
    //console.log("elementTop " + elementTop + " windowHeight" + windowHeight + " elementVisible" + elementVisible + " position " +(windowHeight- elementVisible));

    if (elementTop < windowHeight - elementVisible) {
      document.getElementById("img6").classList.add("on");
      document.getElementById("img7").classList.add("on");
      document.getElementById("img8").classList.add("on");
  } else {
      document.getElementById("img6").classList.remove("on");
      document.getElementById("img7").classList.remove("on");
       document.getElementById("img8").classList.remove("on");
  }


  //This is the video set of elements, two images of the phone.
  var img3to4SetReveal = document.getElementById("video1");
    var elementTop = img3to4SetReveal.getBoundingClientRect().top; // how far from the top of the page is it
  var whereami = windowHeight - elementVisible

  //console.log(" windowHeight:" + windowHeight + " elementTop " + elementTop + "elementTop+10: " + (elementTop+10) + " whereami:" +whereami);
  if (elementTop > whereami) {videoControler=0}
  if (videoControler==0) {
    if (elementTop < windowHeight - elementVisible) {
      document.getElementById("video1").play();
      videoControler=1;
    } else {
      document.getElementById("video1").pause();
    }
  }



}


//---------------------

document.querySelector('#scrollable').addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
   e.preventDefault();
   e.stopPropagation();

   return false;
}

