/**************************************** */
let questions = [{
        questionTitle: "Q1. A quoi sert l'opérateur === sur JavaScript ?",
        propositions: ["à comparer le type et la valeur de 2 données",
            "à opérer une affectation après la comparaison",
            "c'est un comparateur logique"
        ],
        solution: "à comparer le type et la valeur de 2 données"
    },
    {
        questionTitle: "Q2. JavaScript ...",
        propositions: ["doit être compilé avant d'être exécuté",
            "s'exécute sur le client",
            "est un langage dérivé de l'ADA"
        ],
        solution: "s'exécute sur le client"
    },
    {
        questionTitle: "Q3. Une variable locale déclarée dans une fonction peut être utilisée ...",
        propositions: ["dans toutes les fonctions du document HTML",
            "dans cette fonction uniquement",
            "dans cette fonction et dans le script appelant"
        ],
        solution: "dans cette fonction uniquement"
    },
    {
        questionTitle: 'Q4. parseInt("101 dalmatiens"); renvoie',
        propositions: ["NaN (Not a Number)",
            "101",
            "une erreur"
        ],
        solution: "NaN (Not a Number)"
    },
    {
        questionTitle: "Q5. Comment mettre un commentaire sur plusieurs lignes ?",
        propositions: ["/* */",
            "<!-- -->",
            "// //"
        ],
        solution: "/* */"
    },
    {
        questionTitle: "Q6. Avec quoi peut-on faire référence à l'objet courant ?",
        propositions: ["le point",
            "this",
            "->"
        ],
        solution: "this"
    },
    {
        questionTitle: "Q7. Quelle est la syntaxe correcte ?",
        propositions: ['window.getElementById("MonId");',
            'document.getElementById("MonId");',
            'getElementById(window.["MonId"]);'
        ],
        solution: 'document.getElementById("MonId");'
    }
];
const questionTitle = document.getElementById("questionTitle");
const divQuestion = document.getElementById("divQuestion");
const divResult = document.getElementById('divResult');
const buttonStart = document.getElementById("buttonStart");
const buttonNextQuestion = document.getElementById("buttonNextQuestion");
const inputName = document.getElementById("name");
let score = 0;
let questionIndex = 0;
let name;
if (inputName)
    name = inputName.textContent;
if (buttonNextQuestion)
    buttonNextQuestion.addEventListener('click', displayQuestion);

function displayQuestion() {

    if (questionIndex < questions.length) {
        //buttonNextQuestion.removeEventListener('click', displayQuestion);

        questionTitle.innerHTML = questions[questionIndex].questionTitle;

        const propositions = questions[questionIndex].propositions;
        propositions.forEach(proposition => {
            radioButtonProposition = document.createElement('input')
            labelProposition = document.createElement('label')
            listProposition = document.createElement('li')
            radioButtonProposition.setAttribute('type', 'radio')
            radioButtonProposition.setAttribute('value', proposition)
            radioButtonProposition.setAttribute('name', 'question')

            labelProposition.innerHTML = proposition;
            divQuestion.appendChild(listProposition)
            listProposition.appendChild(radioButtonProposition)
            listProposition.appendChild(labelProposition)

            buttonNextQuestion.removeEventListener('click', displayQuestion);
            buttonNextQuestion.addEventListener('click', displayCorrection);

        })
    } else {
        window.location.href = "score.html";
    }
}

function displayCorrection() {
    const solution = questions[questionIndex].solution;
    const choosedProposition = document.querySelector('input[name = "question"]:checked');
    if (choosedProposition) {
        const choice = choosedProposition.value;
        choosedProposition.setAttribute('disabled', false);
        if (choice == solution) {
            divResult.innerHTML = "Bonne réponse";
            score++;
        } else
            divResult.innerHTML = `Mauvaise réponse, la bonne réponse était ${solution}`;
        buttonNextQuestion.removeEventListener('click', displayCorrection);
        buttonNextQuestion.addEventListener('click', nextQuestion);
    }
}

/* Fonction pour tout effacer de la question actuelle
*  Incrémenter questionIndex et appeler displayQuestion
*  Efface divResult, supprime les boutons radios, les labels et les listes
*/
function nextQuestion() {
    divResult.innerHTML = "";
    document.querySelectorAll("input[type=radio]").forEach(radiobutton => radiobutton.parentNode.removeChild(radiobutton));
    document.querySelectorAll("label").forEach(label => label.parentNode.removeChild(label));
    document.querySelectorAll("li").forEach(list => list.parentNode.removeChild(list));
    questionIndex++;
    buttonNextQuestion.removeEventListener('click', nextQuestion);
    displayQuestion();
}

function displayScore() {
    scoreDisplay = document.getElementById("divScore")
    divScore.innerHTML = "Ton score est de " + score + "sur" + question.length
}