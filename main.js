const aboutLink = document.getElementById('about-link');
const aboutSection = document.getElementById('about-section');
const servicesLink = document.getElementById('services-link');
const servicesSection = document.getElementById('services-section');
const contactLink = document.getElementById('contact-link');
const contactSection = document.getElementById('contact-section');
const reviewsLink = document.getElementById('reviews-link');
const reviewsSection = document.getElementById('reviews-section');

aboutLink.addEventListener('click', ()=>{
    goToAbout();
});
servicesLink.addEventListener('click', ()=>{
    goToServices();
})
contactLink.addEventListener('click', ()=>{
    goToContact();
})
reviewsLink.addEventListener('click', ()=>{

})

function goToAbout(){
    aboutSection.classList.remove('sticky');
    setTimeout(()=>{
        aboutSection.classList.add('sticky');
    }, 500);
}

function goToServices(){
    servicesSection.classList.remove('sticky');
    setTimeout(()=>{
        servicesSection.classList.add('sticky');
    }, 10);
}

function goToContact(){
    contactSection.classList.remove('sticky');
    setTimeout(()=>{
        contactSection.classList.add('sticky');
    }, 10);
}

function goToReviews(){
    reviewsSection.classList.remove('sticky');
    setTimeout(()=>{
        reviewsSection.classList.add('sticky');
    }, 10);
}