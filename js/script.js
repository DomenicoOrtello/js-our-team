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
const memberFormElm = document.getElementById("teamForm")
const nameElm = document.getElementById("name")
const roleElm = document.getElementById("role")
const emailElm = document.getElementById("email")
const imageElm = document.getElementById("image")

// Stampa delle card
function createCardMember(member) {
  const {name, role, email, img} = member;
  const card = `
  <div class="card-team bg-dark d-flex">
  <div class="card-img">
      <img src="./${img}" alt="./${img}">
  </div>
  <div class="card-info text-light me-5 p-2">
      <h3>${name}</h3>
      <p>${role}</p>
      <p id="mail_color">${email}</p>
  </div>
</div>` ;
return card;
}

let listItem =""
for (let i = 0; i < teamMembers.length; i++) {
  const {name, role, email, img} = teamMembers[i];
  listItem += createCardMember(teamMembers[i]);
}
containerCard.innerHTML = listItem;


// DOM EVENTS
memberFormElm.addEventListener("submit", function(event){
  event.preventDefault();
  const name = nameElm.value;
  const role = roleElm.value;
  const email = emailElm.value;
  const image = imageElm.value;
  const newMember = {
    name,
    role,
    email,
    image
  }
  teamMembers.push(newMember);
  const card = createCardMember(newMember);
  containerCard.innerHTML += card;
});