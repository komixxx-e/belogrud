const preloaderContain = document.createElement('div');
preloaderContain.id = 'preloaderContain'






















document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloaderContain');
    setTimeout(function() {
        preloader.style.opacity = '0';
    }, 2000);
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 2700);
});