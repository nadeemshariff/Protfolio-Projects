document.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', function() {
       // remove the active class from all dots
       document.querySelectorAll('.nav-dot').forEach(dot => dot.classList.remove('active'));
   
       // add the active class to the clicked dot
       this.classList.add('active');
    });
   });