const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "Brother";

const title = document.getElementById("title");
title.textContent = name;

const messages = {
  Cesar: "Cesar, you've been my brother through every stage of life, from the good times to the difficult ones. No matter where life took us, you've always been family and someone I can count on. As Jordan and I begin this next chapter together, it would mean everything to have you standing beside me as my best man on one of the most important days of my life.",

  Jon: "Jon, we've shared a lot of memories, laughs, and good times over the years, and you've been an important part of my life. It wouldn't feel right celebrating this day without you there, and I'd be honored to have you standing beside me as Jordan and I start this next chapter together.",

  Jovanne: "Jovanne, your friendship has meant a lot to me through the years. Through good times, challenges, and everything in between, you've always been someone I respect and appreciate. Having you there on my wedding day would make it even more meaningful.",

  Antonio: "Antonio, from the memories we've already made to the ones still ahead, you've been an important part of my life. As Jordan and I prepare for this next chapter, I'd be honored to have you standing beside me and sharing in one of the biggest moments of my life.",

  Don Veto: "Don Veto, true friendships are built through time, trust, and showing up when it matters most. I'm grateful for the memories we've shared and the friendship we've built. It would mean a lot to have you standing beside me as Jordan and I celebrate our wedding day."
};

const roles = {
  Cesar: "Best Man",
  Jon: "Groomsman",
  Jovanne: "Groomsman",
  Antonio: "Groomsman",
  Don Veto: "Groomsman"
};

const text = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const choices = document.getElementById("choices");
const accept = document.getElementById("accept");
const decline = document.getElementById("decline");

const personalMessage = messages[name] || messages.Cesar;
const question = `Will you be my ${roles[name] || "Groomsman"}?`;

let step = 0;

function showText(message) {
  text.classList.remove("show");

  setTimeout(() => {
    text.textContent = message;
    text.classList.add("show");
  }, 250);
}

text.textContent = "";
text.classList.add("show");

nextBtn.addEventListener("click", () => {
  step++;

  if (step === 1) {
    showText(personalMessage);
    nextBtn.textContent = "Continue";
  } else if (step === 2) {
    showText(question);
    nextBtn.classList.add("hidden");
    choices.classList.remove("hidden");
  }
});

accept.addEventListener("click", () => {
  text.innerHTML = `
    <div class="details-screen">

      <h2>Welcome to the Wedding Party</h2>

      <p>Looking forward to celebrating with you.</p>

      <div class="detail-item">
        <strong>Date</strong>
        <span>September 18, 2027</span>
      </div>

      <div class="detail-item">
        <strong>Venue</strong>
        <span>Whispering Woods<br>Harvard, IL</span>
      </div>

      <div class="detail-item">
        <strong>Wedding Colors</strong>
        <span>Sage Green • Terracotta • Ivory • Gold</span>
      </div>

      <button onclick="window.open('https://forms.gle/8hnj87pxLqhhnxXd9', '_blank')">
        Submit Information
      </button>

      <button onclick="window.open('https://docs.google.com/spreadsheets/d/1upGMP3b4jQL3lAfNsWuc30Gsdbj4C-2yp9akQc3a-Po/edit?usp=sharing', '_blank')">
        View Wedding Party Contact List
      </button>

      <p class="signature">Luis & Jordan</p>

    </div>
  `;

  choices.classList.add("hidden");
});

decline.addEventListener("click", () => {
  showText("Yeah... that's not actually an option. 😂");
});
