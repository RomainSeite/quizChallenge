/**************************************** */
let question = [{
    title: "Q1. A quoi sert l'opérateur === sur JavaScript ?",
    proposition: ["à comparer le type et la valeur de 2 données",
        "à opérer une affectation après la comparaison",
        "c'est un comparateur logique"
    ],
    solution: "à comparer le type et la valeur de 2 données"
},
{
    title: "Q2. JavaScript ...",
    proposition: ["doit être compilé avant d'être exécuté",
        "s'exécute sur le client",
        "est un langage dérivé de l'ADA"
    ],
    solution: "s'exécute sur le client"
},
{
    title: "Q3. Une variable locale déclarée dans une fonction peut être utilisée ...",
    proposition: ["dans toutes les fonctions du document HTML",
        "dans cette fonction uniquement",
        "dans cette fonction et dans le script appelant"
    ],
    solution: "dans cette fonction uniquement"
},
{
    title: 'Q4. parseInt("101 dalmatiens"); renvoie',
    proposition: ["NaN (Not a Number)",
        "101",
        "une erreur"
    ],
    solution: "NaN (Not a Number)"
},
{
    title: "Q5. Comment mettre un commentaire sur plusieurs lignes ?",
    proposition: ["/* */",
        "<!-- -->",
        "// //"
    ],
    solution: "/* */"
},
{
    title: "Q6. Avec quoi peut-on faire référence à l'objet courant ?",
    proposition: ["le point",
        "this",
        "->"
    ],
    solution: "this"
},
{
    title: "Q7. Quelle est la syntaxe correcte ?",
    proposition: ['window.getElementById("MonId");',
        'document.getElementById("MonId");',
        'getElementById(window.["MonId"]);'
    ],
    solution: 'document.getElementById("MonId");'
}
];
let score = 0;
let questionIndex = 0;
const divQuestion = document.getElementById("divQuestion");
const titleQuestion = document.getElementById("titleQuestion");
titleQuestion.innerHTML = "  ";

submitBut = document.getElementById("btn");
submitBut.addEventListener('click', displayQuestion);

const startBut = document.getElementById("startbtn");


function displayQuestion() {
titleQuestion.innerHTML = question[questionIndex].title;
const propositions = question[questionIndex].proposition;
propositions.forEach(proposition => {
    inputElt = document.createElement('input')
    labelElt = document.createElement('label')
    inputElt.setAttribute('type', 'radio')
    inputElt.setAttribute('value', proposition)
    inputElt.setAttribute('name', 'question' + questionIndex)

    labelElt.innerHTML = proposition;
    divQuestion.appendChild(inputElt)
    divQuestion.appendChild(labelElt)
    inputElt.addEventListener('click', displayCorrection);
    submitBut.removeEventListener('click', displayQuestion);
})

}
const divResult = document.getElementById('divResult');

function displayCorrection() {
radioList = document.querySelectorAll("input[type=radio]");
radioList.forEach(function(rad) {
    if (rad.checked) {
        choice = rad.value;
        console.log(`choice: ${choice}`);
        if (choice == question[questionIndex].solution) {
            divResult.innerHTML = "Bonne réponse";
            score++;
            console.log("ton score est de :" + score);
        } else
            divResult.innerHTML = "Mauvaise réponse";
    }
})
submitBut.addEventListener('click', nextQuestion);
}

function nextQuestion() {
document.querySelectorAll("input[type=radio]").forEach(radiobutton => radiobutton.parentNode.removeChild(radiobutton));
document.querySelectorAll("label").forEach(label => label.parentNode.removeChild(label)); questionIndex++; displayQuestion();
}