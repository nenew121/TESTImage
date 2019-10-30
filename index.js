let dde = document.documentElement;
dde.addEventListener("mousemove", e => {
  let ow = dde.offsetWidth;
  let oh = dde.offsetHeight;
  dde.style.setProperty("--mouseX", e.clientX * 100 / ow + "%");
  dde.style.setProperty("--mouseY", e.clientY * 100 / oh + "%");
});
