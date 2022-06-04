// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

function copyeditedText(element){
    var copytext = document.getElementById(element)
    copytext.select();
    copytext.setSelectionRange(0, 99999);
    if (copytext.value == ""){
        copytext.value == "my-app"
    }
    var copiedtext = 'expo init ' + copytext.value
    navigator.clipboard.writeText(copiedtext);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copytext.value;
}

function copyText(element){
    var copytext = document.getElementById(element)
    copytext.select();
    copytext.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copytext.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copytext.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
  
// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}
  
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function makeattackcome(element){
    var firstattack = document.getElementById('1statk');
    var secondattack = document.getElementById('2ndatk');
    var thirdattack = document.getElementById('3rdatk');
    thirdattack.style.display = 'none';
    secondattack.style.display ='none';
    firstattack.style.display = 'none';
}

function make3rdattackcome(element){
    var firstattack = document.getElementById('1statk');
    var secondattack = document.getElementById('2ndatk');
    var thirdattack = document.getElementById('3rdatk');
    var preface = document.getElementById('skills-preface');
    thirdattack.style.display = 'block';
    secondattack.style.display ='none';
    firstattack.style.display = 'none';
    preface.style.display ='none';
}

function make2ndattackcome(element){
    var firstattack = document.getElementById('1statk');
    var secondattack = document.getElementById('2ndatk');
    var thirdattack = document.getElementById('3rdatk');
    var preface = document.getElementById('skills-preface');
    thirdattack.style.display = 'none';
    secondattack.style.display ='block';
    firstattack.style.display = 'none';
    preface.style.display ='none';
}

function make1stattackcome(element){
    var firstattack = document.getElementById('1statk');
    var secondattack = document.getElementById('2ndatk');
    var thirdattack = document.getElementById('3rdatk');
    var preface = document.getElementById('skills-preface');
    thirdattack.style.display = 'none';
    secondattack.style.display ='none';
    firstattack.style.display = 'block';
    preface.style.display ='none';
}

$(document).ready(function(){
   
    $('#navbar').load("navbar.html");
    $('#footer').load("footer.html");
 });