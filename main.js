const aboutLink = document.getElementById('about-link');
const aboutSection = document.getElementById('about-section');
const servicesLink = document.getElementById('services-link');
const servicesSection = document.getElementById('services-section');

aboutLink.addEventListener('click', ()=>{
    aboutSection.classList.remove('sticky');
    setTimeout(()=>{
        aboutSection.classList.add('sticky');
    }, 500);
});
servicesLink.addEventListener('click', ()=>{
    servicesSection.classList.remove('sticky');
    setTimeout(()=>{
        servicesSection.classList.add('sticky');
    }, 10);
})