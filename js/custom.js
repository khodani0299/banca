(function ($) {
  "use strict";

  $(document).ready(function () {
    var $window = $(window);
    var didScroll,
      lastScrollTop = 0,
      delta = 5,
      $mainNav = $("#sticky"),
      $mainNavHeight = $mainNav.outerHeight(),
      scrollTop;

    $window.on("scroll", function () {
      didScroll = true;
      scrollTop = $(this).scrollTop();
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 200);

    function hasScrolled() {
      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return;
      }
      if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
        $mainNav.css("top", -$mainNavHeight);
      } else {
        if (scrollTop + $(window).height() < $(document).height()) {
          $mainNav.css("top", 0);
        }
      }
      lastScrollTop = scrollTop;
    }

    //sticky header
    function navbarFixed() {
      if ($("#sticky").length) {
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll) {
            $("#sticky").addClass("navbar_fixed");
          } else {
            $("#sticky").removeClass("navbar_fixed");
          }
        });
      }
    }
    navbarFixed();

    $(".navbar-nav > li .mobile_dropdown_icon").on("click", function (e) {
      $(this).parent().find("ul").first().toggle(300);
      $(this).parent().siblings().find("ul").hide(300);
    });

    if ($(".submenu").length) {
      $(".submenu > .dropdown-toggle").on("click", function () {
        var location = $(this).attr("href");
        window.location.href = location;
        return false;
      });
    }

    //initialize smmothscroll
    if ($("header").length) {
      $("header").smoothScroll();
    }

    if ($("#banner_animation").length > 0) {
      $("#banner_animation").parallax({
        scalarX: 10.0,
        scalarY: 7.0,
      });
    }
    if ($("#banner_animation2").length > 0) {
      $("#banner_animation2").parallax({
        scalarX: 10.0,
        scalarY: 0.0,
      });
    }
    if ($("#card_area_animation").length > 0) {
      $("#card_area_animation").parallax({
        scalarX: 10.0,
        scalarY: 0.0,
      });
    }
    if ($("#MouseMoveAnimation").length > 0) {
      $("#MouseMoveAnimation").parallax({
        scalarX: 5.0,
        scalarY: 10.0,
      });
    }

    if ($("#readOnlyClose").length) {
      $("#readOnlyClose").on("click", function () {
        $("#locationSelect").val("");
        $("#locationSelect").focus();
      });
    }

    // === Back to Top Button
    var back_top_btn = $("#back-to-top");

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        back_top_btn.addClass("show");
      } else {
        back_top_btn.removeClass("show");
      }
    });

    back_top_btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });

    //initialize wow js
    new WOW({}).init();

    //initialize counterUp
    if ($(".counter span").length) {
      $(".counter span").counterUp();
    }
    if ($(".stat-counter").length) {
      $(".stat-counter").counterUp();
    }

    //initialize niceselect
    if ($("#select-lang").length) {
      $("#select-lang").niceSelect();
    }
    if ($("#select-loan-type").length) {
      $("#select-loan-type").niceSelect();
    }
    if ($("#loandetails01").length) {
      $("#loandetails01").niceSelect();
    }
    if ($("#loandetails02").length) {
      $("#loandetails02").niceSelect();
    }
    if ($("#dob-d").length) {
      $("#dob-d").niceSelect();
    }
    if ($("#dob-m").length) {
      $("#dob-m").niceSelect();
    }
    if ($("#dob-y").length) {
      $("#dob-y").niceSelect();
    }
    if ($("#sort-select").length) {
      $("#sort-select").niceSelect();
    }

    //ediatable location select
    if ($("#locationSelect").length) {
      $("#locationSelect").editableSelect();
    }

    //initialize fencybox
    if ($("[data-fancybox]").length) {
      $("[data-fancybox]").fancybox({
        animationEffect: "zoom-in-out",
      });
    }

    //initialize slick slider
    if ($(".testimonial-slider").length) {
      $(".testimonial-slider").slick({
        dots: false,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="arrow_carrot-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="arrow_carrot-right"></i></button>',
        slidesToShow: 1,
        centerMode: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 7000,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              centerMode: false,
              variableWidth: false,
            },
          },
        ],
      });
    }

    if ($(".testimonial-slider-2").length) {
      $(".testimonial-slider-2").slick({
        dots: false,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="arrow_left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="arrow_right"></i></button>',
        slidesToShow: 3,
        centerMode: false,
        autoplay: false,
        infinite: true,
        autoplaySpeed: 7000,
        slidesToScroll: 1,
        asNavFor: ".testimonial-slider-3",
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
    }

    if ($(".testimonial-slider-3").length) {
      $(".testimonial-slider-3").slick({
        dots: false,
        asNavFor: ".testimonial-slider-2",
        arrows: false,
        slidesToShow: 1,
        centerMode: false,
        autoplay: false,
        infinite: true,
        slidesToScroll: 1,
        fade: true,
      });
    }
    if ($(".feature-slider").length) {
      $(".feature-slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    if ($(".statistics-slider").length) {
      $(".statistics-slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
      });
    }
    if ($(".client-slider").length) {
      $(".client-slider").slick({
        dots: true,
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    /* new version */
    if ($(".client-slider-2").length) {
      $(".client-slider-2").slick({
        dots: true,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="arrow_left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="arrow_right"></i></button>',
        centerMode: false,
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    if ($(".loan-slider").length) {
      $(".loan-slider").slick({
        dots: true,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="arrow_left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="arrow_right"></i></button>',
        centerMode: false,
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    if ($(".news-slider").length) {
      $(".news-slider").slick({
        dots: true,
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        autoplay: false,
        infinite: true,
        autoplaySpeed: 7500,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }

    //initilalize Telephone Input Country
    if ($("#inputPhoneNumber").length) {
      $("#inputPhoneNumber").intlTelInput({
        initialCountry: "za",
        separateDialCode: false,
        utilsScript: "js/utils.js",
      });
    }

    // Initialize Dropzone 1 - ID Card
    if ($("#dropzone").length) {
      $("#dropzone").dropzone({
        paramName: "file",
        url: "upload-target",
      });
    }

// Initialize Dropzone 2 - Latest Payslip
    if ($("#dropzone1").length) {
      $("#dropzone1").dropzone({
        paramName: "file",
        url: "upload-target",
      });
    }

// Initialize Dropzone 3 - Bank Statements
    if ($("#dropzone2").length) {
      $("#dropzone2").dropzone({
        paramName: "file",
        url: "upload-target",
      });
    }
    // Validate Required Document Uploads

    // Validate Required Document Uploads
    $("#documentUploadForm").on("submit", function (event) {

      // Stop the normal form submission
      event.preventDefault();

      var idCardElement = document.querySelector("#dropzone");
      var payslipElement = document.querySelector("#dropzone1");
      var bankStatementsElement = document.querySelector("#dropzone2");

      var idCard = idCardElement ? idCardElement.dropzone : null;
      var payslip = payslipElement ? payslipElement.dropzone : null;
      var bankStatements = bankStatementsElement ? bankStatementsElement.dropzone : null;

      var isValid = true;

      // Clear previous errors
      $(".upload-error").text("");

      // Check ID Card
      if (!idCard || idCard.getAcceptedFiles().length < 1) {
        $("#idCardError").text("Please upload your ID Card.");
        isValid = false;
      }

      // Check Latest Payslip
      if (!payslip || payslip.getAcceptedFiles().length < 1) {
        $("#payslipError").text("Please upload your latest payslip.");
        isValid = false;
      }

      // Check Bank Statements
      if (!bankStatements || bankStatements.getAcceptedFiles().length < 1) {
        $("#bankStatementsError").text("Please upload your three months' bank statements.");
        isValid = false;
      }

      // Stop if documents are missing
      if (!isValid) {
        return false;
      }

      // Show success message
      $("#successMessageBox").css("display", "flex");
// OK Button - Redirect to Homepage
      $("#successOkButton").on("click", function () {
        window.location.href = "index.html";
      });
    });




    /*------------ Added Dark Mode ------------*/
    function createCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    var prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    var selectedNightTheme = readCookie("body_dark");

    if (
      selectedNightTheme == "true" ||
      (selectedNightTheme === null && prefersDark)
    ) {
      applyNight();
      $(".dark_mode_switcher").prop("checked", true);
    } else {
      applyDay();
      $(".dark_mode_switcher").prop("checked", false);
    }

    function applyNight() {
      if ($(".js-darkmode-btn .ball").length) {
        $(".js-darkmode-btn .ball").css("left", "26px");
      }
      $("body").addClass("body_dark");
    }

    function applyDay() {
      if ($(".js-darkmode-btn .ball").length) {
        $(".js-darkmode-btn .ball").css("left", "3px");
      }
      $("body").removeClass("body_dark");
    }

    $(".dark_mode_switcher").change(function () {
      if ($(this).is(":checked")) {
        applyNight();

        createCookie("body_dark", true, 999);
      } else {
        applyDay();
        createCookie("body_dark", false, 999);
      }
    });
    // End of Dark Mode
  });

  /*--------------- Start price js--------*/
  if ($(".pricing_tab_btn .toggle").length) {
    $(".pricing_tab_btn .toggle").on("click", function () {
      $(this).toggleClass("clicked");
      $(".pricing_inner").toggleClass("active");
      $(".pricing_tab_btn").toggleClass("active");
    });
  }

  if ($(".map_list").length) {
    setInterval(function () {
      var active = $(".map_list li.active");
      active.removeClass("active");
      if (active.next("li").length == 0) {
        active.parent(".map_list").find("li:first-child").addClass("active");
      } else {
        active.next("li").addClass("active");
      }
    }, 3000);
  }


  document.addEventListener("DOMContentLoaded", function () {

    // Calculator elements
    const loanAmountSlider = document.getElementById("loanAmountSlider");
    const loanDurationSlider = document.getElementById("loanDurationSlider");

    const loanAmountDisplay = document.getElementById("loanAmountDisplay");
    const loanDurationDisplay = document.getElementById("loanDurationDisplay");

    const totalPayableDisplay = document.getElementById("totalPayable");
    const interestPayableDisplay = document.getElementById("interestPayable");
    const monthlyInstalmentDisplay = document.getElementById("monthlyInstalment");

    const pieChart = document.getElementById("loanPieChart");

    // Interest rate
    const interestRate = 40;


    // Format currency
    function formatCurrency(amount) {
      return "R" + amount.toLocaleString("en-ZA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }



    // Update slider background
    function updateSliderBackground(slider) {

      const min = Number(slider.min);
      const max = Number(slider.max);
      const value = Number(slider.value);

      const percentage = ((value - min) / (max - min)) * 100;

      slider.style.setProperty("--progress", percentage + "%");
    }


    // Main calculation function
    function calculateLoan() {

      const loanAmount = Number(loanAmountSlider.value);
      const loanDuration = Number(loanDurationSlider.value);

      // Calculate interest
      const interest = loanAmount * (interestRate / 100);

      // Calculate total payable
      const totalPayable = loanAmount + interest;

      // Calculate monthly instalment
      const monthlyInstalment = totalPayable / loanDuration;


      // Update read-only textboxes
      loanAmountDisplay.value = formatCurrency(loanAmount);

      loanDurationDisplay.value =
          loanDuration + (loanDuration === 1 ? " Month" : " Months");


      // Update results
      totalPayableDisplay.textContent = formatCurrency(totalPayable);

      interestPayableDisplay.textContent = formatCurrency(interest);

      monthlyInstalmentDisplay.textContent =
          formatCurrency(monthlyInstalment);


      // Update circular graph
      const interestPercentage = (interest / totalPayable) * 100;
      const interestDegrees = interestPercentage * 3.6;

      pieChart.style.background = `
            conic-gradient(
                #c218ff 0deg ${interestDegrees}deg,
                #3185e9 ${interestDegrees}deg 360deg
            )
        `;


      // Update slider backgrounds
      updateSliderBackground(loanAmountSlider);
      updateSliderBackground(loanDurationSlider);

    }


    // Listen for loan amount changes
    loanAmountSlider.addEventListener("input", calculateLoan);


    // Listen for loan duration changes
    loanDurationSlider.addEventListener("input", calculateLoan);


    // Initial calculation
    calculateLoan();

  });

// nav link activation  //
  document.addEventListener("DOMContentLoaded", function () {

    // Get the current page
    let currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    if (currentPage === "") {
      currentPage = "index.html";
    }

    // Group application pages under Apply
    const pageGroups = {
      "personal-details.html": "loan.html",
      "document-upload.html": "loan.html"
    };

    // Check whether the current page belongs to another menu item
    currentPage = pageGroups[currentPage] || currentPage;

    // Get navigation links
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(function (link) {

      // Get the page linked to each menu item
      let linkPage = link.getAttribute("href")
          .split("/")
          .pop()
          .toLowerCase();

      // Remove active from all links
      link.classList.remove("active");

      // Activate only the matching page
      if (linkPage === currentPage) {
        link.classList.add("active");
      }


    });

  });

})(jQuery);
