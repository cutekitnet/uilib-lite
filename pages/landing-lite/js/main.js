document.addEventListener('DOMContentLoaded', function () {

    var menuBehaviors = document.querySelectorAll('.menu-behavior');

    [].forEach.call(document.querySelectorAll('.menu-toggler'), function (el) {
        el.addEventListener('click', function (event) {
            menuBehaviors.forEach(function (menuBehavior) {
                menuBehavior.classList.toggle('menu-visible');
            });
            event.preventDefault();
        });
    });

    // close menu when a link is clicked fo example
    [].forEach.call(document.querySelectorAll('.menu-close'), function (el) {
        el.addEventListener('click', function (event) {
            menuBehaviors.forEach(function (menuBehavior) {
                menuBehavior.classList.remove('menu-visible');
            });
        });
    });
});
