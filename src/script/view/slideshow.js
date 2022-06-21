let slideIndex = 1;
let slidesItem = document.querySelectorAll(".mySlides");

slidesItem.forEach((item, index) => {
    const spanContainer = document.getElementById('spanDot');
    const span = document.createElement('span');
    span.classList.add('dot');
    span.onclick = function(){
        currentSlide(`${index + 1}`);
    }
    spanContainer.appendChild(span);
})

// Next/previous controls
const prev = document.querySelector('.prev');
prev.addEventListener('click', () =>{
    plusSlides(-1);
})

const next = document.querySelector('.next');
next.addEventListener('click', () => {
    plusSlides(1);
})

const plusSlides = n => {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
const currentSlide = n => {
    showSlides(slideIndex = n);
}


const showSlides = n => {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll("span.dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove('show');
    }

    if (dots !== null) {
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    }

    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].classList.add('show');
    dots[slideIndex - 1] !== undefined ? dots[slideIndex - 1].className += " active" : '';

}

showSlides(slideIndex);