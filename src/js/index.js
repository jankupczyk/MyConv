totop = document.getElementById("BTN-to-top")
window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        totop.style.display = "block";
    } else {
        totop.style.display = "none";
    }
    var winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winscroll / height) * 100;
    document.getElementById('progress-bar').style.width = `${scrolled}%`;
    document.getElementById('progress-bar').title = `Visited ${(scrolled).toFixed(1)}% of the page`;
    document.getElementById('progress-bar-container').title = `Left ${(100 - scrolled).toFixed(1)}% of the site to visit`
}


function TOTOP() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
