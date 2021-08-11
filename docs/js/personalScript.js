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