const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play();   
    } else {
      entry.target.pause();  
    }
  });
}, { threshold: 0.5 }); 

videos.forEach(video => {
  observer.observe(video);
});

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// scroll animation fade-in
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// =======================
// DARK MODE TOGGLE
// =======================
const toggleBtn = document.getElementById("darkToggle");

// check kung may saved preference
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️"; // sun icon pag naka-dark
    localStorage.setItem("dark-mode", "enabled");
  } else {
    toggleBtn.textContent = "🌙"; // moon icon pag naka-light
    localStorage.setItem("dark-mode", "disabled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const text = "JOHN KENNETH ALCANTARA BSIT2B"; // pwede mong palitan
  const roleEl = document.querySelector(".role");
  let index = 0;

  function typeEffect() {
    if (index <= text.length) {
      roleEl.innerHTML = `<span class="typing">${text.slice(0, index)}</span>`;
      index++;
      setTimeout(typeEffect, 150);
    }
  }

  typeEffect();
});


// =======================
// FLOATING OBJECTS (Rockets, Stars, etc.)
// =======================
const particleCount = 25;
const icons = ["🚀", "⭐", "✨", "☄️", "🌙"]; // dito ka pwede magdagdag

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.textContent = icons[Math.floor(Math.random() * icons.length)]; // random emoji
  document.body.appendChild(particle);

  // random position + animation duration
  const size = Math.random() * 20 + 15; // 15px - 35px
  particle.style.fontSize = `${size}px`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDuration = `${6 + Math.random() * 12}s`;
  particle.style.animationDelay = `${Math.random() * 10}s`;
}

function createFallingStar() {
  const star = document.createElement("div");
  star.classList.add("falling-star");

  // Random horizontal start position (X)
  const startX = Math.random() * window.innerWidth;

  // Random vertical offset (start off-screen)
  const startY = Math.random() * -150;

  // Apply position
  star.style.left = `${startX}px`;
  star.style.top = `${startY}px`;

  // Random animation duration (falling speed)
  const duration = 4 + Math.random() * 4; // 4 to 8 seconds

  star.style.animationDuration = `${duration}s`;

  // Random scale
  const scale = 0.6 + Math.random() * 1.2;
  star.style.transform = `rotate(45deg) scale(${scale})`;

  // Add trail effect
  star.style.boxShadow = `0 0 8px 4px rgba(255,255,255,0.3)`;

  // Add to body
  document.body.appendChild(star);

  // Remove after animation
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}



setInterval(() => {
  for (let i = 0; i < 2; i++) {
    createFallingStar(); // 2 at a time
  }
}, 500); // every 0.5s


  const apiKey = "YOUR_API_KEY"; // ← Replace with your OpenWeatherMap API Key
  const city = "San Jose City,PH";

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      const weatherDiv = document.getElementById("weather");

      if (data.main) {
        weatherDiv.innerHTML = `
          <p>🌤️ <strong>Weather:</strong> ${data.weather[0].description}</p>
          <p>🌡️ <strong>Temperature:</strong> ${data.main.temp}°C</p>
        `;
      } else {
        weatherDiv.textContent = "Weather data unavailable.";
      }
    } catch (err) {
      console.error(err);
    }
  }

  fetchWeather();

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });





