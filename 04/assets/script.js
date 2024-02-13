const text = document.querySelector('h1')
const bar = document.querySelector('.bar')

window.addEventListener("scroll", () => {
  let scrollNum = window.scrollY;
  let bodySize = document.body.scrollHeight - window.innerHeight;

  let per = `${percent(scrollNum, bodySize)}%`;

  text.innerText = per;
  bar.style.width = per;
})

const percent = (scrollNum, bodySize) => {
  return (scrollNum / bodySize * 100).toFixed(0);
}

const loop = () => {

}

loop();
