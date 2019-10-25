// Preloader
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

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

// To the top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}