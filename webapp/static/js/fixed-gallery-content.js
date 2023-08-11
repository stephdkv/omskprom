const hideContent = () => {
  const hiddenNavClassName = "content-hidden";
  const fixedNavClassName = "content-fixed";
  const headerHeight = 100;
  let initialYvalue = window.scrollY;
  let body = document.querySelector(".main-gallery");

  window.addEventListener("scroll", (ev) => {
    const scrollY = window.scrollY;
    if (scrollY > headerHeight) {
      makeItFixed();
    } else {
      makeItNotFixed();
    }
  });
  function makeItFixed() {
    body.classList.add(fixedNavClassName);
  }
  function makeItNotFixed() {
    body.classList.remove(fixedNavClassName);
  }
};

hideContent();
