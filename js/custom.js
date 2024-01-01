const allIndicator = document.querySelectorAll('.accordion_indicator li');
const allContent = document.querySelectorAll('.content li');

allIndicator.forEach(item => item.addEventListener('click', () => {
  const content = document.querySelector(item.dataset.target);

  allIndicator.forEach(i => i.classList.remove('active'));
  allContent.forEach(i => i.classList.remove('active'));

  content.classList.add('active');
  item.classList.add('active');
}));

//   slider
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.clients-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20, // Adjust as needed
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var counters = document.querySelectorAll('.count');
  var speed = 200; // adjust the speed of counting

  counters.forEach(function(counter) {
    var updateCount = function() {
      var target = +counter.getAttribute('data-target');
      var count = +counter.innerText;

      var inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(function(img) {
      img.setAttribute('loading', 'eager');
  });
});


// CLOUD-FARE CAPTCHA
window.onloadTurnstileCallback = function () {
  turstile.render('example-container', {
    sitekey: '<YOUR_SITE_KEY>',
    callback: function(token) {
      console.log(`Challenge Success ${token}`);
    },
  });
};