const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg'
]
let imageIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex];
    imageIndex++;
    imgElement.setAttribute('src', imgUrl);
}, 2000);