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
        }, 600000000);

        isRequested = true;
    }
});
