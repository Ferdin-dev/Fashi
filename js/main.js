$(document).ready(function () {

  /************************
   * Hero
   ******************/
  $(".hero-items").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 1200,
    autoHeight: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    dots: false,
    margin: 0,
    nav: true,
    navText: [
      '<i class="icon-angle-left"></i>',
      '<i class="icon-angle-right"></i>',
    ],
  });


  /************************
   * Product
   ******************/
  $(".product-container").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    smartSpeed: 1200,
    autoHeight: false,
    dots: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      }
    },
    navText: [
      '<i class="icon-angle-left"></i>',
      '<i class="icon-angle-right"></i>',
    ],
  });
});


/*------------------
       CountDown
   --------------------*/
// For demo preview
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

if (mm == 12) {
  mm = '01';
  yyyy = yyyy + 1;
} else {
  mm = parseInt(mm) + 1;
  mm = String(mm).padStart(2, '0');
}
var timerdate = mm + '/' + dd + '/' + yyyy;
// For demo preview end

// console.log(timerdate);


// Use this for real timer date
/* var timerdate = "2020/01/01"; */

$("#countdown").countdown(timerdate, function (event) {
  $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
});

$('.logo-carousel').owlCarousel({
  items: 5,
  loop: true,
  autoplay: true,
  smartSpeed: 1500,
  margin: 20,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 3,
    },
    542: {
      items: 3,
    },
    750: {
      items: 5,
    },
    992: {
      items: 5,
    },
    1200: {
      items: 5,
    }
  }
})

// Menu toggle

$('#openNav').on('click', function () {
  $('.navigation .nav-links li .nav-sublink').slideToggle("slow");
})

$('#navOpen').on('click', function () {
  $('.navigation .nav-links li .nav-sublink').slideToggle("slow");
})

// Mobile Toggle
$('.hamburger').on('click',function(){$('.mobile-nav').slideToggle("slow");
})

$('.link-1').on('click',function(){$('.mobile-1').slideToggle("slow");
})

$('.link-2').on('click',function(){$('.mobile-2').slideToggle("slow");


})


$('.accordion-btn-1').on('click',function(){
  $('.accordion-content-1').slideToggle("slow");
  $('.icon-1').toggleClass('icon-minus');
})
$('.accordion-btn-2').on('click',function(){
  $('.accordion-content-2').slideToggle("slow");
  $('.icon-2').toggleClass('icon-minus');
})
$('.accordion-btn-3').on('click',function(){
  $('.accordion-content-3').slideToggle("slow");
  $('.icon-3').toggleClass('icon-minus');
})