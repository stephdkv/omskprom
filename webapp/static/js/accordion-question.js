const accordionContent = document.querySelectorAll(".accordion1-content");

accordionContent.forEach((item, index) => {
  let question = item.querySelector(".questions1");

  question.addEventListener("click", () => {
    item.classList.toggle("open");
    let discription = item.querySelector(".discription1");
    if (item.classList.contains("open")) {
      discription.style.height = `${discription.scrollHeight}px`;
      item.querySelector("i").classList.replace("fa-plus", "fa-minus");
    } else {
      discription.style.height = "0px";
      item.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
    removeOpen(index);
  });
});
function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let des = item2.querySelector(".discription1");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}
