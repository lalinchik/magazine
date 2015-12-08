document.querySelector("#upload-trigger").addEventListener("click", function (event) {
    document.querySelector("#upload").click();
});

window.addEventListener("scroll", function(event) {
    var video = document.querySelector("video");
    var top = video.offsetTop / 2;
    var bottom = (video.offsetTop + video.offsetHeight) / 2;
    var scrollTop = document.body.scrollTop;
    var scrollBottom = scrollTop + document.documentElement.clientHeight;

    if (top > scrollTop && bottom < scrollBottom) {
        video.play();
    } else {
        video.pause();
    }
});