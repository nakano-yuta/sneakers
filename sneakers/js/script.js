"use strict;";

jQuery(function () {
  // drawer
  jQuery("#hamburger").on("click", function () {
    jQuery(this).toggleClass("is-active");
    jQuery(".drawer").toggleClass("is-active");
  });

  jQuery(".globalNav__link, .socialNav__link").on("click", function () {
    jQuery("#hamburger").trigger("click");
  });

  // slick.js
  jQuery("#slick").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "8.75%",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 991, // max-width: 991px
        settings: {
          centerMode: true,
          centerPadding: "11.375%",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767, // max-width: 767px
        settings: {
          centerMode: true,
          centerPadding: "14%",
          slidesToShow: 1,
        },
      },
    ],
  });

  // smooth scroll
  jQuery('a[href^="#"]').on("click", function () {
    const speed = 500,
      id = jQuery(this).attr("href"),
      target = jQuery("#" === id ? "html" : id),
      header = jQuery(".header").innerHeight(),
      position = jQuery(target).offset().top - header;

    jQuery("html, body").animate(
      {
        scrollTop: position,
      },
      speed
    );

    return false;
  });

  // inview.js
  jQuery(".fadeIn").on("inview", function (event, isInviews) {
    jQuery(this).addClass("is-active");
  });
});
