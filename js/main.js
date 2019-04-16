


    const names = Array.from(document.querySelectorAll('.name'));
    for(let i=0;i<names.length;i++){
        name.addEventListener('click', function(event){
            event.target.style.display = 'block';
        }
