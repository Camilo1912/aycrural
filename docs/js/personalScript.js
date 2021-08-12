/* const sectionOne = document.querySelector(".service"); */
const services = document.querySelectorAll(".service");

const options = {
    root: null,
    threshold: .25,
    rootMargin: "-150px 40%"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry.target);
        entry.target.classList.toggle("service-hover")
    });
}, options);


services.forEach(service => {
    observer.observe(service);
});
/* observer.observe(sectionOne); */




/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.getElementById("carouselExampleIndicators");

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
    elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
    document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
    }
}
