const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "Brother";

const title = document.getElementById("title");
title.textContent = name;

const messages = {
  Cesar: "Cesar, you've been my brother through every stage of life, from the good times to the difficult ones. No matter where life took us, you've always been family and someone I can count on. As Jordan and I begin this next chapter together, it would mean everything to have you standing beside me as my best man on one of the most important days of my life.",

  Jon: "Jon, primo, my man, we grew up together. We played sports, gamed together, and we still do every now and then. You're still an important person to me, man. I don't know if you know that, but now you do. I wish we could hang out more, have the conversations we used to have, and get back into games like DayZ or hitting trick shots like the old days. I want to celebrate my wedding with you standing by my side, alongside all the other amazing people I've chosen to be there with me.",

  Jovanne: "Jovanne, my boy, ever since The Springs you've always been a real one, man. Whether it's the carnes here at the crib, watching games, celebrating our birthdays, or just hanging out, you've always been there. That's why I like having you around. It just wouldn't feel like a real wedding if you weren't there. You've seen the young Louie grow with Jordan, and now you'll get to see us take the next step.",
  
  Antonio: "Antonio, you’re probably wondering why you got this random ass card, bro. You’ve known me for a long time. You’ve come over to my house, always been down to hang out, been there for me during some of my worst moments, and shared some of my best ones too. Just like I’ve always tried to be there for you through your difficult times. I want you to be a part of my wedding alongside the other amazing people I’ve chosen. It just wouldn’t feel right not having you there, especially to watch me marry the woman you started calling Mrs. Cruz long before she officially got the title.",

  DonVeto: "DonVeto, my man, you’ve always been a real one for me. I appreciate you always being there, whether it’s to chill, game, party, or just hang out. You’re always down for whatever, and that means a lot to me.  One thing I really respect about you is that you show up. Not many people always do, but you’ve always been there when it matters, and I don’t take that for granted. It wouldn’t feel right not having you there. That’s why I went out of my way to make this for you, because I want you there with me on one of the biggest days of my life."
  };

const roles = {
  Cesar: "Best Man",
  Jon: "Groomsman",
  Jovanne: "Groomsman",
  Antonio: "Groomsman",
  DonVeto: "Groomsman"
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
