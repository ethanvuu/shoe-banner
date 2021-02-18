const hammer = document.querySelector(".hammer");
const shoe2 = document.querySelector(".shoe2");
const nail = document.querySelector(".nail");
const headerHeight = document.querySelector(".shoes").getBoundingClientRect().height;
const body = document.querySelector("body");
const enterStroll = body.scrollHeight - headerHeight;
let isActive = false;

console.log(headerHeight);
document.addEventListener("scroll", () => {
  if (body.scrollTop > enterStroll) {
    hammer.classList.remove("none");
    shoe2.classList.remove("none");
    nail.classList.remove("none");
  } else {
    hammer.classList.add("none");
    shoe2.classList.add("none");
    nail.classList.add("none");
  }
});
