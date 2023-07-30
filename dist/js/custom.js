$(document).ready(function () {
    // Function to scroll the page back to the top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // Show the Back to Top button when user scrolls to the second section
    $(window).on("scroll", function() {
        const secondSection = $("section:nth-of-type(2)");
        const backToTopButton = $("#backToTopButton");

        if (secondSection.length > 0 && $(window).scrollTop() >= secondSection.offset().top) {
            backToTopButton.fadeIn();
            // Reset the timer whenever the user scrolls
            resetTimer();
        } else {
            backToTopButton.fadeOut();
        }
    });

    // Timer to hide the Back to Top button after a few seconds of inactivity
    let timer;
    const hideDuration = 3000; // Time in milliseconds (3 seconds)

    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(hideBackToTopButton, hideDuration);
    }

    function hideBackToTopButton() {
        const backToTopButton = $("#backToTopButton");
        backToTopButton.fadeOut();
    }

    // Handle Back to Top button click using jQuery
    $("#btn-back-to-top").on("click", function() {
        scrollToTop();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });
    // copyrights Year Auto-update
    function newDate() {
        return new Date().getFullYear();
    }
    document.onload = document.getElementById("autodate").innerHTML = + newDate();

});

