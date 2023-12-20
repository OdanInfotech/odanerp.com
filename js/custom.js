let isRequested = false;


const requestDemo = () => {
    isRequested = true
    console.log('Request button clicked');    
    
}

if (isRequested === false) {
    setTimeout(() => {
        console.log('functon call set time out')
        $('#exampleModalCenter').modal('show');
    }, 60000);
    isRequested = true;
}