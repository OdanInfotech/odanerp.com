document.addEventListener('DOMContentLoaded', () => {
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
    };

    if (!isRequested) {
        setTimeout(() => {
            console.log('function call set timeout');
            $('#exampleModalCenter').modal('show');
        }, 60000);

        isRequested = true;
    }
});



// CONTACK FORM JS
const formData = {};

function updateFormData(fieldId) {
    formData[fieldId] = document.getElementById(fieldId).value;
}

function submitForm() {
    console.log('Final Form Data:', formData);
}

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()