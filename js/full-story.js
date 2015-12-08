document.querySelector("#upload-trigger").addEventListener("click", function (event) {
    document.querySelector("#upload").click();
});

window.addEventListener("scroll", function(event) {
    var SCALE = 0.5; // transform: scale(.5)

    var video = document.querySelector("video");
    var top = video.offsetTop * SCALE;
    var bottom = (video.offsetTop + video.offsetHeight) * SCALE;
    var scrollTop = document.body.scrollTop;
    var scrollBottom = scrollTop + document.documentElement.clientHeight;

    if (top > scrollTop && bottom < scrollBottom) {
        video.play();
    } else {
        video.pause();
    }
});