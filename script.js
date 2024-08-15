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

// Portfolio
let currentOpenId = null; // Track the currently open card

function toggleText(id) {
  if (currentOpenId && currentOpenId !== id) {
    // Close the currently open card
    $("#text" + currentOpenId).removeClass("d-none");
    $("#textt" + currentOpenId).addClass("d-none");
    $("#more" + currentOpenId).removeClass("d-none");
    $("#less" + currentOpenId).addClass("d-none");
  }

  // Toggle the selected card
  $("#text" + id).toggleClass("d-none");
  $("#textt" + id).toggleClass("d-none");
  $("#more" + id).toggleClass("d-none");
  $("#less" + id).toggleClass("d-none");

  // Update the currently open card
  currentOpenId = currentOpenId === id ? null : id;
}
