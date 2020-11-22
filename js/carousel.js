const images = [
    'img/carousel/backpacks-on-stones.jfif',
    'img/carousel/mountains-big-river.jfif',
    'img/carousel/mountains-river.jfif',
    'img/carousel/mountains-sky.jfif',
    'img/carousel/mountains-waterfall.jfif',
    'img/carousel/taipai-station.jfif',
    'img/carousel/travel-equipment.jfif',
    'img/carousel/waterfalll.jfif'
]
let currentIndex = 0; 
const interval = setInterval(slide, 1000);

function slide() {
    currentIndex =  ++currentIndex > images.length - 1 ? 0 : currentIndex;
    showSlide(currentIndex);
}
function back() {
    currentIndex =  --currentIndex < 0 ? images.length - 1 : currentIndex;
    showSlide(currentIndex);
}
function forward() {
    currentIndex =  ++currentIndex > images.length - 1 ? 0 : currentIndex;    
    showSlide(currentIndex);
}
function stop() {
    clearInterval(interval);
}

document.querySelector('.carousel .button-back').addEventListener('click', back)
document.querySelector('.carousel .button-forward').addEventListener('click', forward)
document.querySelector('.carousel .button-stop').addEventListener('click', stop)

function showSlide(currentIndex) {
    document.querySelector('.carousel img').src = images[currentIndex];
}


