const seeMoreBtns = document.querySelectorAll("seeMoreBtns");
const resumeCards = document.querySelectorAll("resumeCards");
const header = document.getElementById('header')
const goTopIcon = document.getElementById('goTopIcon')
const galleryItems = document.querySelectorAll(".masonry-item2");
const galleryItems3 = document.querySelectorAll(".masonry-item3");
const servicesItems = document.querySelectorAll(".fourthSectionColInsideItem");
const seeMoreBtn = document.getElementById("seeMoreBtn");
const seeMoreBtn3 = document.getElementById("seeMoreBtn3");
const seeMoreBtn4 = document.getElementById("seeMoreBtn4");
const seeMoreBtn5 = document.getElementById("seeMoreBtn5");
const testimonialContainer = document.getElementById("galleryContainer2");
const resumeCard = document.getElementById("resumeCard");
const servicesContainer = document.getElementById("servicesContainer");
const galleryContainer = document.getElementById("customize-thumbnails-gallery");
const loading = document.getElementById('loading')
function loadingFnc() {
    if (loading) {
        loading.style.display = 'flex';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 2000);
    }
}
// loadingFnc()

function fixedHeader() {
    window.addEventListener('scroll', function () {
        if (window.scrollY >= 560) {
            header.classList.add('fixedHeader');
        } else {
            header.classList.remove('fixedHeader');
        }
    });
}

function goToTop() {
    goTopIcon.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
}





function galleryItem() {

    if (galleryItems.length > 3) {
        seeMoreBtn.style.display = "flex";
        seeMoreBtn.style.justifyContent = "center";

        galleryItems.forEach((item, index) => {
            if (index >= 3) {
                galleryContainer.style.height = "290px"
                galleryContainer.style.transition = 'height 0.5s ease-in-out'

            }
        });
    } else {
        seeMoreBtn.style.display = 'none'
    }

    seeMoreBtn.addEventListener("click", function (e) {
        e.preventDefault()
        galleryContainer.classList.toggle("expanded");

        if (galleryContainer.classList.contains("expanded")) {
            let fullHeight = galleryContainer.scrollHeight + "px";

            galleryContainer.style.height = fullHeight;
            seeMoreBtn.firstElementChild.textContent = "Azini göster";
        } else {
            galleryContainer.style.height = "290px"

            seeMoreBtn.firstElementChild.textContent = "Tümünü göster";
        }

    });
}


function testimonial() {

    if (galleryItems3.length > 2) {
        seeMoreBtn3.style.display = "flex";
        seeMoreBtn3.style.justifyContent = "center";

        galleryItems3.forEach((item, index) => {
            if (index >= 2) {
                testimonialContainer.style.height = "420px"
                testimonialContainer.style.transition = 'height 0.5s ease-in-out'

            }
        });
    } else {
        seeMoreBtn3.style.display = 'none'
    }

    seeMoreBtn3.addEventListener("click", function (e) {
        e.preventDefault()
        testimonialContainer.classList.toggle("expanded");

        if (testimonialContainer.classList.contains("expanded")) {
            let fullHeight = testimonialContainer.scrollHeight + "px";

            testimonialContainer.style.height = fullHeight;
            seeMoreBtn3.firstElementChild.textContent = "Azini göster";
        } else {
            testimonialContainer.style.height = "400px"

            seeMoreBtn3.firstElementChild.textContent = "Tümünü göster";
        }

    });
}


function services() {

    if (servicesItems.length > 9) {
        seeMoreBtn4.style.display = "flex";
        seeMoreBtn4.style.justifyContent = "center";

        servicesItems.forEach((item, index) => {
            if (index >= 9) {
                servicesContainer.style.height = "700px"
                servicesContainer.style.transition = 'height 0.5s ease-in-out'

            }
        });
    } else {
        seeMoreBtn4.style.display = 'none'
    }

    seeMoreBtn4.addEventListener("click", function (e) {
        e.preventDefault()
        servicesContainer.classList.toggle("expanded");

        if (servicesContainer.classList.contains("expanded")) {
            let fullHeight = servicesContainer.scrollHeight + "px";

            servicesContainer.style.height = fullHeight;
            seeMoreBtn4.firstElementChild.textContent = "Azini göster";
        } else {
            servicesContainer.style.height = "700px"

            seeMoreBtn4.firstElementChild.textContent = "Tümünü göster";
        }

    });
}

function about1() {

    if (resumeCard.scrollHeight >= 255) {
        seeMoreBtn5.style.display = "flex";
        seeMoreBtn5.style.justifyContent = "center";

        resumeCard.style.height = "255px"
        resumeCard.style.transition = 'height 0.5s ease-in-out'

    } else {
        seeMoreBtn5.style.display = 'none'
    }

    seeMoreBtn5.addEventListener("click", function (e) {
        e.preventDefault()
        resumeCard.classList.toggle("expanded");

        if (resumeCard.classList.contains("expanded")) {
            let fullHeight = resumeCard.scrollHeight + "px";

            resumeCard.style.height = fullHeight;
            seeMoreBtn5.firstElementChild.textContent = "Azini göster";
        } else {
            resumeCard.style.height = "260px"

            seeMoreBtn5.firstElementChild.textContent = "Tümünü göster";
        }

    });
}


const secondSection=document.getElementById('secondSection')

function aboutSections(buttons, containers, itemsList) {
    buttons.forEach((btn, i) => {
        let servicesContainer = itemsList[i];
        let containerBox = containers[i]
        if (servicesContainer.children.length > 2) {
            btn.style.display = "flex";
            btn.style.justifyContent = "center";
            containerBox.style.height = "260px";
            containerBox.style.overflow = "hidden";

            containerBox.style.transition = "height 0.5s ease-in-out";
        } else {
            btn.style.display = "none";
        }

        btn.addEventListener("click", function (e) {
            e.preventDefault();
            containerBox.classList.toggle("expanded");

            if (containerBox.classList.contains("expanded")) {
                containerBox.style.height = containerBox.scrollHeight + "px";

                btn.firstElementChild.textContent = "Azini göster";
            } else {
                containerBox.style.height = "260px";

                btn.firstElementChild.textContent = "Tümünü göster";
            }
        });
    });
}



document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".seeMoreBtns");
    let resumeCards = document.querySelectorAll(".resumeCards");

    let containers = document.querySelectorAll(".resumeList"); // Changed ID to class
    let itemsList = Array.from(containers);
    aboutSections(buttons, resumeCards, itemsList);
});
fixedHeader()
goToTop()
galleryItem()
testimonial()
services()
about1()