/**************************************** */
let questions = [{
    titleQuestion: "Q1. A quoi sert l'opérateur === sur JavaScript ?",
    propositions: ["à comparer le type et la valeur de 2 données",
        "à opérer une affectation après la comparaison",
        "c'est un comparateur logique"
    ],
    solution: "à comparer le type et la valeur de 2 données"
},
{
    titleQuestion: "Q2. JavaScript ...",
    propositions: ["doit être compilé avant d'être exécuté",
        "s'exécute sur le client",
        "est un langage dérivé de l'ADA"
    ],
    solution: "s'exécute sur le client"
},
{
    titleQuestion: "Q3. Une variable locale déclarée dans une fonction peut être utilisée ...",
    propositions: ["dans toutes les fonctions du document HTML",
        "dans cette fonction uniquement",
        "dans cette fonction et dans le script appelant"
    ],
    solution: "dans cette fonction uniquement"
},
{
    titleQuestion: 'Q4. parseInt("101 dalmatiens"); renvoie',
    propositions: ["NaN (Not a Number)",
        "101",
        "une erreur"
    ],
    solution: "NaN (Not a Number)"
},
{
    titleQuestion: "Q5. Comment mettre un commentaire sur plusieurs lignes ?",
    propositions: ["/* */",
        "<!-- -->",
        "// //"
    ],
    solution: "/* */"
},
{
    titleQuestion: "Q6. Avec quoi peut-on faire référence à l'objet courant ?",
    propositions: ["le point",
        "this",
        "->"
    ],
    solution: "this"
},
{
    titleQuestion: "Q7. Quelle est la syntaxe correcte ?",
    propositions: ['window.getElementById("MonId");',
        'document.getElementById("MonId");',
        'getElementById(window.["MonId"]);'
    ],
    solution: 'document.getElementById("MonId");'
}];
let score = 0;
let questionIndex = 0;
const divQuestion = document.getElementById("divQuestion");
const titleQuestion = document.getElementById("titleQuestion");

buttonNextQuestion = document.getElementById("buttonNextQuestion");
buttonNextQuestion.addEventListener('click', displayQuestion);

const buttonStart = document.getElementById("buttonStart");
const divResult = document.getElementById('divResult');


function displayQuestion() {
    buttonNextQuestion.removeEventListener('click', displayQuestion);
    titleQuestion.innerHTML = questions[questionIndex].titleQuestion;
    const propositions = questions[questionIndex].propositions;
    propositions.forEach(proposition => {
        radioButtonProposition = document.createElement('input')
        labelProposition = document.createElement('label')
        listProposition = document.createElement('li')
        radioButtonProposition.setAttribute('type', 'radio')
        radioButtonProposition.setAttribute('value', proposition)
        radioButtonProposition.setAttribute('name', 'question' + questionIndex)

        labelProposition.innerHTML = proposition;
        divQuestion.appendChild(listProposition)
        listProposition.appendChild(radioButtonProposition)
        listProposition.appendChild(labelProposition)

        
        buttonNextQuestion.addEventListener('click', displayCorrection);
    })

}

function displayCorrection() {
    buttonNextQuestion.removeEventListener('click', displayCorrection);
    listRadioButtons = document.querySelectorAll("input[type=radio]");
    listRadioButtons.forEach(function(radioButton) {
    radioButton.setAttribute('disabled', false);
    if (radioButton.checked) {
        choice = radioButton.value;
        console.log(`choice: ${choice}`);
        if (choice == questions[questionIndex].solution) {
            divResult.innerHTML = "Bonne réponse";
            score++;
        } else
            divResult.innerHTML = `Mauvaise réponse, la bonne réponse était ${questions[questionIndex].solution}`;
        }
    })
    
    buttonNextQuestion.addEventListener('click', nextQuestion);
}

function nextQuestion() {
    buttonNextQuestion.removeEventListener('click', nextQuestion);
    document.querySelectorAll("input[type=radio]").forEach(radiobutton => radiobutton.parentNode.removeChild(radiobutton));
    document.querySelectorAll("label").forEach(label => label.parentNode.removeChild(label));
    divResult.innerHTML = "";
    document.querySelectorAll("li").forEach(list => list.parentNode.removeChild(list));
    questionIndex++;
    
    displayQuestion();
}