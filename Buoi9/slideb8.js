var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}




window.onscroll = function() {scrollFunction()};
1
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navb1").style.padding = "10px 10px";
  } else {
    document.getElementById("navb1").style.padding = "30px 10px";
  }
}

// -----------SIDEBAR---------
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }