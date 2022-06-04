var input = document.getElementById('searchinput');
input.addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        event.preventDefault();
        document.getElementById("searchbtn").click();
    }
})

function searchbar(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('websiteUL');
    li = ul.getElementsByTagName('li');
    j= 0;
    for (i = 0; i < li.length ; i++) {
        li[i].classList.remove('searchbarvalues')
        a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 && filter.length > 0) {
                li[i].style.display = "";
                j += 1;
                if (j > 2){break;}
            } else {
                li[i].style.display = "none";
            }
    }
}

function searchPages(){
    var searchvalues, count;
    count = 0;
    searchvalues = document.getElementById('websiteUL');
    li = searchvalues.getElementsByTagName('li');
    for (i = 0; i < li.length ; i++) {
        if (li[i].style.display != 'none'){
            location.replace(li[i].getElementsByTagName("a")[0].href);
            count+= 1;
            console.log("found")
            break;
        }
        else{
            count += 1
        }
    }
    console.log(count)
    console.log(li.length)
    console.log('no page found, redirecting')
    if (count == li.length || count == 0){
        location.replace('index.html#pages')
    }
}