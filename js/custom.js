let isRequested = false;


const requestDemo = () => {
    isRequested = true
    console.log('Request button clicked');    
    
}

if (isRequested === false) {
    setTimeout(() => {
        console.log('functon call set time out')
        $('#exampleModalCenter').modal('    ');
    }, 3000);
    isRequested = true;
}