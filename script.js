// menu
function onClickList() {
  $("#list").addClass("d-none");
  $("#close").removeClass("d-none");
}

function onClickClose() {
  $("#close").addClass("d-none");
  $("#list").removeClass("d-none");
}

// navbar background
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("#mainNav").addClass("scroll-active");
    $("#mainNav").removeClass("bg-transparent");
  } else {
    $("#mainNav").removeClass("scroll-active");
    $("#mainNav").addClass("bg-transparent");
  }
});

// navbar active
$(window).on("scroll", function () {
  if ($(window).scrollTop() < 5) {
    $("#scrollHome").addClass("active");
    $("#scrollAbout").removeClass("active");
    $("#scrollSkills").removeClass("active");
    $("#scrollCertificate").removeClass("active");
    $("#scrollPortfolio").removeClass("active");
    $("#scrollExperience").removeClass("active");
    $("#scrollContact").removeClass("active");
  }
  if ($(window).scrollTop() > 100) {
    $("#scrollHome").removeClass("active");
    $("#scrollAbout").addClass("active");
    $("#scrollSkills").removeClass("active");
    $("#scrollCertificate").removeClass("active");
    $("#scrollPortfolio").removeClass("active");
    $("#scrollExperience").removeClass("active");
    $("#scrollContact").removeClass("active");
  }
  if ($(window).scrollTop() > 900) {
    $("#scrollHome").removeClass("active");
    $("#scrollAbout").removeClass("active");
    $("#scrollSkills").addClass("active");
    $("#scrollCertificate").removeClass("active");
    $("#scrollPortfolio").removeClass("active");
    $("#scrollExperience").removeClass("active");
    $("#scrollContact").removeClass("active");
  }
  if ($(window).scrollTop() > 2100) {
    $("#scrollHome").removeClass("active");
    $("#scrollAbout").removeClass("active");
    $("#scrollSkills").removeClass("active");
    $("#scrollCertificate").addClass("active");
    $("#scrollPortfolio").removeClass("active");
    $("#scrollExperience").removeClass("active");
    $("#scrollContact").removeClass("active");
  }
  if ($(window).scrollTop() > 3200) {
    $("#scrollHome").removeClass("active");
    $("#scrollAbout").removeClass("active");
    $("#scrollSkills").removeClass("active");
    $("#scrollCertificate").removeClass("active");
    $("#scrollPortfolio").addClass("active");
    $("#scrollExperience").removeClass("active");
    $("#scrollContact").removeClass("active");
  }
  if ($(window).scrollTop() > 4500) {
    $("#scrollHome").removeClass("active");
    $("#scrollAbout").removeClass("active");
    $("#scrollSkills").removeClass("active");
    $("#scrollCertificate").removeClass("active");
    $("#scrollPortfolio").removeClass("active");
    $("#scrollExperience").addClass("active");
    $("#scrollContact").removeClass("active");
  }
  if ($(window).scrollTop() > 5000) {
    $("#scrollHome").removeClass("active");
    $("#scrollAbout").removeClass("active");
    $("#scrollSkills").removeClass("active");
    $("#scrollCertificate").removeClass("active");
    $("#scrollPortfolio").removeClass("active");
    $("#scrollExperience").removeClass("active");
    $("#scrollContact").addClass("active");
  }
});

// typing
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#typing", {
    speed: 170,
    loop: 1,
  })
    .type("Front-End Development", { delay: 1500 })
    .delete(22)
    .type("UI/UX Designer", { delay: 1500 })
    .delete(15)
    .type("QA Tester", { delay: 1500 })
    .go();
});

// scroll content
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// skills
function onClickCoding() {
  $("#coding").removeClass("d-none");
  $("#design").addClass("d-none");
  $("#tools").addClass("d-none");
  $("#microsoft").addClass("d-none");
  $("#btn-skills-1").addClass("btn-skills-active");
  $("#btn-skills-2").removeClass("btn-skills-active");
  $("#btn-skills-3").removeClass("btn-skills-active");
  $("#btn-skills-4").removeClass("btn-skills-active");
}

function onClickDesign() {
  $("#coding").addClass("d-none");
  $("#design").removeClass("d-none");
  $("#tools").addClass("d-none");
  $("#microsoft").addClass("d-none");
  $("#btn-skills-1").removeClass("btn-skills-active");
  $("#btn-skills-2").addClass("btn-skills-active");
  $("#btn-skills-3").removeClass("btn-skills-active");
  $("#btn-skills-4").removeClass("btn-skills-active");
}

function onClickTools() {
  $("#coding").addClass("d-none");
  $("#design").addClass("d-none");
  $("#tools").removeClass("d-none");
  $("#microsoft").addClass("d-none");
  $("#btn-skills-1").removeClass("btn-skills-active");
  $("#btn-skills-2").removeClass("btn-skills-active");
  $("#btn-skills-3").addClass("btn-skills-active");
  $("#btn-skills-4").removeClass("btn-skills-active");
}

function onClickMicrosoft() {
  $("#coding").addClass("d-none");
  $("#design").addClass("d-none");
  $("#tools").addClass("d-none");
  $("#microsoft").removeClass("d-none");
  $("#btn-skills-1").removeClass("btn-skills-active");
  $("#btn-skills-2").removeClass("btn-skills-active");
  $("#btn-skills-3").removeClass("btn-skills-active");
  $("#btn-skills-4").addClass("btn-skills-active");
}

// long text content portfolio
function onClickMore1() {
  $("#text1").addClass("d-none");
  $("#textt1").removeClass("d-none");
  $("#more1").addClass("d-none");
  $("#less1").removeClass("d-none");
}

function onClickLess1() {
  $("#text1").removeClass("d-none");
  $("#textt1").addClass("d-none");
  $("#more1").removeClass("d-none");
  $("#less1").addClass("d-none");
}

function onClickMore2() {
  $("#text2").addClass("d-none");
  $("#textt2").removeClass("d-none");
  $("#more2").addClass("d-none");
  $("#less2").removeClass("d-none");
}

function onClickLess2() {
  $("#text2").removeClass("d-none");
  $("#textt2").addClass("d-none");
  $("#more2").removeClass("d-none");
  $("#less2").addClass("d-none");
}

function onClickMore3() {
  $("#text3").addClass("d-none");
  $("#textt3").removeClass("d-none");
  $("#more3").addClass("d-none");
  $("#less3").removeClass("d-none");
}

function onClickLess3() {
  $("#text3").removeClass("d-none");
  $("#textt3").addClass("d-none");
  $("#more3").removeClass("d-none");
  $("#less3").addClass("d-none");
}

function onClickMore4() {
  $("#text4").addClass("d-none");
  $("#textt4").removeClass("d-none");
  $("#more4").addClass("d-none");
  $("#less4").removeClass("d-none");
}

function onClickLess4() {
  $("#text4").removeClass("d-none");
  $("#textt4").addClass("d-none");
  $("#more4").removeClass("d-none");
  $("#less4").addClass("d-none");
}

function onClickMore5() {
  $("#text5").addClass("d-none");
  $("#textt5").removeClass("d-none");
  $("#more5").addClass("d-none");
  $("#less5").removeClass("d-none");
}

function onClickLess5() {
  $("#text5").removeClass("d-none");
  $("#textt5").addClass("d-none");
  $("#more5").removeClass("d-none");
  $("#less5").addClass("d-none");
}

function onClickMore6() {
  $("#text6").addClass("d-none");
  $("#textt6").removeClass("d-none");
  $("#more6").addClass("d-none");
  $("#less6").removeClass("d-none");
}

function onClickLess6() {
  $("#text6").removeClass("d-none");
  $("#textt6").addClass("d-none");
  $("#more6").removeClass("d-none");
  $("#less6").addClass("d-none");
}
function onClickMore7() {
  $("#text7").addClass("d-none");
  $("#textt7").removeClass("d-none");
  $("#more7").addClass("d-none");
  $("#less7").removeClass("d-none");
}

function onClickLess7() {
  $("#text7").removeClass("d-none");
  $("#textt7").addClass("d-none");
  $("#more7").removeClass("d-none");
  $("#less7").addClass("d-none");
}
function onClickMore8() {
  $("#text8").addClass("d-none");
  $("#textt8").removeClass("d-none");
  $("#more8").addClass("d-none");
  $("#less8").removeClass("d-none");
}

function onClickLess8() {
  $("#text8").removeClass("d-none");
  $("#textt8").addClass("d-none");
  $("#more8").removeClass("d-none");
  $("#less8").addClass("d-none");
}
