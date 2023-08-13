gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 3,
    effects: true,
  });
}

function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }

  return link.hash;
}

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, { scrollTo: elem });
  }
}

// If a link's href is within the current page, scroll to it instead
document.querySelectorAll("a[href]").forEach((a) => {
  a.addEventListener("click", (e) => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);

let btnAnimation = () => {
  const tlButton = gsap.timeline({
    default: { duration: 1 },
    repeat: -1,
    repeatDelay: 2,
  });
  tlButton
    .to(".navbar-button1", { rotate: 5 })
    .to(".navbar-button1", { rotate: -5 })
    .to(".navbar-button1", { rotate: 5 })
    .to(".navbar-button1", { rotate: 0 });
  return tlButton;
};
const tl = gsap.timeline({ default: { duration: 10 } });
tl.from(".navbar1", { opacity: 0, y: 70 });
tl.from(".main-header", { opacity: 0, y: 70 });
tl.from(".main-blocks", {
  opacity: 0,
  y: 70,
});
tl.add(btnAnimation);

window.addEventListener("resize", function () {
  if (window.innerWidth > 568) {
    gsap.to(".content-fixed", {
      duration: 1,
      scrollTrigger: {
        trigger: ".content-stop",
        start: "top 80%",
        end: "2400",
        scrub: 4,
        toggleActions: "restart none none none",
        pin: ".content-fixed",
        pinSpacing: true,
      },
    });
  }
});

let contentT = gsap.utils.toArray(".content-fixed .fixed-title");

contentT.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
      },
    }
  );
});

let infoContent = gsap.utils.toArray(".container1 .info-content");

infoContent.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: item,
        scrub: true,
      },
    }
  );
});
let infoContent2 = gsap.utils.toArray(".container2 .info-content");

infoContent2.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: item,
        scrub: true,
      },
    }
  );
});
let pluses1 = gsap.utils.toArray(
  ".pluses-block-first .pluses-block-first-first"
);

pluses1.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: -100 },
    {
      opacity: 1.5,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: item,
      },
    }
  );
});
let pluses2 = gsap.utils.toArray(".pluses-block-first .pluses-block-first-sec");

pluses2.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: 100 },
    {
      opacity: 1.5,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: item,
      },
    }
  );
});
let pluses3 = gsap.utils.toArray(
  ".pluses-block-second .pluses-block-first-first"
);

pluses3.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: -100 },
    {
      opacity: 1.5,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: item,
      },
    }
  );
});
let pluses4 = gsap.utils.toArray(
  ".pluses-block-second .pluses-block-first-sec"
);

pluses4.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: 100 },
    {
      opacity: 1.5,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: item,
      },
    }
  );
});

let worksUp = gsap.utils.toArray(".works-up .works-content");

worksUp.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0 },
    {
      opacity: 1,

      duration: 2,
      scrollTrigger: {
        trigger: item,
      },
    }
  );
});
let worksDown = gsap.utils.toArray(".works-down .works-content");

worksUp.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0 },
    {
      opacity: 1,

      duration: 2,
      scrollTrigger: {
        trigger: item,
      },
    }
  );
});

let info1 = gsap.utils.toArray(".input-info");

info1.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: -100 },
    {
      opacity: 1.5,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: item,
      },
    }
  );
});

let info2 = gsap.utils.toArray("form");

info2.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: 100 },
    {
      opacity: 1.5,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: item,
      },
    }
  );
});

let questions = gsap.utils.toArray(".accordion1 .accordion1-content");

questions.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: item,
      },
    }
  );
});

let fixedTitleP = gsap.utils.toArray(".content-fixed .fixed-title-p");

fixedTitleP.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: item,
      },
    }
  );
});
