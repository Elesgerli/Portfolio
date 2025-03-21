const header = document.getElementById('header')
const goTopIcon = document.getElementById('goTopIcon')
const galleryItems = document.querySelectorAll(".masonry-item2");
const galleryItems3 = document.querySelectorAll(".masonry-item3");
const seeMoreBtn = document.getElementById("seeMoreBtn");
const seeMoreBtn3 = document.getElementById("seeMoreBtn3");
const galleryContainer3 = document.getElementById("galleryContainer2");
const galleryContainer = document.getElementById("customize-thumbnails-gallery");
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





function galeryItem() {

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


function galeryItem3() {

    if (galleryItems3.length > 2) {
        seeMoreBtn3.style.display = "flex";
        seeMoreBtn3.style.justifyContent = "center";

        galleryItems3.forEach((item, index) => {
            if (index >= 2) {
                galleryContainer3.style.height = "420px"
                galleryContainer3.style.transition = 'height 0.5s ease-in-out'

            }
        });
    } else {
        seeMoreBtn3.style.display = 'none'
    }

    seeMoreBtn3.addEventListener("click", function (e) {
        e.preventDefault()
        galleryContainer3.classList.toggle("expanded");

        if (galleryContainer3.classList.contains("expanded")) {
            let fullHeight = galleryContainer3.scrollHeight + "px";

            galleryContainer3.style.height = fullHeight;
            seeMoreBtn3.firstElementChild.textContent = "Azini göster";
        } else {
            galleryContainer3.style.height = "400px"

            seeMoreBtn3.firstElementChild.textContent = "Tümünü göster";
        }

    });
}
fixedHeader()
goToTop()
galeryItem()
galeryItem3()