const progressCircle = document.getElementById("progress-circle");
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const scrollFraction = scrollTop / scrollHeight;
  const strokeDashoffset = 282.6 - 282.6 * scrollFraction;
  progressCircle.style.strokeDashoffset = strokeDashoffset;
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
