import ("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js")

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var t;
function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-400);
        t = setTimeout('up()',20);
    } else clearTimeout(t);
    return false;
}

let anchors = document.querySelectorAll('.low_scroll');
console.log(anchors);
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href')
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

window.addEventListener("scroll",function(){
    let scrollTop = document.documentElement.scrollTop; // скролл в данное мгновение
    if(scrollTop>100){
        document.querySelector(".back_up").style = "display: block;";
    }
    else
        document.querySelector(".back_up").style = "display: none;";
})