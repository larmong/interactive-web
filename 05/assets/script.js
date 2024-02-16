const text = document.querySelector('h1 span')
const bar = document.querySelector('.bar')
const item1 = document.querySelector('.bg-item1')
const item2 = document.querySelector('.bg-item2')

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

window.addEventListener("scroll", () => {
  let scrollNum = window.scrollY;
  let bodySize = document.body.scrollHeight - window.innerHeight;
  let per = percent(scrollNum, bodySize);

  text.innerText = per;
  bar.style.width = `${per}%`;

  item1.style.transform = `translateX(${per}%)`
  item2.style.transform = `translateY(${-per}%)`
})

const percent = (scrollNum, bodySize) => {
  return (scrollNum / bodySize * 100).toFixed(0);
}

const loop = () => {

}

loop();
