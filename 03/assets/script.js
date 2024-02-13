let x = 0;
let targetX = 0;
let motionSpeed = 0.1;

const contentAll = document.querySelectorAll(".contents img");

window.addEventListener('mousemove', (e) => {
  x = e.pageX - window.innerWidth / 2;
})

const loop = () => {
  let speed = [35, -30, 20, -10];
  targetX += (x - targetX) * motionSpeed;

  contentAll.forEach((cont, idx) => {
    cont.style.transform = `translateX(${targetX / speed[idx]}px)`;
  })

  window.requestAnimationFrame(loop);
}

loop();
