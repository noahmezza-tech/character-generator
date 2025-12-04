const result = document.getElementById("result");
const button = document.getElementById("generateBtn");

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
  "Paranoid",
  "Confident",
  "Anxious",
  "Impulsive",
  "Patient",
  "Stubborn",
  "Curious",
  "Suspicious",
  "Playful",
  "Serious",
  "Optimistic",
  "Pessimistic",
  "Creative",
  "Observant",
  "Strategic",
  "Naive",
  "Sarcastic",
  "Protective",
  "Vengeful",
  "Compassionate",
  "Greedy",
  "Fearless",
  "Cautious",
  "Meticulous",
  "Carefree",
  "Hot-Tempered",
  "Calm",
  "Rebellious",
  "Obedient",
  "Logical",
  "Emotional",
  "Secretive",
  "Talkative",
  "Quiet",
  "Leader",
  "Follower",
  "Domineering",
  "Submissive",
  "Honorable",
  "Deceitful",
  "Resourceful",
  "Wasteful",
  "Inventive",
  "Traditional",
  "Adventurous",
  "Homebound",
  "Polite",
  "Rude",
  "Hopeful",
  "Hopeless",
  "Persistent",
  "Forgetful",
  "Disciplined",
  "Chaotic",
  "Visionary",
  "Short-Sighted",
  "Tactful",
  "Blunt",
  "Altruistic",
  "Self-Centered",
  "Perceptive",
  "Clueless",
  "Zealous",
  "Apathetic",
  "Respectful",
  "Disrespectful",
  "Tenacious",
  "Unmotivated",
  "Wise",
  "Foolish",
  "Calculating",
  "Careless",
  "Fierce",
  "Timid",
  "Devoted",
  "Fickle",
  "Bold",
  "Meek",
  "Ethical",
  "Corrupt",
  "Innovative",
  "Rigid",
  "Energetic",
  "Sluggish",
  "Reliable",
  "Unreliable",
  "Stoic",
  "Dramatic",
  "Focused",
  "Scatterbrained"
];

button.addEventListener("click", () => {

  // ✅ Random year between -10,000 and 2025
  const time = Math.floor(Math.random() * (2025 - (-10000) + 1)) + (-10000);

  let selectedTraits = [];

  while (selectedTraits.length < 3) {
    let randomTrait = traits[Math.floor(Math.random() * traits.length)];

    if (!selectedTraits.includes(randomTrait)) {
      selectedTraits.push(randomTrait);
    }
  }

  // ✅ Alphabetical order
  selectedTraits.sort();

  // ✅ Display
  result.innerHTML = `
    <strong>Time Period (Year):</strong> ${time}<br>
    <strong>Traits:</strong> ${selectedTraits[0]}, ${selectedTraits[1]}, ${selectedTraits[2]}
  `;
});
