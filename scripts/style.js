particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.json loaded...');
});

// Check Scrolled Nav bar
function checkScroll() {
    let startY = $('.navbar').height() * 11; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function() {
        checkScroll();
    });
}