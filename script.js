// PASSWORD PROTECTION - using her special name
const passwordScreen = document.getElementById("passwordScreen");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");
const passwordBtn = document.getElementById("passwordBtn");
const passwordMessage = document.getElementById("passwordMessage");

// 💖 Replace "Sunshine" with the special name she gave you
const secretWord = "Tarzan";

// BACKGROUND MUSIC
const music = document.getElementById("bgMusic");

passwordBtn.addEventListener("click", () => {
  if (passwordInput.value.toLowerCase() === secretWord.toLowerCase()) {
    passwordScreen.style.display = "none";
    mainContent.style.display = "block";

    // Play music immediately on user click
    music.volume = 0;
    music.play().then(() => fadeInMusic());

    typeEffect(); // start love letter typing
  } else {
    passwordMessage.textContent = "Hmm… that’s not it. Try again 🌹";
    passwordMessage.style.color = "#8b0000";
  }
});

// LOVE LETTER TYPING
const text = `
I don’t know how to say everything I feel out loud,
so I wrote it here…

You came into my life quietly,
and somehow became everything.

You are my calm,
my joy,
and my favorite place to be.
`;
const typedText = document.getElementById("typedText");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  } else {
    // After typing finishes, show romantic line
    setTimeout(() => {
      document.getElementById("romanticLine").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("finalScreen").classList.remove("hidden");
        document.getElementById("finalScreen").scrollIntoView({ behavior: "smooth" });
      }, 3000);
    }, 1000);
  }
}

// FLOATING HEARTS
const heartsContainer = document.querySelector(".hearts");
const isMobile = window.innerWidth < 600;

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 5 + "s";
  heart.style.fontSize = Math.random() * 10 + 15 + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, isMobile ? 800 : 500);

// MUSIC FADE-IN FUNCTION
function fadeInMusic() {
  let volume = 0;
  const fade = setInterval(() => {
    if (volume < 0.6) {
      volume += 0.01;
      music.volume = volume;
    } else {
      clearInterval(fade);
    }
  }, 200);
}