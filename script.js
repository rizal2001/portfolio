// menu
function onClickList() {
    $('#list').addClass('d-none');
    $('#close').removeClass('d-none');
}

function onClickClose() {
    $('#close').addClass('d-none');
    $('#list').removeClass('d-none');
}

// navbar background
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $("#mainNav").addClass("scroll-active");
        $("#mainNav").removeClass("bg-transparent");
    } else {
        $("#mainNav").removeClass("scroll-active");
        $("#mainNav").addClass("bg-transparent");
    }
});

// navbar active
$(window).on("scroll", function() {
    if ($(window).scrollTop() < 5) {
        $("#scrollHome").addClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollSkills").removeClass("active");
        $("#scrollCertificate").removeClass("active");
        $("#scrollPortfolio").removeClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 100) {
        $("#scrollHome").removeClass("active");
        $("#scrollAbout").addClass("active");
        $("#scrollSkills").removeClass("active");
        $("#scrollCertificate").removeClass("active");
        $("#scrollPortfolio").removeClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 900) {
        $("#scrollHome").removeClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollSkills").addClass("active");
        $("#scrollCertificate").removeClass("active");
        $("#scrollPortfolio").removeClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 2100) {
        $("#scrollHome").removeClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollSkills").removeClass("active");
        $("#scrollCertificate").addClass("active");
        $("#scrollPortfolio").removeClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 2600) {
        $("#scrollHome").removeClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollSkills").removeClass("active");
        $("#scrollCertificate").removeClass("active");
        $("#scrollPortfolio").addClass("active");
        $("#scrollContact").removeClass("active");
    }
    if ($(window).scrollTop() > 3350) {
        $("#scrollHome").removeClass("active");
        $("#scrollAbout").removeClass("active");
        $("#scrollSkills").removeClass("active");
        $("#scrollCertificate").removeClass("active");
        $("#scrollPortfolio").removeClass("active");
        $("#scrollContact").addClass("active");
    }
});

// typing
document.addEventListener("DOMContentLoaded", function() {
    new TypeIt("#typing", {
            speed: 170,
            loop: 1
        })
        .type("Front-End Development", { delay: 1500 })
        .delete(22)
        .type("UI/UX Designer", { delay: 1500 })
        .delete(15)
        .type("QA Engineer", { delay: 1500 })
        .go();
});

// skills
function onClickCoding() {
    $('#coding').removeClass('d-none');
    $('#design').addClass('d-none');
    $('#tools').addClass('d-none');
    $('#microsoft').addClass('d-none');
    $('#btn-skills-1').addClass('btn-skills-active')
    $('#btn-skills-2').removeClass('btn-skills-active')
    $('#btn-skills-3').removeClass('btn-skills-active')
    $('#btn-skills-4').removeClass('btn-skills-active')
}

function onClickDesign() {
    $('#coding').addClass('d-none');
    $('#design').removeClass('d-none');
    $('#tools').addClass('d-none');
    $('#microsoft').addClass('d-none');
    $('#btn-skills-1').removeClass('btn-skills-active')
    $('#btn-skills-2').addClass('btn-skills-active')
    $('#btn-skills-3').removeClass('btn-skills-active')
    $('#btn-skills-4').removeClass('btn-skills-active')
}

function onClickTools() {
    $('#coding').addClass('d-none');
    $('#design').addClass('d-none');
    $('#tools').removeClass('d-none');
    $('#microsoft').addClass('d-none');
    $('#btn-skills-1').removeClass('btn-skills-active')
    $('#btn-skills-2').removeClass('btn-skills-active')
    $('#btn-skills-3').addClass('btn-skills-active')
    $('#btn-skills-4').removeClass('btn-skills-active')
}

function onClickMicrosoft() {
    $('#coding').addClass('d-none');
    $('#design').addClass('d-none');
    $('#tools').addClass('d-none');
    $('#microsoft').removeClass('d-none');
    $('#btn-skills-1').removeClass('btn-skills-active')
    $('#btn-skills-2').removeClass('btn-skills-active')
    $('#btn-skills-3').removeClass('btn-skills-active')
    $('#btn-skills-4').addClass('btn-skills-active')
}

// long text content portfolio
function onClickMore1() {
    $('#text1').addClass('d-none');
    $('#text2').removeClass('d-none');
    $('#more1').addClass('d-none');
    $('#less1').removeClass('d-none');
}

function onClickLess1() {
    $('#text1').removeClass('d-none');
    $('#text2').addClass('d-none');
    $('#more1').removeClass('d-none');
    $('#less1').addClass('d-none');
}

function onClickMore2() {
    $('#text3').addClass('d-none');
    $('#text4').removeClass('d-none');
    $('#more2').addClass('d-none');
    $('#less2').removeClass('d-none');
}

function onClickLess2() {
    $('#text3').removeClass('d-none');
    $('#text4').addClass('d-none');
    $('#more2').removeClass('d-none');
    $('#less2').addClass('d-none');
}