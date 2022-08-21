/* home-section leftmenu*/
$(".openNav").click(function () {
  if ($("#leftMenu").css("width") == "0px") {
    $("#leftMenu").animate({ width: "10rem" }, 500);
    $("#home-content").animate({ marginLeft: "10rem" }, 500);
    $(".closebtn").animate({ marginRight: "0px" }, 20);
  } else {
    $(".closebtn").animate({ marginRight: "500px" }, 20);
    $("#leftMenu").animate({ width: "0px" }, 500);
    $("#home-content").animate({ marginLeft: "0px" }, 500);
  }
});
$(".closebtn").click(function () {
  $(".closebtn").animate({ marginRight: "500px" }, 20);
  $("#leftMenu").animate({ width: "0px" }, 500);
  $("#home-content").animate({ marginLeft: "0px" }, 500);
});


/*scrollmenu*/
$(".sidenav a[href^='#']").click(function() {
  let sectionId = $(this).attr("href");
  let positionOfSection = $(sectionId).offset().top;
  $("html , body").animate({ scrollTop: positionOfSection } ,  800)
})


/*  slidDown-section   Accordion*/
$("#sliderDown .toggle").click(function () {
  $(".inner").not($(this).next()).slideUp(500); // 3ayz afhm al selector da
  $(this).next().slideToggle(500);
});



/*counter*/
window.onload = function () {
  countDownToTime("Jun 29 2022 03:32:39");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);

  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  let timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );
  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);
  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}



// textarea
let maxLength = 100 ;
  $("textarea").keyup(function() {
    let length= $(this).val().length();
    console.log(length);
  })




