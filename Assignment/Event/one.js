
var button = document.getElementById("mouseOver");
button.addEventListener("mouseover", function() {
  button.style.backgroundColor = "green";
});

var button1 = document.getElementById("mouseOut");
button1.addEventListener("mouseout", function() {
  button1.style.backgroundColor = "aqua";
});

var button2 = document.getElementById("onClick");
button2.addEventListener("click", function() {
  button2.style.backgroundColor = "blue";
});

var button3 = document.getElementById("onDblclick");
button3.addEventListener("dblclick", function() {
  button3.style.backgroundColor = "yellow";
});

var button4 = document.getElementById("onFocus");
    button4.addEventListener("focus", function changeColorOnFocus(){
        button4.style.backgroundColor = "brown";
        button4.innerHTML = "On Focus";
});

var button5 = document.getElementById("onBlur");
    button5.addEventListener("click", function (){
        button5.innerHTML = this.innerHTML.toUpperCase();
    });