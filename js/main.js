var prevScrollPosition = window.pageYOffset;
window.onscroll = function() {
var currentScrollPosition = window.pageYOffset;
    console.log('currentScrollPosition'  + currentScrollPosition);
    console.log('prevScrollPosition'  + prevScrollPosition);
  if (prevScrollPosition > currentScrollPosition) {
    document.getElementById("navId").style.top = "0";
  } else {
    document.getElementById("navId").style.top = "-60px";
  }
    console.log('I am here');
  prevScrollPosition = currentScrollPosition;
    console.log('prevScrollPosition'  + prevScrollPosition);
}