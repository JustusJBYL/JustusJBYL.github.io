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
  
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

$(document).ready(function(){
   
    $('#navbar').load("navbar.html");
    $('#footer').load("footer.html");
 });

 $('.carousel').on('touchstart', function(event){
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if( Math.floor(xClick - xMove) > sensitivityInPx ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
            $(this).carousel('prev');
        }
    });
    $(this).on('touchend', function(){
        $(this).off('touchmove');
    });
});