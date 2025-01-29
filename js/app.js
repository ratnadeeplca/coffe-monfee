Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

// Banner Slider

$('.banner-slider').slick({
    dots: true,
    swipe: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"><i class="bx bx-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="bx bx-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 480, // Between 1600px and 1920px
        settings: {
          slidesToShow: 1,
          autoplay: false,
          arrows: false,
        }
      },
    ]
  });


// Product Sale Section Slider
  $('.product-Sale-Section-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1400, // Between 1600px and 1920px
        settings: {
          slidesToShow: 3,  // Show 3 slides
        }
      },
      {
        breakpoint: 1200, // Between 1200px and 1600px
        settings: {
          slidesToShow: 3,  // Show 2 slides
        }
      },
      {
        breakpoint: 768,  // Between 768px and 1200px
        settings: {
          slidesToShow: 2,  // Show 1 slide
        }
      },
      {
        breakpoint: 480,  // Between 300px and 768px
        settings: {
          slidesToShow: 1,  // Show 1 slide
        }
      }
    ]
  });
  


// Top Footer Card Section Slider
  $('.top-footer-card-section-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="bx bx-chevron-left arrow btn-prev f-sz"></i>',
    nextArrow: '<i class="bx bx-chevron-right arrow btn-next f-sz"></i>',
    swipe: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1400, // Between 1600px and 1920px
        settings: {
          slidesToShow: 3,  // Show 3 slides
        }
      },
      {
        breakpoint: 1200, // Between 1200px and 1600px
        settings: {
          slidesToShow: 2,  // Show 2 slides
        }
      },
      {
        breakpoint: 768,  // Between 768px and 1200px
        settings: {
          slidesToShow: 2,  // Show 1 slide
        }
      },
      {
        breakpoint: 480,  // Between 300px and 768px
        settings: {
          slidesToShow: 1,  // Show 1 slide
        }
      }
    ]
  });





  // Set the date we're counting down to
var countDownDate = new Date("jan 20, 2026 23:59:59").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);




jQuery('.stellarnav').stellarNav({
  theme: 'dark', // adds default color to nav. (light, dark)
  breakpoint: 768, // number in pixels to determine when the nav should turn mobile friendly
  menuLabel: '', // label for the mobile nav
  sticky: false, // makes nav sticky on scroll (desktop only)
  position: 'static', // 'static', 'top', 'left', 'right' - when set to 'top', this forces the mobile nav to be placed absolutely on the very top of page
  openingSpeed: 250, // how fast the dropdown should open in milliseconds
  closingDelay: 250, // controls how long the dropdowns stay open for in milliseconds
  showArrows: true, // shows dropdown arrows next to the items that have sub menus
  phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
  phoneLabel: 'Call Us', // label for the phone button
  locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
  locationLabel: 'Location', // label for the location button
  closeBtn: false, // adds a close button to the end of nav
  closeLabel: 'Close', // label for the close button
  mobileMode: false,
  scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
});
