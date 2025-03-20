const header = document.getElementById('header')
const goTopIcon = document.getElementById('goTopIcon')
const galleryItems = document.querySelectorAll(".masonry-item2");
const seeMoreBtn = document.getElementById("seeMoreBtn");
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

fixedHeader()
goToTop()
galeryItem()