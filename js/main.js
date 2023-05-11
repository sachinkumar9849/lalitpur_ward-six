

$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  //jquery for expand and collapse the sidebar
  $(".menu-btn").click(function () {
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });

  $(".close-btn").click(function () {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
});
// menu mobile end
$(".testimonial_sliders").slick({
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,

  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
});
// testimonial end 
$(".show-more").click(function () {
  if($(".text").hasClass("show-more-height")) {
      $(this).text("Show Less");
  } else {
      $(this).text("Show More");
  }

  $(".text").toggleClass("show-more-height");
});
//about read more end


var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// slide up end
$(function () {
  $(".scroll-down").click(function () {
    $("html, body").animate(
      { scrollTop: $("section#about").offset().top },
      "slow"
    );
    return false;
  });
});
// slider down end
$(document).ready(function () {
  $("#myModal").modal("show");
});
// notice end

$(".news_slider").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 1000,
  draggable: true,
  infinite: true,

  arrows: false,
  dots: false,

  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// news_section slider end

$(".about_slider").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 1000,
  draggable: true,
  infinite: true,

  arrows: false,
  dots: false,

  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// news_section slider end
$(".slider")
  .slick({
    autoplay: true,
    speed: 800,
    lazyLoad: "progressive",
    arrows: false,
    dots: false,
  })
  .slickAnimation();

// slider home end
$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("sticky-bar", window.scrollY > 50);
  });
});

// NAVE scroll end


