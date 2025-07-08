const extraFacts = [
    "I like to bake 🧑🏽‍🍳🎂",
    "I don't drink tea or coffee every morning, but I do enjoy a cup of iced thai tea or chai every once in a while ☕",
    "I enjoy planning trips 🗺️✍️🗓️",
    "I would like to move to Chicago after graduating 🎓🌬️🏙️"
  ];
  
  function addFunFact() {
    if (extraFacts.length === 0) {
      alert("You've seen all the fun facts!");
      return;
    }
  
    const list = document.getElementById("facts-list");
    const randomIndex = Math.floor(Math.random() * extraFacts.length);
    const newFact = document.createElement("li");
  
    newFact.textContent = extraFacts[randomIndex];
    list.appendChild(newFact);
  
    extraFacts.splice(randomIndex, 1);
  }