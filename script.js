/*
Samir Khoulani
Samir_khoulani@student.uml.edu
11/15/16
HW9
The purpose of this javascript is to check if the form was validated, and if it was
then carry out the building of the chart"," Otherwise, it does not submit, and instead
displays the error for the specific form, and what the user must enter for it to work","
*/

$(document).ready(function() {

    //data structure
    //tile
        //- letter
        //- value

    var freq = ["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z"," "," "];
    var val = {"A":1,"B":3,"C":3,"D":2,"E":1,"F":4,"G":2,"H":4,"I":1,"J":8,"K":5,"L":1,"M":3,"N":1,"O":1,"P":3,"Q":10,"R":1,"S":1,"T":1,"U":1,"V":4,"W":4,"X":8,"Y":4,"Z":10, " ": " "};
    var hand; //The current player hand with 7 tiles max
    var board; // board length of 15;
    var score = 0;
    //creating the default new game environment
    dealHand();
    $("#scoreArea").html("Score: "+ score);

    function dealHand() {
        //splice or split whatev
        var randFreq;
        var i;

        for (i = 0; i < 7; i++) {
            randFreq = Math.floor(Math.random()*freq.length);
            $("#hand").append("<div id='hand"+ i +"' class = 'tiles'>"+ freq[randFreq] +"<div id='hand"+ i +"val' class='tileval'>"+ val[freq[randFreq]]+"</div>");
            $("#hand" + i).draggable({snap: "#board img, #hand", containment:"#screen"});
            freq.splice(randFreq,1);
        }

    }

    $("#resetButton").on("click", function (e) {
        freq = ["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z"," "," "];
        $("#hand").html("");
        dealHand();
        resetScore();
    });

    function resetScore() {
        $("#scoreArea").html("Score: "+ score);

    }
    //grid: [80,80],
    //$("#hand").append("<div id='hand0' class = 'tiles'>A<div id='hand0val' class='tileval'>3</div>");
    //$("#hand0").draggable({snap: "#board img, #hand", containment:"#screen"});
    //$(‘#’ + letter).draggable({snap: “#board img”})
})
