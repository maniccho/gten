document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var navCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            var bsCollapse = new bootstrap.Collapse(navCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });

    const servicesCard = document.querySelector('#services-card')
    const tabLinks = servicesCard.querySelectorAll('.nav-tabs .nav-link')
    tabLinks.addEventListener('click', (e) => {
        e.classList.toggle('active')
    })
});