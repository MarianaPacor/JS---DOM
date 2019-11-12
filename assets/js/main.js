// seletores

let img = document.querySelector('img');
let section = document.querySelector('section');
let p = document.querySelector('p');
// New data object
hour = new Date
let timeNow = hour.getHours(); 
let min = hour.getMinutes(); 
let date = timeNow + ':' + min; 
if (timeNow >= 6 && timeNow <=12) {
    //morning stuff
    p.textContent = 'São ' + date + ' da manhã!';
    img.setAttribute('src', './img/morningicon.webp');
    section.style.backgroundImage = "url('./img/morning.jpg')";
} else if (timeNow >= 13 && timeNow <=18) {
    //afternoon text
    p.textContent = 'São ' + date + ' horas da tarde!';
    // change picture
    img.setAttribute('src', './img/afternoonicon.png');
    section.style.backgroundImage = "url('./img/afternoon.jpg')";
} else {
    //night text
    p.textContent = 'São ' + date + ' horas da noite!';
    // change picture
    img.setAttribute('src', './img/nighticon.jpg');
    section.style.backgroundImage = "url('./img/night.jpg')";
}