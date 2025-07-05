particlesJS("particles-js", {
  particles: {
    number: { value: 200, density: { enable: true, value_area: 800 } },
    color: { 
      value: "#ffffff",  // Base particle color
    },
    opacity: {
      value: 0.3,        // Default opacity (low)
      random: true,
      anim: {
        enable: true,
        speed: 10,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 20,
        size_min: 0.3
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00E1FF",
      opacity: 0.2,      // Subtle connections
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  }
});

