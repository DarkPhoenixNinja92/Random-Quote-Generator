const quoteArray = [{
        "author": 'Darth Revan',
        "quote": "Honor is a fool's prize. Glory is of no use to the dead."
    },
    {
        "author": "Bayonetta",
        "quote": "I’ve got a fever and my only cure is more dead angels."
    },
    {
        "author": "Diablo",
        "quote": "Not even death can save you from me."
    },
    {
        "author": "Master Chief",
        "quote": "I need a weapon."
    },
    {
        "author": "Davion, the Dragon Knight",
        "quote": "Steel wins battles, Gold wins wars."
    },
    {
        "author": "Javik",
        "quote": "Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters. Their silence is your answer."
    },
    {
        "author": "Kerrigan",
        "quote": "Yeah, I’m still the Queen Bitch of the Universe."
    },
    {
        "author": "Tiny Tina",
        "quote": "When you are ready to begin the Tea-Party, please smack Mister Flesh Stick in his bitch face."
    }
];

let generateQuote = () => {
    const random = Number.parseInt(Math.random() * quoteArray.length + 1);
    document.querySelector('#quote').textContent = `"${quoteArray[random].quote}"`;
    document.querySelector('#quoteAuthor').textContent = `--${quoteArray[random].author}`;

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("quote-select").addEventListener('click', generateQuote);
})