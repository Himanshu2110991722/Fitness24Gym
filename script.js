// HERO SLIDESHOW IMAGES
const images = [
    "https://lh3.googleusercontent.com/p/AF1QipPweUOEUR6TRpvtFofP3T9KkbxXzL13fTzMHAOE=s1360-w1360-h1020-rw",
"https://lh3.googleusercontent.com/gps-cs-s/AHVAweqsSQdUqh0zI_Pnfv8ec0jnDja1o2LNt_Mgf4WYtC70B8e21qKiF0gYhx--7bNWy0XnI3b-FvWC6eyekRXB0w0sFS4Quwwj9iqySyklDDYP6yOF98GD_fqykyFxleyuvqVNiJDQaFSeu5ID=s1360-w1360-h1020-rw",

"https://lh3.googleusercontent.com/gps-cs-s/AHVAwepq5Qr4TZF9UgfY-thHUriW08yBh6oQS1lvd0AX7yw9-X8Qn3EYZRRM99V_54603K7UGdsJvoD2ICDqo3BiivGJAsPWBN0_3hOa1uQrcfHIWqy3fj7uVCuY7kryZ-pgpdm25tTyUPXEhTvA=s1360-w1360-h1020-rw",

"https://lh3.googleusercontent.com/p/AF1QipOYz09dOuA5JPaqSf_E5j5NvCEIiWo8hTuQ1bZT=s1360-w1360-h1020-rw",

"https://lh3.googleusercontent.com/gps-cs-s/AHVAwerfQ7oKn5FpAheXsjcKC5nQ1__kN4GBEWJ2loMkCwruBpzuKUxaKt_hVJqAfrho6dJK_8-pyUn1fzm2E9KehOTyh-dQ5icZjbgrCr8TOwMsd1tUUKHiuFDNlke_sY3YzIPlZ5pifdQEiF4p=s1360-w1360-h1020-rw",

"https://lh3.googleusercontent.com/gps-cs-s/AHVAwer0s0Cfr8O5DmA-VeTviM3wvwBBLW3vl519CyiWE0gkBd8ssHfHS7E-NyIYzgaOk-slVzVccRlHg6FDNhttPfQrAk5juRGbutlt8aaA1WcS3nqyEPK8Yay7t6GeMvVWiuFCHCMkoK6crT7f=s1360-w1360-h1020-rw"
];

let current = 0;
const hero = document.querySelector(".hero");

function changeBackground(){
    hero.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
}

setInterval(changeBackground, 4000);
changeBackground();


// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');
const speed = 100;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Limited Offer Flash Effect
setInterval(() => {
    document.querySelector('.limited').style.color = 
        document.querySelector('.limited').style.color === 'yellow' 
        ? '#ff4444' 
        : 'yellow';
}, 800);