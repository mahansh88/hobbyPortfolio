let $ = document;

const welcomeIntro = $.getElementById('Intro');
const textElement = $.getElementById('text');
const texts = ["Data Scientist", "Software Developer", 'Designer', 'Network Engineer'];
let index = 0;
let helloIntro = 'Hello Friend,  Welcome To My Page';



// Function to display the intro message
function intro(text, j) {

    if (j < text.length) {
        welcomeIntro.innerHTML += text.charAt(j);
        setTimeout(() => intro(text, j + 1), 110); // Continue typing the intro text
    } else {
        // After the intro text is displayed, wait and then start typing the next text
        setTimeout(() => {
            welcomeIntro.style.opacity = 0; // Fade out the intro text
            setTimeout(() => {
                welcomeIntro.innerHTML = ''; // Clear the intro text
                welcomeIntro.style.opacity = 1; // Reset opacity for next text
                typeText(texts[index], 0); // Start typing the first text
            }, 500); // Wait for 0.5 seconds before clearing
        }, 2000); // Wait for 2 seconds before starting the next text
    }
}

// Function to type text character by character
function typeText(text, i) {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        textElement.style.opacity = 1; // Ensure text is visible
        
        setTimeout(() => typeText(text, i + 1), 110); // Continue typing the text
    } else {
        // After typing the text, clear it and move to the next one
        setTimeout(() => {
            textElement.style.opacity = 0; // Fade out the text
            setTimeout(() => {
                textElement.innerHTML = ''; // Clear the text
                
                textElement.style.opacity = 1; // Reset opacity for next text
                index = (index + 1) % texts.length; // Move to the next text, loop back to start if at the end
                typeText(texts[index], 0); // Type the next text
                
                
            }, 700); // Wait for 0.5 seconds before clearing
        }, 2000); // Wait for 2 seconds before clearing
    }
}

// Start the intro with "Hello Friend"
intro(helloIntro, 0);


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@22
// Testimonial
const testimonials = document.querySelector('.testimonial-wrapper');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dotsContainer = document.getElementById('dots-container');
let currentIndex = 0;
const totalTestimonials = testimonials.children.length;
const slideInterval = 6000; // Time in milliseconds for each slide
let intervalId;

// Function to update the slider position
function updateSlider() {
    const offset = -currentIndex * 100; // Move left by 100% of the current index
    testimonials.style.transform = `translateX(${offset}%)`;

    // Update dot indicators
    updateDots();
}

// Function to update dot indicators
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Function to start automatic sliding
function startAutoSlide() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalTestimonials; // Loop to the first testimonial
        updateSlider();
    }, slideInterval);
}

// Function to stop automatic sliding
function stopAutoSlide() {
    clearInterval(intervalId);
}

// Event listeners for manual navigation
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalTestimonials; // Loop to the first testimonial
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials; // Loop to the last testimonial
    updateSlider();
});

// Create dots for each testimonial
function createDots() {
    for (let i = 0; i < totalTestimonials; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot', 'w-3', 'h-3', 'bg-gray-500', 'rounded-full', 'cursor-pointer');
        dot.addEventListener('click', () => {
            currentIndex = i; // Set current index to the dot index
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    }
}

// Start the automatic sliding when the page loads
startAutoSlide();

// Pause automatic sliding on hover
document.querySelector('.testimonial-item').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.testimonial-item').addEventListener('mouseleave', startAutoSlide);
document.querySelector('.testimonial-item2').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.testimonial-item2').addEventListener('mouseleave', startAutoSlide);
document.querySelector('.testimonial-item3').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.testimonial-item3').addEventListener('mouseleave', startAutoSlide);

// Initialize dots
createDots();


// 2222222222222222222222222222222222222222222222222222222222222222222222222222222222
// Clients Staticts
let statistics = $.getElementById('Statistics');
let statictsArray = Array.from($.querySelectorAll('.staticCard'));
// console.log(statictsArray)
let h1Elements =  statictsArray.map(function(index){
    return index.lastElementChild
})
let countH1 = 0;
statistics.style.transition = 'all 0.8'


window.addEventListener('scroll', ()=>{

    if (window.scrollY > 70){
        statistics.style.transform = 'translateY(0)'

        setTimeout(function(){

            h1Elements.forEach(function(h1){
                
                setInterval(() => {
                    if (countH1 < 999){
                        
                        h1.textContent = countH1 += 4;
            
                    } else {
                        h1.textContent = 999
                    };
                   
                }, 1);
            });
        }, 1000);
    };
})



// @2222222222222222222222222222222222222222222222222222222

// making 

let about = $.getElementById('about');
let about_script = $.getElementById('about_script');
let skills = $.getElementById('skills');
let topProjectsTitle = $.getElementById('topProjectsTitle');
let projectOne = $.getElementById('projectOne');
let projectTwo = $.getElementById('projectTwo');
let projectThree = $.getElementById('projectThree');


let skillsClass = $.getElementById('theSkills');
let skillsClass2 = $.getElementById('theSkills2');

if (window.innerWidth < 680){
    skillsClass.style.animation = 'move 12s linear infinite'
    skillsClass2.style.animation = 'move2 12s linear infinite'
} else{
    skillsClass.style.animation = 'move 14s linear infinite'
    skillsClass2.style.animation = 'move2 14s linear infinite'
}



skills.style.transform = 'translateY(300px)';

topProjectsTitle.style.opacity = '0';
topProjectsTitle.style.transform = 'scale(0.3)';
// Project One
projectOne.style.transform = 'translateX(-100%)';
projectOne.style.transition = 'transform 0.8s ease'
// Project Two
projectTwo.style.transform = 'translateX(100%)';
projectTwo.style.transition = 'transform 0.8s ease';
// Project Three
projectThree.style.transform = 'translateY(1800px)';
projectThree.style.transition = 'transform 0.8s ease';

window.addEventListener('scroll', function() {
    // About Section
    if (document.documentElement.scrollTop > 358) {
        about.style.transform = 'translateX(0)';
    };

    if (document.documentElement.scrollTop > 650){
        about_script.style.transform = 'translateX(0)';
    };


    // Skills Section
   if($.documentElement.scrollTo < 1430){
    skills.style.transform = 'translateY(100%)'
   }

    if ($.documentElement.scrollTop >1140 ){
        skills.style.transform = 'translateY(0)';
    };


    // Projects Section
    // title
    if($.documentElement.scrollTop > 810){
        topProjectsTitle.style.opacity = '1';
        topProjectsTitle.style.transform = 'scale(1.1)'
    };
    // project 0ne $ two
    if ($.documentElement.scrollTop > 850){

        // projectOne
        projectOne.style.transform = 'translateX(0)';
        projectOne.addEventListener('mouseenter', ()=>{
            projectOne.style.transform = 'scale(1.05)';
        });
        projectOne.addEventListener('mouseleave', ()=>{
            projectOne.style.transform = 'scale(1)';
        });

        // ProjectTwo
        projectTwo.style.transform = 'translateX(0)';
        projectTwo.addEventListener('mouseenter', ()=>{
            projectTwo.style.transform = 'scale(1.05)';
        });
        projectTwo.addEventListener('mouseleave', ()=>{
            projectTwo.style.transform = 'scale(1)';
        });

    }

    if($.documentElement.scrollTop > 1700){
        projectThree.style.transform = 'translateY(0)'
        projectThree.addEventListener('mouseenter', ()=>{
            projectThree.style.transform = 'scale(1.05)';
        });
        projectThree.addEventListener('mouseleave', ()=>{
            projectThree.style.transform = 'scale(1)';
        });
    } 

});

// 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
// trim to Contact Section
let name = $.getElementById('name').value.trim();
let lastName = $.getElementById('lastName').value.trim();
let email = $.getElementById('email').value.trim();
let textArea = $.getElementById('textArea');
let textAreaTrimmed = textArea.value.trim();
// 22222222222222222222222222222222222222222222222222222222222222222222222

let backToTopButton = $.getElementById('backToTop');

backToTopButton.style.transition = 'all 2s'
window.addEventListener('scroll', function(){
    if($.documentElement.scrollTop > 3200){
        backToTopButton.style.display = 'flex';
        setTimeout(() => {
            backToTopButton.style.transform = 'translateY(0)';
        }, 100);
       
    } else if ($.documentElement.scrollTop < 1300){
        backToTopButton.style.transform = 'translateY(188px)';
        backToTopButton.style.transition = 'all 0.6s'
        setTimeout(function(){
            backToTopButton.style.display = 'none';

        }, 1000)
    }
});
// 222222222222222222222222222222222222222222222222222222222222222






// Content inside background image

let imageContent = $.getElementById('bg_image_contnet');
let contentPar = $.getElementById('contentPar');
// imageContent.style.transform = 'translateX(-2000px)'
imageContent.style.transition = 'all 4s'
imageContent.children[0].style.opacity = '0.4'
window.addEventListener('load', ()=>{
    setTimeout(function(){
        imageContent.style.transform = 'translateX(0)'
    }, 7200);

    setTimeout(function(){
        imageContent.children[0].style.transition = 'opacity 2s';
        imageContent.children[0].style.opacity = '1'
    }, 10300);
    if(window.innerWidth < 680){
        contentPar.textContent = 'Discover creative programming and innovative solutions.'
    }
});



// 22222222222222222222222222222222222222

// Scroll Watcher Js Code

window.addEventListener('scroll', () => {
    const scrollWatcher = document.querySelector('.scroll-watcher');
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // Prevent division by zero
    if (maxScroll > 0) {
        const scale = Math.min(1, scrollTop / maxScroll);
        scrollWatcher.style.transform = `scale(${scale}, 1)`;
    }
});



// 22222222222222222222222222222222222222222222222222222222222222222

// Pre Load 

let preLoadElem = $.querySelector('.preLoad');
let preLoadH1 = $.getElementById('preH1');
let preLoadGifElem = $.getElementById('gifPreLoad');

window.addEventListener('load', function(){
    
    setTimeout(function(){
        preLoadH1.style.transition = 'all 3s';
        preLoadGifElem.style.transition = 'all 3s';
        preLoadH1.style.opacity = '0';
        preLoadGifElem.style.opacity = '0';
    }, 4600);
    setTimeout(()=>{
        $.body.style.cssText = `
            overflow-y : auto;
        `;
        preLoadElem.style.cssText = `
            border-radius : 58px;
            margin-top : 300px;
            width : 0;
            height : 0;
            transition : all 4s
        `
    }, 5000)
});

// 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

let navItem = $.querySelectorAll('.nav-item');


console.log(window.innerWidth)

navItem.forEach(function(item){
    
    item.style.cssText = `
        border-radius: 10px; 
        border: 2px solid transparent;
        transition: box-shadow 0.8s ease, transform 0.3s ease, border 0.3s ease;
    `;

    item.addEventListener('mousemove', function(event){
        
        const pageX = (event.layerX / item.clientWidth) * 100
        if (pageX < 50){
            item.style.cssText = `
                box-shadow: -5px 5px 25px rgba(20, 184, 166, 0.5), 0 8px 15px rgba(0, 0, 0, 0.15);
                    transform: translateY(-2px);
                    border-bottom: 2px solid teal;
                    border-left: 2px solid teal;
                    border-top: 2px solid transparent;
                    border-right: 2px solid transparent;
            `
        } else{
            item.style.cssText = `
                   box-shadow: 5px 5px 25px rgba(20, 184, 166, 0.5), 0 8px 15px rgba(0, 0, 0, 0.15);
                    transform: translateY(0px);
                    border-top: 2px solid teal; 
                    border-right: 2px solid teal; 
                    border-bottom: 2px solid transparent; 
                    border-left: 2px solid transparent; 
            `
        };
    
    });
    
    item.addEventListener('mouseleave', function(){
        item.style.cssText = `
                box-shadow: -5px 5px 15px rgba(20, 184, 166, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1);
                transform: translateY(0);
                border: 2px solid transparent; /* Reset all borders to transparent */
                transition: box-shadow 0.8s ease, transform 0.3s ease, border 0.3s ease; /* Smooth transition */
            `
    });

});







// 22222222222222222222222222222222222222222222222222222222222222222222222222222222222
// Animation in background Image

let imageLeftHr = $.getElementById('imageLeftHr');
let imageRightHr = $.getElementById('imageRightHr');

imageLeftHr.style.transform = 'translateX(-500px)';
imageLeftHr.style.transition = 'all 2.5s';
imageRightHr.style.transform = 'translateX(500px)';
imageRightHr.style.transition = 'all 2.5s';

window.addEventListener('load', function(){
    setTimeout(()=>{
        imageLeftHr.style.transform = 'translateX(0)';
        imageRightHr.style.transform = 'translateX(0)';
        setTimeout(() => {
            imageLeftHr.classList.add('rotatingHr');
            imageRightHr.classList.add('rotatingHrTwo');
        }, 4500);
    }, 8000);
});


// 222222222222222222222222222222222222222222222222222
// Burgeer Menu
const burgerElement = $.querySelector('.burger');
const navMenu = $.querySelector('.Menu');
const bodyChildrenArray = [];
let bodyChildren = $.body.children;

for (let i in bodyChildren){
    bodyChildrenArray.push(bodyChildren[i]);
}
console.log(bodyChildrenArray.length)
bodyChildrenArray.pop()
bodyChildrenArray.pop()
bodyChildrenArray.pop()
bodyChildrenArray.splice(3, 1)


burgerElement.addEventListener('click', () => {
    const isExpanded = burgerElement.getAttribute('aria-expanded') === 'true';
    burgerElement.setAttribute('aria-expanded', !isExpanded);
   
    if (!isExpanded) {
        navMenu.style.display = 'block'; // Show the menu
        setTimeout(() => {
            navMenu.classList.add('show'); // Add class to trigger CSS transition
            bodyChildrenArray.forEach(function(eachParentElement){
                eachParentElement.style.opacity = '0.2'
                
            });
        }, 100); // Small timeout to allow display to take effect

    } else {
        navMenu.classList.remove('show'); // Remove class to start hiding
        setTimeout(() => {
            navMenu.style.display = 'none'; // Hide the menu after transition
        }, 300); // Match this duration with the CSS transition duration
            bodyChildrenArray.forEach(function(eachParentElement){
            eachParentElement.style.opacity = '1'
        });
        
    }
    
});
function clickingOutsideTheMenu (){
    let flag = true;
    bodyChildrenArray.forEach(function(eachParentElement){
      
        eachParentElement.addEventListener('click', function(){
            burgerElement.setAttribute('aria-expanded', 'false' )
            navMenu.classList.remove('show');
            navMenu.style.display = 'none';
            flag = false;
            if(flag === false){
                bodyChildrenArray.forEach(function(index){
                 
                    index.style.transition = 'all 0.3s';
                    index.style.opacity = '1';
                })
            }
        });
    })
}
clickingOutsideTheMenu()
// Closing the menu after resize
window.addEventListener('resize', function(){
    // navMenu.style.display = 'none';
    navMenu.classList.remove('show');
    burgerElement.setAttribute('aria-expanded', 'false')
});


// 2222222222222222222222222222222222222222222
let html = $.querySelector('html');
html.style.scrollBehavior = 'smooth';


window.addEventListener('scroll', (event)=>{
    console.log(event)
})

$.body.classList.add('scrollbar-custom')
const style = $.createElement('style');
style.textContent = `
    /* For WebKit browsers (Chrome, Safari) */
    ::-webkit-scrollbar {
        width: 8px; /* Width of the scrollbar */
    }

    ::-webkit-scrollbar-track {
        background: #004d4d; /* Track color (dark teal) */
    }

    ::-webkit-scrollbar-thumb {
        background: #007f7f; /* Thumb color (lighter dark teal) */
        border-radius: 10px; /* Rounded corners */
    }

    /* For Firefox */
    * {
        scrollbar-width: thin; /* Width of the scrollbar */
        scrollbar-color: #007f7f #004d4d; /* Thumb color and track color */
    }

`;
$.head.appendChild(style)