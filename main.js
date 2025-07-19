var typed = new Typed(".text", {
  strings: ["Full-Stack Web Developer","Frontend Developer","React Enthusiast","UI/UX Learner","Tech Explorer"],
  typeSpeed: 100,
  backSpeed: 100,    
  backDelay: 1000,
  loop: true
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};
document.addEventListener("DOMContentLoaded", function () {
  VANTA.NET({
    el: ".vanta-bg", // match the ID in your HTML
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x81818e,             // neon blue
    backgroundColor:0xf3f4f4,   // dark base
    points: 12.00,
    maxDistance: 22.00,
    spacing: 16.00
  });
});

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  db.collection("contacts").add({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    timestamp: new Date()
  }).then(() => {
    alert("Message sent!");
    document.querySelector("form").reset();
  }).catch((error) => {
    alert("Error: " + error);
  });
});

