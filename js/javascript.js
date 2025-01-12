//loader
$(window).on('load',function(){
  $(".loader").fadeOut(500);
  $("header").fadeIn();
  $(".nav-hide").fadeIn();
  $("main").fadeIn();
});

//dropDown for search
$(document).ready(function () {
  $(".dropdown").click(function () {
    $(this).find("#nav3").slideToggle("fast");
  });
});
$(document).on("click", function (event) {
  var $trigger = $(".dropdown");
  if ($trigger !== event.target && !$trigger.has(event.target).length) {
    $("#nav3").slideUp("fast");
  }
});

//dropDown for Hide filter
  $(document).ready(function(){
    $(".dropdown").click(function(){
        $(this).find(".header-online-search").slideToggle("fast");
    });
  });
  $(document).on("click", function(event){
    var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".header-online-search").slideUp("fast");
    }
  });

//dropDown for nav
  $(document).ready(function(){
  $(".dropdown").click(function(){
      $(this).find(".dropdownAngleIcon").slideToggle("fast");
  });
  });
  $(document).on("click", function(event){
  var $trigger = $(".dropdown");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".dropdownAngleIcon").slideUp("fast");
  }
  });

//Add active class to section for rotate angle icon
  let selectdropdown = document.querySelector(".angle-down-icon")
  selectdropdown.onclick = function() {
  selectdropdown.classList.toggle("active")
  }
  let angleup2 = document.querySelector(".angle-up2")
  angleup2.onclick = function() {
    angleup2.classList.toggle("active")
  }
  let angleup3 = document.querySelector(".angle-up3")
  angleup3.onclick = function() {
    angleup3.classList.toggle("active")
  }
  let angleup4 = document.querySelector(".angle-up4")
  angleup4.onclick = function() {
    angleup4.classList.toggle("active")
  }
  let angleup5 = document.querySelector(".angle-up5")
  angleup5.onclick = function() {
    angleup5.classList.toggle("active")
  }
  let angleup6 = document.querySelector(".angle-up6")
  angleup6.onclick = function() {
    angleup6.classList.toggle("active")
  }

function changeImage()
{
  let angleLeft = document.getElementById("angleLeft");
  if(angleLeft.src.match("../image/icon-filters-back-icon.svg"))
  {
    angleLeft.src = "../image/icon-filters-icon.svg"
  } else {
    angleLeft.src = "../image/icon-filters-back-icon.svg"
  }
}

// collapse navbar
$(document).ready(function()
{
  let angleLeft = document.getElementById("angleLeft");
 
 $('.img-select').click(function()
 {
  if(angleLeft.src.match("../image/icon-filters-back-icon.svg"))
  {
   
   $('.reset').removeClass('active');
  }
 
 });
 $('.img-select').click(function()
 {
  if(angleLeft.src.match("../image/icon-filters-icon.svg")){
    $('.reset').addClass('active');
  }
 });
});

// collapse zoom
var zoom = 1;	
$('.zoomin').on('click', function(){
  zoom += 0.1;
  $('.target').css('transform', 'scale(' + zoom + ')');
});
$('.zoomout').on('click', function(){
  zoom -= 0.1;
  $('.target').css('transform', 'scale(' + zoom + ')');
});
$('.zoominit').on('click', function(){
  zoom = 1;
  $('.target').css('transform', 'scale(' + zoom + ')');
});










