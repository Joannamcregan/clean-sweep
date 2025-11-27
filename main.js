const aboutLink = document.getElementById('about-link');
const aboutSection = document.getElementById('about-section');
const servicesLink = document.getElementById('services-link');
const servicesSection = document.getElementById('services-section');
const contactLink = document.getElementById('contact-link');
const contactSection = document.getElementById('contact-section');
const reviewsLink = document.getElementById('reviews-link');
const reviewsSection = document.getElementById('reviews-section');
const transitionOverlay = document.getElementById('transition-overlay');
const cookieOverlay = document.getElementById('cookie-banner');
const allowCookies = document.getElementById('allow-cookies');
const disallowCookies = document.getElementById('disallow-cookies');
const privacyPolicyLink = document.getElementById('privacy-policy-link');
const closePrivacyPolicy = document.getElementById('close-privacy-policy');
const privacyPolicy = document.getElementById('privacy-policy');


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
    goToReviews();
})

privacyPolicyLink.addEventListener("click", () => {
    console.log('logggggg');
    privacyPolicy.classList.remove('hidden');
    privacyPolicy.classList.add('fade-open');
    privacyPolicy.classList.add('block');
    setTimeout(()=>{
        privacyPolicy.classList.remove('fade-open');
    }, 1000);
})

closePrivacyPolicy.addEventListener("click", () => {
    privacyPolicy.classList.remove('block');
    privacyPolicy.classList.add('fade-closed');
    setTimeout(()=>{
        privacyPolicy.classList.add('hidden');
        privacyPolicy.classList.remove('fade-closed');
    }, 1000);
})

const closeCookieOverlay = () => {
    cookieOverlay.classList.add('fade-closed');
    setTimeout(()=>{
        cookieOverlay.classList.add('hidden');
    }, 1000)
}

allowCookies.addEventListener("click", closeCookieOverlay);
disallowCookies.addEventListener("click", closeCookieOverlay);

function goToAbout(){
    aboutSection.classList.remove('sticky');
    transitionOverlay.classList.remove('hidden');
    transitionOverlay.classList.add('transitioning');
    setTimeout(()=>{
        aboutSection.classList.add('sticky');
    }, 500);
    setTimeout(()=>{
        transitionOverlay.classList.add('hidden');
        transitionOverlay.classList.remove('transitioning');
    }, 2000);
}

function goToServices(){
    servicesSection.classList.remove('sticky');
    transitionOverlay.classList.remove('hidden');
    transitionOverlay.classList.add('transitioning');
    setTimeout(()=>{
        servicesSection.classList.add('sticky');
    }, 500);
    setTimeout(()=>{
        transitionOverlay.classList.add('hidden');
        transitionOverlay.classList.remove('transitioning');
    }, 2000);
}

function goToContact(){
    contactSection.classList.remove('sticky');
    transitionOverlay.classList.remove('hidden');
    transitionOverlay.classList.add('transitioning');
    setTimeout(()=>{
        contactSection.classList.add('sticky');
    }, 500);
    setTimeout(()=>{
        transitionOverlay.classList.add('hidden');
        transitionOverlay.classList.remove('transitioning');
    }, 2000);
}

function goToReviews(){
    console.log('taking the hobits to review section');
    reviewsSection.classList.remove('sticky');
    transitionOverlay.classList.remove('hidden');
    transitionOverlay.classList.add('transitioning');
    setTimeout(()=>{
        reviewsSection.classList.add('sticky');
    }, 500);
    setTimeout(()=>{
        transitionOverlay.classList.add('hidden');
        transitionOverlay.classList.remove('transitioning');
    }, 2000);
}