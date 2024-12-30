const emoji = document.querySelector(".parent-emoji");
window.addEventListener("load", () => {
  const animateTittle = document.querySelectorAll(".parent-span");
  animateTittle.forEach((items) => {
    items.classList.add("animate-tittle-1");
  });
  emoji.classList.add("animate-tittle-2");
  setTimeout(() => {
    document.querySelector("HEADER").style.maxHeight = "200px";
    emoji.classList.add("emojiend");
  }, 3000);
});
// mouse animation
document.addEventListener("mousemove", (e) => {
  const mouse = document.querySelector(".mouse");
  mouse.style.cssText =
    "top:" +
    e.clientY +
    "px; left: " +
    e.clientX +
    "px; box-shadow:0 0 500px 100px rgba(255, 255, 255, 0.250);";
});

const ShadowHero = document.querySelector(".hero");
const shadowOne = document.querySelector(".shadow-layer-one");
const textShadow = document.querySelector(".shadow-layer-four");
ShadowHero.addEventListener("mousemove", (e) => {
  // function client for shadow hero
  let clientxy = (client, elwidth) => {
    return Math.ceil((client / elwidth) * 40);
  };
  let symmetry = (client) => {
    return Math.ceil(client / 2);
  };
  let cx = 0;
  let cy = 0; 
  if (clientxy(e.clientX, ShadowHero.clientWidth) >= 25) {
    cx = -clientxy(e.clientX, ShadowHero.clientWidth) - -20;
  }else if (clientxy(e.clientX, ShadowHero.clientWidth) >= 16) {
    cx = 0
  }else {
    cx = Math.abs(clientxy(e.clientX, ShadowHero.clientWidth) - 20)
  }
  if (clientxy(e.clientY, ShadowHero.clientHeight) >= 25) {
    cy = -clientxy(e.clientY, ShadowHero.clientHeight) - -20;
  }else if (clientxy(e.clientY, ShadowHero.clientHeight) >= 16) {
    cy = 0
  }else {
    cy = Math.abs(clientxy(e.clientY, ShadowHero.clientHeight) - 20)
  }
  shadowOne.style.boxShadow = `inset ${cx}px ${cy}px 10px 3px #E591AA`;
  textShadow.style.textShadow = `${cx}px ${cy}px 4px #E591AA , 0px 0px 16px rgba(255, 255, 255, 0.598) `
  console.log(cy);
});
