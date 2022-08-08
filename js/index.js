$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 500) {
            $("#scroll").fadeIn();
        } else {
            $("#scroll").fadeOut();
        }
    });

    $("#scroll").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});