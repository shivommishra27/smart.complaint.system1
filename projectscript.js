function motorOn() {
  alert("Motor ON");
}

function motorOff() {
  alert("Motor OFF");
}

// Fake data simulation
setInterval(() => {
  let water = Math.floor(Math.random() * 100);
  document.getElementById("water").innerText = water + "%";

  if (water > 70) {
    document.getElementById("gas").innerText = "Danger 🚨";
  } else {
    document.getElementById("gas").innerText = "Safe";
  }
}, 2000);