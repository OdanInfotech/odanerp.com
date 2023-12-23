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

// script.js

$(document).ready(function () {
  // Create an object to store the form data
  var formData = {};

  // Function to update formData on "Designation" change
  $("#designation").on("change", function () {
    formData[this.name] = $(this).val();
  });

  // Function to update formData on form submission
  $("#contactForm").submit(function (event) {
    event.preventDefault();

    // Iterate through each form field and add it to the object
    $(this)
      .find("input, select")
      .not("#designation") // Exclude Designation from the general form submission
      .each(function () {
        formData[this.name] = $(this).val();
      });

    // Log the collected data to the console (you can replace this with your desired action)
    console.log(formData);

    // Here, you can send the formData object to your server using AJAX or perform other actions as needed
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


//   counter-1
// function animateCounter1(element, start, end, duration) {
//   let startTime;

//   function updateCounter1(timestamp) {
//     if (!startTime) startTime = timestamp;

//     const elapsed = timestamp - startTime;
//     const progress = Math.min(elapsed / duration, 1);

//     const value = Math.floor(start + progress * (end - start));
//     element.textContent = value;

//     if (progress < 1) {
//       requestAnimationFrame(updateCounter1);
//     }
//   }

//   requestAnimationFrame(updateCounter1);
// }

// // Get the counter element
// const counterElement = document.getElementById('happyClients');

// // Set your counter details
// const startValue = 0;
// const endValue = 232;
// const duration = 1000; // in milliseconds

// // Start the counter animation
// animateCounter1(counterElement, startValue, endValue, duration);

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