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
    var currentSum = 0;
    var tripleCount = 0;
    //creating the default new game environment
    dealHand(7);
    $("#scoreArea").html("Score: "+ score);

    function dealHand(n) {
        //splice or split whatev
        var randFreq;
        var i;

        for (i = 0; i < n; i++) {
            if(freq.length)
            randFreq = Math.floor(Math.random()*freq.length);
            $("#hand").append("<div id='hand"+ i +"' class = 'tiles'>"+ freq[randFreq] +"<div id='hand"+ i +"val' class='tileval'>"+ val[freq[randFreq]]+"</div>");
            $("#hand" + i).draggable({snap: "#board img, #hand", containment:"#screen"});
            freq.splice(randFreq,1);

        }
    }

    $(".boardPiece").droppable({

        drop: function( event, ui ) {
            //console.log($(this));
            //console.log(parseInt(($(ui.draggable).text()).match(/\d+/g))); //using regular expression to get the string of the tile's value, and then converting it to an int
            currentSum += parseInt(($(ui.draggable).text()).match(/\d+/g)); //using regular expression to get the string of the tile's value, and then converting it to an int
        }
    })

    $(".boardPieceTriple").droppable({ //for triple piece use

        drop: function( event, ui ) {
            //console.log($(this));
            //console.log(parseInt(($(ui.draggable).text()).match(/\d+/g))); //using regular expression to get the string of the tile's value, and then converting it to an int
            currentSum += parseInt(($(ui.draggable).text()).match(/\d+/g)); //using regular expression to get the string of the tile's value, and then converting it to an int
            tripleCount++;
        }
    })

    $("#resetButton").on("click", function (e) {
        freq = ["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z"," "," "];
        $("#hand").html("");
        dealHand(7);
        updateScore(0);
        currentSum = 0;
    });

    // This is triggered when the user clicks end turn, and has (hopefully) placed some tiles
    $("#endButton").on("click", function (e) {
        $("#warning").html('');
        if (currentSum == 0) {
            $("#warning").html('Please place at least one tile!');
            return;
        }
        var numTilesDealt = 7;
        $("#hand").html("");
        if(freq.length < 7) //If the tile bag has less than 7 tiles, the amount left will be dealt
            numTilesDealt = freq.length;
        dealHand(numTilesDealt);
        currentSum *= (Math.pow(3,tripleCount));
        score += currentSum;
        tripleCount = 0;
        currentSum = 0;
        updateScore(score)


    });

    function updateScore(n) {
        score = n;
        $("#scoreArea").html("Score: "+ n);

    }

    //grid: [80,80],
    //$("#hand").append("<div id='hand0' class = 'tiles'>A<div id='hand0val' class='tileval'>3</div>");
    //$("#hand0").draggable({snap: "#board img, #hand", containment:"#screen"});
    //$(‘#’ + letter).draggable({snap: “#board img”})
})
