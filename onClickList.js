function onClickList() {
    $('#list').addClass('d-none');
    $('#close').removeClass('d-none');
}

function onClickClose() {
    $('#close').addClass('d-none');
    $('#list').removeClass('d-none');
}
// navbar active
$(window).on("scroll", function() {
    if ($(window).scrollTop() < 5) {
        $("#scrollHome").addClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollService").removeClass("active");
        $("#scrollIot").removeClass("active");
        $("#scrollPartnership").removeClass("active");
        $("#scrollProject").removeClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 50) {
        $("#scrollHome").addClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollService").removeClass("active");
        $("#scrollIot").removeClass("active");
        $("#scrollPartnership").removeClass("active");
        $("#scrollProject").removeClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 480) {
        $("#scrollAbout").addClass("active");
        $("#scrollHome").removeClass("active");
        $("#scrollService").removeClass("active");
        $("#scrollIot").removeClass("active");
        $("#scrollPartnership").removeClass("active");
        $("#scrollProject").removeClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 1500) {
        $("#scrollService").addClass("active");
        $("#scrollHome").removeClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollIot").removeClass("active");
        $("#scrollPartnership").removeClass("active");
        $("#scrollProject").removeClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 2600) {
        $("#scrollIot").addClass("active");
        $("#scrollHome").removeClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollService").removeClass("active");
        $("#scrollPartnership").removeClass("active");
        $("#scrollProject").removeClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 3400) {
        $("#scrollPartnership").addClass("active");
        $("#scrollHome").removeClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollIot").removeClass("active");
        $("#scrollService").removeClass("active");
        $("#scrollProject").removeClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 3800) {
        $("#scrollProject").addClass("active");
        $("#scrollHome").removeClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollIot").removeClass("active");
        $("#scrollService").removeClass("active");
        $("#scrollPartnership").removeClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 4500) {
        $("#scrollContact").addClass("active");
        $("#scrollHome").removeClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollIot").removeClass("active");
        $("#scrollService").removeClass("active");
        $("#scrollPartnership").removeClass("active");
        $("#scrollProject").removeClass("active");
    }
});
// typing
document.addEventListener("DOMContentLoaded", function() {
    new TypeIt("#typing", {
        strings: ["This is my string!"],
    }).go();
});