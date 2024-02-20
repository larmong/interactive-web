const lenis = new Lenis();
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


const visual = document.querySelector(".visual");
const bar = document.querySelector('.bar');

window.addEventListener("scroll", () => {
  let scrollNum = window.scrollY;
  let bodySize = document.body.scrollHeight - window.innerHeight;

  bar.style.width = `${percent(scrollNum, bodySize)}%`;


  if(scrollNum >= 325){
    visual.classList.add("header-fixed");
  } else {
    visual.classList.remove("header-fixed");
  }
})

const percent = (scrollNum, bodySize) => {
  return (scrollNum / bodySize * 100).toFixed(0);
}
