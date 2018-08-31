particlesJS("particles-js", {
  particles: {
    number: { value: 15, density: { enable: false, value_area: 1000 } },
    color: { value: "#5bbb4f" },
    shape: {
      type: "image",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 4 },
      image: { src: "translog.png", width: 550, height: 155}
    },
    opacity: {
      value: 0.4,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 100,
      random: true,
      anim: { enable: false, speed: 1, size_min: 100, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#5bbb4f",
      opacity: 0.3,
      width: 0
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 500, line_linked: { opacity: 0.5 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
