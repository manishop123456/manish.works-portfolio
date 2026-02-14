
// MUSIC CONTROL

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click", () => {

  if (!playing) {
    music.play();
    musicBtn.innerText = "⏸️";
    playing = true;
  }
  else {
    music.pause();
    musicBtn.innerText = "🎧";
    playing = false;
  }

});


// SCROLL BUTTON

function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });

}


// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal, .reveal-gallery");

function revealOnScroll() {

  reveals.forEach(box => {

    const top = box.getBoundingClientRect().top;

    const height = window.innerHeight;

    if (top < height - 100) {

      box.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
