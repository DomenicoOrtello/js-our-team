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

// Stampa delle card
let listItem =""
for (let i = 0; i < teamMembers.length; i++) {
  const {name, role, email, img} = teamMembers[i];
  listItem +=`
  <div class="card-team bg-dark d-flex">
  <div class="card-img">
      <img src="./img/male1.png" alt="image">
  </div>
  <div class="card-info text-light me-5 p-2">
      <h3>Marco Bianchi</h3>
      <p>Designer</p>
      <p id="mail_color">marcobianchi@team.com</p>
  </div>
</div>`
}
containerCard.innerHTML = listItem;