///////////////////////////////////////////////////////////////
//TIMER
///////////////////////////////////////////////////////////////
var timer = 120;
var intervalId;

function run() {
    intervalId = setInterval(decrement, 1000);
};

function decrement() {
    timer--;
    $("#timer").html("<h2>" + timer + "</h2>");
    if (timer <= 0) {
        check();
        timesUp();
    };
};
///////////////////////////////////////////////////////////////
//HIDE & SHOW
///////////////////////////////////////////////////////////////
$(document).ready(function() {
    $("#question-screen").hide();
    $("#results-screen").hide();
});

var startGame = $("#start-button").on('click', function() {
    $(this).parent().hide();
    $("#question-screen").show();
    run();
});

var submitAnswers = $("#submit-button").on('click', function() {
    $("#question-screen").hide();
    $("#results-screen").show();
    check();
});
///////////////////////////////////////////////////////////////
//CORRECT/INCORRECT
///////////////////////////////////////////////////////////////
function check () {

    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var q6 = document.quiz.q6.value;
    var q7 = document.quiz.q7.value;
    var q8 = document.quiz.q8.value;
    var q9 = document.quiz.q9.value;
    var q10 = document.quiz.q10.value;

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

        if (q1 == "d"){
            correct++;
        } else if (q1 == "") {
            unanswered++;
        } else {
            incorrect++
        } 

        if (q2 == "d"){
            correct++;
        } else if (q2 == "") {
            unanswered++;
        } else {
            incorrect++
        } 

        if (q3 == "a"){
            correct++;
        } else if (q3 == "") {
            unanswered++;
        } else {
            incorrect++
        } 

        if (q4 == "c"){
            correct++;
        } else if (q4 == "") {
            unanswered++;
        } else {
            incorrect++
        } 

        if (q5 == "a"){
            correct++;
        } else if (q5 == "") {
            unanswered++;
        } else {
            incorrect++
        } 

        if (q6 == "d"){
            correct++;
        } else if (q6 == "") {
            unanswered++;
        } else {
            incorrect++
        } 

        if (q7 == "d"){
            correct++;
        } else if (q7 == "") {
            unanswered++;
        } else {
            incorrect++
        } 

        if (q8 == "b"){
            correct++;
        } else if (q8 == "") {
            unanswered++;
        } else {
            incorrect++
        } 

        if (q9 == "c"){
            correct++;
        } else if (q9 == "") {
            unanswered++;
        } else {
            incorrect++
        } 

        if (q10 == "c"){
            correct++;
        } else if (q10 == "") {
            unanswered++;
        } else {
            incorrect++
        } 

        $("#correct").html("<h2>" + correct + "</h2>");
        $("#incorrect").html("<h2>" + incorrect + "</h2>");
        $("#unanswered").html("<h2>" + unanswered + "</h2>");
};
///////////////////////////////////////////////////////////////
//RESET
///////////////////////////////////////////////////////////////
var reset = $("#reset-button").on('click', function() {
    $("#question-screen").show();
    $("#results-screen").hide();
    timer = 61;
});
///////////////////////////////////////////////////////////////
//TIMES UP
///////////////////////////////////////////////////////////////
function timesUp() {
    $("#question-screen").hide();
    $("#results-screen").show();
};