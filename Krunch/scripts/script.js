const btnScrollTo = document.querySelector(".last");
const aboutPage = document.querySelector("#about");
const project = document.querySelectorAll(".project");
const nav = document.querySelector(".nav--titles");
const mainContainer = document.querySelector(".main--body");
const section = document.querySelectorAll(".section");
const toggleBtn = document.querySelector("#toggle");
const linksContainer = document.querySelector(".links--container");
const links = nav.querySelectorAll(".nav--links");

// Display nav links
const showAndHideLinks = function () {
  if (
    linksContainer.style.overflow === "" ||
    linksContainer.style.overflow === "hidden"
  ) {
    linksContainer.style.overflow = "visible";
    toggleBtn.style.color = "gray";
  } else {
    linksContainer.style.overflow = "hidden";
    toggleBtn.style.color = "white";
  }
};

toggleBtn.addEventListener("click", showAndHideLinks);

// Scroll into view
btnScrollTo.addEventListener("click", function () {
  aboutPage.scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".nav--links").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

// Display active link
section.forEach((sect) => {
  const sectHeight = sect.getBoundingClientRect().height;
  const active = function (entries) {
    const [entry] = entries;
    // console.log(entry);

    if (entry.isIntersecting) {
      const id = sect.id;
      links.forEach((link) => {
        const activeLink = link.getAttribute("href").slice(1);
        if (activeLink === id) link.classList.add("active");
        else link.classList.remove("active");
      });
    }
  };

  const sectionObserver = new IntersectionObserver(active, {
    root: null,
    threshold: 0,
  });

  sectionObserver.observe(sect);
});

// Display header

const home = document.querySelector("#home");
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // that os when the observer is completely out of view
  rootMargin: `${navHeight}px`, // uses only px as unit
});

headerObserver.observe(home);

// Display Overlay
project.forEach((p) =>
  p.addEventListener("mouseenter", function () {
    const overlay = p.querySelector(".overlay");
    overlay.classList.remove("hide");
  })
);
project.forEach((p) =>
  p.addEventListener("mouseleave", function () {
    const overlay = p.querySelector(".overlay");
    overlay.classList.add("hide");
  })
);

// Testimonial Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".slider");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");
  const sliderBtn = document.querySelectorAll(".slider__btn");

  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.2) translateX(-800px)';
  // slider.style.overflow = 'visible';

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDots = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * [i - slide]}%)`)
    );
  };

  // Next Slide

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDots(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDots(curSlide);
  };
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  // curSlide = 1: -100%, 0, 100%, 200%

  const init = function () {
    goToSlide(0);
    createDots();
    activateDots(0);
  };
  init();

  // Event handlers
  document.addEventListener("keydown", function (e) {
    // console.log(e);
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide(); // short circuiting
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) console.log("DOT");

    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDots(slide);
  });

  // Button visibility
  const btnVisible = function () {
    sliderBtn.forEach(function (btn) {
      btn.style.visibility = "visible";
    });
  };
  const btnHidden = function () {
    sliderBtn.forEach(function (btn) {
      btn.style.visibility = "hidden";
    });
  };
  slidesContainer.addEventListener("mouseover", btnVisible);
  slidesContainer.addEventListener("mouseout", btnHidden);
};

slider();
