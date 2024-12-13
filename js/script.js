const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// DOM elements
const containerCard = document.querySelector(".container-cards");
const memberFormElm = document.getElementById("teamForm");
const nameElm = document.getElementById("name");
const roleElm = document.getElementById("role");
const emailElm = document.getElementById("email");
const imageElm = document.getElementById("image");
const resetButton = document.getElementById("resetButton");

// Funzione per creare una card
function createCardMember(member) {
    const { name, role, email, img } = member;
    return `
    <div class="card-team bg-dark d-flex">
        <div class="card-img">
            <img src="${img}" alt="Image of ${name}">
        </div>
        <div class="card-info text-light me-5 p-2">
            <h3>${name}</h3>
            <p>${role}</p>
            <p id="mail_color">${email}</p>
        </div>
    </div>`;
}

// Funzione per aggiornare il contenitore delle card
function updateCards() {
    containerCard.innerHTML = "";
    teamMembers.forEach(member => {
        containerCard.innerHTML += createCardMember(member);
    });
}

// Stampa delle card iniziali
updateCards();

// Invio del form
memberFormElm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameElm.value;
    const role = roleElm.value;
    const email = emailElm.value;
    const img = imageElm.value;

    const newMember = { name, role, email, img };

    teamMembers.push(newMember);
    updateCards();

    // Mostra il pulsante di reset
    resetButton.classList.remove("d-none");

    memberFormElm.reset();
});

// Reset ultima carta aggiunta
resetButton.addEventListener("click", function () {
    if (teamMembers.length > 0) {
        teamMembers.pop();

        updateCards();

        if (teamMembers.length <= 6) {
            resetButton.classList.add("d-none");
        }
    }
});

