//assign "0" to the "score" variable
let score = 0

//Define functions
function checkAnswers(){
    //assign "0" to the "score" variable
    let score = 0;
    let result = 0;

    //assign the quiz elements to the quiz variable (simplifies going to fetch data from html)

    let quiz = document.forms.quiz.elements;
    //assign the answer to the question to the answer1 variable:

    answer1 = quiz.colour.value;
    //check the answer to the first question:
    if (answer1 == "pink"){
        score = score + 1;
    }
    else if (answer1 == "yellow"){
        score = score + 2;
    }
    else if (answer1 == "green"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    answer2 = quiz.season.value;
    //check the answer to the second question:
    if (answer2 == "spring"){
        score = score + 1;
    }
    else if (answer2 == "summer"){
        score = score + 2;
    }
    else if (answer2 == "autumn"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    answer3 = quiz.animal.value;
    //check the answer to the third question:
    if (answer3 == "cat"){
        score = score + 1;
    }
    else if (answer3 == "dog"){
        score = score + 2;
    }
    else if (answer3 == "shark"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    answer4 = quiz.music.value;
    //check the answer to the fourth question:
    if (answer4 == "pop"){
        score = score + 1;
    }
    else if (answer4 == "rock"){
        score = score + 2;
    }
    else if (answer4 == "hipHop"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    answer5 = quiz.dayOff.value;
    //check the answer to the fourth question:
    if (answer5 == "atHome"){
        score = score + 1;
    }
    else if (answer5 == "beach"){
        score = score + 2;
    }
    else if (answer5 == "mountains"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    answer6 = quiz.travel.value;
    //check the answer to the fourth question:
    if (answer6 == "foot"){
        score = score + 1;
    }
    else if (answer6 == "car"){
        score = score + 2;
    }
    else if (answer6 == "train"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    //assigning results
    if (score < 11){
        result = "Spain"
    }
    else if (score < 15){
        result = "Mexico"
    }
    else if (score < 19){
        result = "Argentina"
    }
    else {
        result = "Colombia"
    }

    //display the result
    alert ("The country you should visit is " + result);
}