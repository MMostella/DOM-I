const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Bar

document.querySelector('nav a').text = siteContent['nav']['nav-item-1'];
document.querySelector('nav a:nth-of-type(2)').text = siteContent['nav']['nav-item-2'];
document.querySelector('nav a:nth-of-type(3)').text = siteContent['nav']['nav-item-3'];
document.querySelector('nav a:nth-of-type(4)').text = siteContent['nav']['nav-item-4'];
document.querySelector('nav a:nth-of-type(5)').text = siteContent['nav']['nav-item-5'];
document.querySelector('nav a:nth-of-type(6)').text = siteContent['nav']['nav-item-6'];

//Images

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['cta']['img-src'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

//Inputing text

//cta text
// const ctaTitle = document.querySelector('.cta-text h1');
// ctaTitle.textContent = 'DOM' </br> 'Is' </br> 'Awesome';

document.querySelector('.cta-text h1').innerHTML = 'DOM </br> Is </br> Awesome';

const ctaButton = document.querySelector('.cta-text button'); 
ctaButton.textContent = siteContent['cta']['button'];

// Top Content
const featureText = document.querySelector('.top-content .text-content h4');
featureText.textContent = siteContent['main-content']['features-h4'];

const featurePara = document.querySelector('.top-content .text-content p');
featurePara.textContent = siteContent['main-content']['features-content'];

const aboutText = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
aboutText.textContent = siteContent['main-content']['about-h4'];

const aboutPara = document.querySelector('.top-content .text-content:nth-of-type(2) p');
aboutPara.textContent = siteContent['main-content']['about-content'];

// Bottom Content
const servicesText = document.querySelector('.bottom-content .text-content h4');
servicesText.textContent = siteContent['main-content']['services-h4'];

const servicesPara = document.querySelector('.bottom-content .text-content p');
servicesPara.textContent = siteContent['main-content']['services-content'];

const productText = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productText.textContent = siteContent['main-content']['product-h4'];

const productPara = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productPara.textContent = siteContent['main-content']['product-content'];

const visionText = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionText.textContent = siteContent['main-content']['vision-h4'];

const visionPara = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionPara.textContent = siteContent['main-content']['vision-content'];

// Contact
const contactText = document.querySelector('.contact h4');
contactText.textContent = siteContent['contact']['contact-h4'];

document.querySelector('.contact p').innerHTML = '123 Way 456 Street </br> Somewhere, USA';

// const contactAdd = document.querySelector('.contact p');
// contactAdd.textContent = siteContent['contact']['address'];

const contactPhone = document.querySelector('.contact p:nth-of-type(2)');
contactPhone.textContent = siteContent['contact']['phone'];

const contactEmail = document.querySelector('.contact p:nth-of-type(3)');
contactEmail.textContent = siteContent['contact']['email'];

// Footer

const footerText = document.querySelector('footer');
footerText.textContent = siteContent['footer']['copyright'];

// Adding Nav Items

const testLink = document.createElement('a');
testLink.textContent = 'Test';
testLink.href = '#';

document.querySelector('nav').appendChild(testLink);

const funLink = document.createElement('a');
funLink.textContent = 'Fun';
funLink.href = '#';

document.querySelector('nav').appendChild(funLink);

// Change Color
document.querySelector('nav a').style.color = 'yellow';