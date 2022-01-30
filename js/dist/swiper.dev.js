"use strict";

var sectionsWithCarousel = document.querySelectorAll(".section-with-carousel");
createOffsets();
window.addEventListener("resize", createOffsets);

function createOffsets() {
  var sectionWithLeftOffset = document.querySelector(".section-with-left-offset");
  var sectionWithLeftOffsetCarouselWrapper = sectionWithLeftOffset.querySelector(".carousel-wrapper");
  var sectionWithRightOffset = document.querySelector(".section-with-right-offset");
  var sectionWithRightOffsetCarouselWrapper = sectionWithRightOffset.querySelector(".carousel-wrapper");
  var offset = (window.innerWidth - 1100) / 2;
  var mqLarge = window.matchMedia("(min-width: 1200px)");

  if (sectionWithLeftOffset && mqLarge.matches) {
    sectionWithLeftOffsetCarouselWrapper.style.marginLeft = offset + "px";
  } else {
    sectionWithLeftOffsetCarouselWrapper.style.marginLeft = 0;
  }

  if (sectionWithRightOffset && mqLarge.matches) {
    sectionWithRightOffsetCarouselWrapper.style.marginRight = offset + "px";
  } else {
    sectionWithRightOffsetCarouselWrapper.style.marginRight = 0;
  }
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sectionsWithCarousel[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var section = _step.value;
    var slidesPerView = [1.5, 2.5, 3.5];

    if (section.classList.contains("section-with-left-offset")) {
      slidesPerView = [1.5, 1.5, 2.5];
    }

    var swiper = section.querySelector(".swiper");
    new Swiper(swiper, {
      slidesPerView: slidesPerView[0],
      spaceBetween: 15,
      loop: true,
      lazyLoading: true,
      keyboard: {
        enabled: true
      },
      navigation: {
        prevEl: section.querySelector(".carousel-control-left"),
        nextEl: section.querySelector(".carousel-control-right")
      },
      pagination: {
        el: section.querySelector(".swiper-pagination"),
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          return "<div class=".concat(className, ">\n            <span class=\"number\">").concat(index + 1, "</span>\n            <span class=\"line\"></span>\n        </div>");
        }
      },
      breakpoints: {
        768: {
          slidesPerView: slidesPerView[1]
        },
        1200: {
          slidesPerView: slidesPerView[2]
        }
      }
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}