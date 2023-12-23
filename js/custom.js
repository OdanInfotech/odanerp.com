const allIndicator = document.querySelectorAll('.accordion_indicator li');
const allContent = document.querySelectorAll('.content li');

allIndicator.forEach(item => item.addEventListener('click', () => {
  const content = document.querySelector(item.dataset.target);

  allIndicator.forEach(i => i.classList.remove('active'));
  allContent.forEach(i => i.classList.remove('active'));

  content.classList.add('active');
  item.classList.add('active');
}));

let isRequested = false;

const requestDemo = () => {
  isRequested = true;
  console.log('Request button clicked');
  console.log('modal open -> ', isRequested)
};

console.log('modal open -> ', isRequested)
const closeButton = () => {
  console.log('modal close button clicked');
  isRequested = true;
  $('#exampleModalCenter').modal('hide');
}
console.log('modal open -> ', isRequested)
if (isRequested === false) {
  console.log('modal open -> ', isRequested)
  setTimeout(() => {
    console.log('function call set timeout');
    $('#exampleModalCenter').modal('show');
  }, 600000000);

  isRequested = true;
}



// CONTACK FORM JS
$(document).ready(function () {
  // Create an object to store the form data
  var formData = {};

  $("#designation").on("change", function () {
    formData[this.name] = $(this).val();
  });

  $("#contactForm").submit(function (event) {
    event.preventDefault();

    $(this)
      .find("input, select")
      .not("#designation") 
      .each(function () {
        formData[this.name] = $(this).val();
      });

    console.log(formData);
  });
});




//   slider
var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
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