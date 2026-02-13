function showFact() {

    var facts = [
        "Can cook Maggi in emotional situations 🍜",
        "Gym membership exists. Gym attendance does not 💪",
        "Replies fast but overthinks after sending message 📱",
        "Will share food only if deeply in love 🍕",
        "Certified expert in pretending to understand lectures 🎓"
    ];

    var randomFact = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("funFact").innerHTML = randomFact;
}
