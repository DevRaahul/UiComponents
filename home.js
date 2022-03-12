const burgerIcon = document.getElementById("hamburger");
const sideNav = document.querySelector("nav");

burgerIcon?.addEventListener("click", () => {
  console.log("click");
  sideNav?.classList.toggle("open");
  burgerIcon?.classList.toggle("open");
});
