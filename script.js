window.addEventListener('scroll', function() {
    const navbar=document.getElementById('navbar');
    if (window.scrollY>50) {
        navbar.style.backgroundColor = '#222';
    } 
    else{
        navbar.style.backgroundColor = '#444';
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        const target=document.querySelector(this.getAttribute('href'));
        target.classList.add('active');
        target.scrollIntoView({behavior:'smooth'});
    });
});
