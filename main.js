let header = document.querySelector("header");
let FirstTextSpans = document.querySelectorAll(".animated-text .one span");
let SecondTextSpans = document.querySelectorAll(".animated-text .two span");
let ThirdTextSpans = document.querySelectorAll(".animated-text .three span");
let burgerButton = document.querySelector(".burger-mark");
let navMenu = document.querySelector(".navs");
let navItemsLinks = document.querySelectorAll("header .navs li a");
let achievmentsNumbers = document.querySelectorAll(".about .box .number");
let onAppearAnimation = document.querySelectorAll(".be-animated");
let icons = document.querySelectorAll(
  ".capability #two .holder .box .middle-circle .icon"
);
let iconsCircle = document.querySelector(
  ".capability #two .holder .box .middle-circle"
);
let textHolders = document.querySelectorAll(
  ".capability #two .holder .box .middle-circle .textHolder"
);
let sections = document.querySelectorAll("section");
let portfolioLinks = document.querySelectorAll(
  "#portfolio #two .catogories li"
);
let portfolioImgs = document.querySelectorAll("#portfolio #two .gallary .box");
let gallary = document.querySelector("#portfolio #two .gallary");
let slider = document.querySelector("#portfolio #three .slider");
let clientsBox = document.querySelectorAll("#portfolio #three .slider .box");
let dots = document.querySelectorAll("#portfolio #three .dots span");
let selectMenuInput = document.querySelector(
  ".contact #two .holder > .services .input"
);
let selectMenu = document.querySelector(
  ".contact #two .holder > .services .options"
);
let selectMenuOptions = document.querySelectorAll(
  ".contact #two .holder > .services .options li"
);

let mainCssFile = Array.from(document.styleSheets).filter((sheet) => {
  return sheet.title === "maincss";
});

// setting up header animations

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.style.setProperty("background-color", "#000");
  } else {
    header.style.setProperty("background-color", "var(--overlay-color)");
  }
};
navItemsLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navItemsLinks.forEach((itemLink) => {
      itemLink.parentElement.classList.remove("active");
    });
    this.parentElement.classList.add("active");
    setTimeout(() => {
      navMenu.classList.remove("active");
      burgerButton.classList.remove("active");
    }, 500);
  });
});
let activeLinkObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting) {
        navItemsLinks.forEach((link) => {
          link.parentElement.classList.remove("active");
          if (link.getAttribute("href").replace("#", "") === entery.target.id) {
            link.parentElement.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: [0] }
);
sections.forEach((Section) => activeLinkObserver.observe(Section));
// collapse button
burgerButton.addEventListener("click", function (e) {
  this.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// setting animated text

let FirstTextActive = false;
let SecondTextActive = true;
let ThirdTextActive = true;
setInterval(() => {
  if (!FirstTextActive) {
    FirstTextSpans.forEach((span) => {
      span.style.setProperty("animation", "text-animate 2.5s linear");
    });
    setTimeout(() => {
      FirstTextSpans.forEach((span) => {
        span.style.setProperty("animation", "none");
      });
      FirstTextActive = true;
      SecondTextActive = false;
      ThirdTextActive = true;
    }, 2500);
  } else if (!SecondTextActive) {
    SecondTextSpans.forEach((span) => {
      span.style.setProperty("animation", "text-animate 2.5s linear");
    });
    setTimeout(() => {
      SecondTextSpans.forEach((span) => {
        span.style.setProperty("animation", "none");
      });
      FirstTextActive = true;
      SecondTextActive = true;
      ThirdTextActive = false;
    }, 2500);
  } else if (!ThirdTextActive) {
    ThirdTextSpans.forEach((span) => {
      span.style.setProperty("animation", "text-animate 2.5s linear");
    });
    setTimeout(() => {
      ThirdTextSpans.forEach((span) => {
        span.style.setProperty("animation", "none");
      });
      FirstTextActive = false;
      SecondTextActive = true;
      ThirdTextActive = true;
    }, 2500);
  }
}, 0);

// setting animation for numbers
function numberObserver(numberElemenT, increamenter, stopValue) {
  let numberObserver = new IntersectionObserver(
    (enteries) =>
      enteries.forEach((entery) => {
        if (entery.isIntersecting === true) {
          entery.target.innerHTML = "0";
          entery.target.parentElement.style.setProperty(
            "transform",
            "translateY(0) scale(1)"
          );
          let counter = setInterval(() => {
            entery.target.innerHTML =
              parseInt(entery.target.innerHTML) + increamenter;
            if (parseInt(entery.target.innerHTML) - numberElemenT <= 500) {
              increament = 100;
            }
            if (parseInt(entery.target.innerHTML) === stopValue) {
              clearInterval(counter);
            }
          }, 100);
          numberObserver.disconnect();
        }
      }),
    { threshold: [0] }
  );

  numberObserver.observe(numberElemenT);
}
numberObserver(achievmentsNumbers[0], 5000, 90000);
numberObserver(achievmentsNumbers[1], 20, 340);
numberObserver(achievmentsNumbers[2], 5, 90);
numberObserver(achievmentsNumbers[3], 1000, 20000);

// setting on load animation
let loadObserver = new IntersectionObserver(
  (enteries) =>
    enteries.forEach((entery) => {
      if (entery.isIntersecting === true) {
        entery.target.style.setProperty("transform", "translateY(0) scale(1)");
        entery.target.parentElement.style.setProperty(
          "transform",
          "translateY(0)"
        );
      }
    }),
  { threshold: [0] }
);

onAppearAnimation.forEach((e) => loadObserver.observe(e));

// setting animation for the circle
let iconsCounter = 1,
  circleInterval;
let circleIconsObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting === true) {
        let i = 111;
        if (window.innerWidth >= 992) {
          icons.forEach((icon) => {
            mainCssFile[0].rules[i].style.setProperty(
              "margin",
              icon.style.getPropertyValue("--margin")
            );
            mainCssFile[0].rules[i].style.setProperty(
              "-webkit-margin",
              icon.style.getPropertyValue("--margin")
            );
            mainCssFile[0].rules[i].style.setProperty(
              "-moz-margin",
              icon.style.getPropertyValue("--margin")
            );
            mainCssFile[0].rules[i].style.setProperty(
              "-ms-margin",
              icon.style.getPropertyValue("--margin")
            );
            mainCssFile[0].rules[i].style.setProperty(
              "-o-margin",
              icon.style.getPropertyValue("--margin")
            );
            mainCssFile[0].rules[i].style.setProperty("z-index", "initial");
            i++;
          });
        }
        if (window.innerWidth > 768 && window.innerWidth < 992) {
          icons.forEach((icon) => {
            mainCssFile[0].rules[i].style.setProperty(
              "margin",
              icon.style.getPropertyValue("--margin992")
            );
            mainCssFile[0].rules[i].style.setProperty(
              "-webkit-margin",
              icon.style.getPropertyValue("--margin992")
            );
            mainCssFile[0].rules[i].style.setProperty(
              "-moz-margin",
              icon.style.getPropertyValue("--margin992")
            );
            mainCssFile[0].rules[i].style.setProperty(
              "-ms-margin",
              icon.style.getPropertyValue("--margin992")
            );
            mainCssFile[0].rules[i].style.setProperty(
              "-o-margin",
              icon.style.getPropertyValue("--margin992")
            );
            mainCssFile[0].rules[i].style.setProperty("z-index", "initial");
            i++;
          });
        }

        setTimeout(() => {
          textHolders[0].classList.remove("active");
        }, 3700);

        circleInterval = setInterval(() => {
          textHolders.forEach((holder) => {
            holder.classList.remove("active");
          });
          icons.forEach((icon, index) => {
            icon.classList.remove("active");
            if (index === iconsCounter) {
              icon.classList.add("active");
              textHolders.forEach((holder) => {
                if (parseInt(holder.dataset.num) === index) {
                  holder.classList.add("active");
                  setTimeout(() => {
                    holder.classList.remove("active");
                  }, 3700);
                }
              });
            }
          });
          iconsCounter++;
          if (iconsCounter === icons.length) {
            iconsCounter = 0;
          }
        }, 4000);
      }
    });

    iconsCircle.onresize = () => {
      if (iconsCircle.style.width > 160) {
        let i = 111;
        icons.forEach((icon) => {
          mainCssFile[0].rules[i].style.setProperty(
            "margin",
            icon.style.getPropertyValue("--margin")
          );
          mainCssFile[0].rules[i].style.setProperty(
            "-webkit-margin",
            icon.style.getPropertyValue("--margin")
          );
          mainCssFile[0].rules[i].style.setProperty(
            "-moz-margin",
            icon.style.getPropertyValue("--margin")
          );
          mainCssFile[0].rules[i].style.setProperty(
            "-ms-margin",
            icon.style.getPropertyValue("--margin")
          );
          mainCssFile[0].rules[i].style.setProperty(
            "-o-margin",
            icon.style.getPropertyValue("--margin")
          );
          i++;
        });
      }
    };
  },
  { threshold: [0] }
);

circleIconsObserver.observe(iconsCircle);

icons.forEach((icon) => {
  icon.addEventListener("mouseover", function () {
    clearInterval(circleInterval);
    textHolders.forEach((holder) => {
      holder.classList.remove("active");
    });
    icons.forEach((icon) => icon.classList.remove("active"));
    this.classList.add("active");
    textHolders.forEach((holder) => {
      if (holder.dataset.num === this.dataset.num) {
        holder.classList.add("active");
      }
    });
  });
});

icons.forEach((icon) => {
  icon.addEventListener("mouseleave", function () {
    circleInterval = setInterval(() => {
      textHolders.forEach((holder) => {
        holder.classList.remove("active");
      });
      icons.forEach((icon, index) => {
        icon.classList.remove("active");
        if (index === iconsCounter) {
          icon.classList.add("active");
          textHolders.forEach((holder) => {
            if (parseInt(holder.dataset.num) === index) {
              holder.classList.add("active");
              setTimeout(() => {
                holder.classList.remove("active");
              }, 3700);
            }
          });
        }
      });
      iconsCounter++;
      if (iconsCounter === icons.length) {
        iconsCounter = 0;
      }
    }, 4000);
  });
});

// setting up portfolio links functionality
window.onload = function () {
  if (window.innerWidth > 778 && window.innerWidth <= 992) {
    mainCssFile[0].rules[142].style.setProperty(
      "grid-template-areas",
      gallary.style.getPropertyValue("--areas992")
    );
  }
};
window.onresize = function () {
  if (window.innerWidth > 778 && window.innerWidth <= 992) {
    mainCssFile[0].rules[142].style.setProperty(
      "grid-template-areas",
      gallary.style.getPropertyValue("--areas992")
    );
  } else {
    mainCssFile[0].rules[142].style.setProperty(
      "grid-template-areas",
      gallary.style.getPropertyValue("--areas")
    );
  }
};

portfolioLinks.forEach((link) => {
  link.addEventListener("click", function () {
    portfolioLinks.forEach((link) => link.classList.remove("active"));
    portfolioImgs.forEach((img) => {
      img.style.setProperty("opacity", "0");
      setTimeout(() => {
        img.style.setProperty("display", "none");
      }, 500);
    });
    mainCssFile[0].rules[142].style.removeProperty("grid-template-areas");
    let i = 147;
    portfolioImgs.forEach((img) => {
      mainCssFile[0].rules[i].style.removeProperty("grid-area");
      if (link.innerHTML === img.dataset.name) {
        link.classList.add("active");
        setTimeout(() => {
          img.style.setProperty("display", "block");
          img.style.setProperty("opacity", "1");
        }, 500);
        if (window.innerWidth > 992) {
          mainCssFile[0].rules[142].style.setProperty(
            "grid-template-columns",
            "repeat(3, 1fr)"
          );
        } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
          mainCssFile[0].rules[142].style.setProperty(
            "grid-template-columns",
            "repeat(2, 1fr)"
          );
        }
      }
      i++;
    });
    if (link.innerHTML === "ALL") {
      link.classList.add("active");
      if (window.innerWidth > 768) {
        mainCssFile[0].rules[142].style.setProperty(
          "grid-template-columns",
          "none"
        );
      }
      let i = 147;
      portfolioImgs.forEach((img) => {
        mainCssFile[0].rules[i].style.setProperty(
          "grid-area",
          img.dataset.number
        );
        setTimeout(() => {
          if (window.innerWidth > 992) {
            mainCssFile[0].rules[142].style.setProperty(
              "grid-template-areas",
              gallary.style.getPropertyValue("--areas")
            );
          } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
            mainCssFile[0].rules[142].style.setProperty(
              "grid-template-areas",
              gallary.style.getPropertyValue("--areas992")
            );
          }
          img.style.setProperty("display", "block");
          img.style.setProperty("opacity", "1");
        }, 500);
        i++;
      });
    }
  });
});

// setting up Testmonials functionality
let margin = -100;
let activeDot = 1;
let dotsObserver = new IntersectionObserver((enteries) => {
  enteries.forEach((entery) => {
    if (entery.isIntersecting) {
      setInterval(() => {
        clientsBox[0].style.marginLeft = `${margin}%`;
        margin += -100;
        if (-margin > 500) {
          margin = 0;
        }
        dots.forEach((dot, index) => {
          dot.classList.remove("active");
          if (index === activeDot) {
            dot.classList.add("active");
          }
        });
        activeDot++;
        if (activeDot > 5) {
          activeDot = 0;
        }
        dotsObserver.disconnect();
      }, 3500);
    }
  });
});
dotsObserver.observe(slider);

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    margin = index * -100;
    clientsBox[0].style.marginLeft = `${margin}%`;
    activeDot = index;
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
      if (index === activeDot) {
        dot.classList.add("active");
      }
    });
  });
});

// setting up form select menu
let beforeActive = true;
let afterActive = false;
selectMenuInput.addEventListener("click", function () {
  if (beforeActive) {
    selectMenuInput.style.setProperty("--before", "0");
    selectMenuInput.style.setProperty("--after", "1");
    beforeActive = false;
  } else {
    selectMenuInput.style.setProperty("--before", "1");
    selectMenuInput.style.setProperty("--after", "0");
    beforeActive = true;
  }
});
selectMenuOptions.forEach((Option) => {
  if (Option.classList.contains("active")) {
    selectMenuInput.innerHTML = Option.innerHTML;
  }
  Option.addEventListener("click", function () {
    selectMenuInput.style.setProperty("--before", "1");
    selectMenuInput.style.setProperty("--after", "0");
    beforeActive = true;
    selectMenuOptions.forEach((one) => {
      one.classList.remove("active");
      this.classList.add("active");
      selectMenuInput.innerHTML = this.innerHTML;
      selectMenu.classList.toggle("active");
    });
  });
});
selectMenuInput.addEventListener("click", function () {
  selectMenu.classList.toggle("active");
});
