const result = document.getElementById("result");
const button = document.getElementById("generateBtn");

const timePeriods = [
  "Stone Age",
  "Medieval",
  "Victorian Era",
  "World War I",
  "World War II",
  "Modern Day",
  "Post-Apocalyptic",
  "Cyberpunk Future"
];

const traits = [
  "Brave",
  "Cowardly",
  "Intelligent",
  "Reckless",
  "Kind",
  "Cold",
  "Loyal",
  "Selfish",
  "Ambitious",
  "Lazy",
  "Charismatic",
  "Paranoid"
];

button.addEventListener("click", () => {
  const time = timePeriods[Math.floor(Math.random() * timePeriods.length)];

  let trait1 = traits[Math.floor(Math.random() * traits.length)];
  let trait2 = traits[Math.floor(Math.random() * traits.length)];
  let trait3 = traits[Math.floor(Math.random() * traits.length)];

  while (trait2 === trait1) {
    trait2 = traits[Math.floor(Math.random() * traits.length)];
  }

  while (trait3 === trait1 || trait3 === trait2) {
    trait3 = traits[Math.floor(Math.random() * traits.length)];
  }

  result.innerHTML = `
    <strong>Time Period:</strong> ${time}<br>
    <strong>Traits:</strong> ${trait1}, ${trait2}, ${trait3}
  `;
});
