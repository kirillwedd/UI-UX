
import './styles/style.scss'
import prof from './image/prof-img/prof-img.png'
import three from './image/event/3.webp'
import two from './image/event/2.webp'
import one from './image/event/1.webp'
import ball from './image/event/team-section/ball.png'
import search from './image/event/team-section/search-team.png'
import tour from './image/event/team-section/tour.png'
import learn from './image/learn/learn.png'
import videoInfo from './image/info-block/info-block.png'

import appStore from './image/market/appStore.svg'
import googleStore from './image/market/googlePlay.svg'
import codeApp from './image/code/code.svg'



document.querySelector('.bt__prof-img').src=prof;


document.querySelector('.main-banner__img-event').src=three
document.querySelector('.event__img').src=ball;
document.querySelector('.event__img-search-com').src=search
document.querySelector('.event__img-tour').src=tour
document.querySelector('.main-learn__img').src=learn
document.querySelector('.info-block__img').src=videoInfo

document.querySelector('.app-links__app-store').src=appStore
document.querySelector('.app-links__google-store').src=googleStore
document.querySelector('.footer__code-im').src=codeApp





document.addEventListener('DOMContentLoaded', function() {
  
    const navItems = document.querySelectorAll('.main-banner__nav-item');
    const eventImage = document.getElementById('eventImage');
    const eventText = document.getElementById('eventText');
  
    const images = {
      "src/image/event/3.webp": three,
      "src/image/event/1.webp": one,
      "src/image/event/2.webp": two,
    };
  
    navItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        const newImage = images[item.getAttribute('data-img')];
        const newText = item.getAttribute('data-text');
        
        eventImage.src = newImage;
        eventText.textContent = newText;
      });
  
    });
  });