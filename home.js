const burgerIcon = document.getElementById("hamburger");
const sideNav = document.querySelector("nav");
const scrollTop = document.getElementById("scrollTop");
const rootElement = document.documentElement;

burgerIcon?.addEventListener("click", () => {
  sideNav?.classList.toggle("open");
  burgerIcon?.classList.toggle("open");
});

const detectScroll = () => {
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.1) {
    // Show button
    scrollTop.classList.remove("hide");
    scrollTop.classList.add("show");
  } else {
    // Hide button
    scrollTop.classList.add("hide");
    scrollTop.classList.remove("show");
  }
};

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", detectScroll);
