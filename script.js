/*
Samir Khoulani
Samir_khoulani@student.uml.edu
11/15/16
HW7
The purpose of this javascript is to check if the form was validated, and if it was
then carry out the building of the chart"," Otherwise, it does not submit, and instead
displays the error for the specific form, and what the user must enter for it to work","
*/

$(document).ready(function() {

    //data structure
    //tile
        //- letter
        //- value

    var freq = ["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z"];
    var val = {"A":1,"B":3,"C":3,"D":2,"E":1,"F":4,"G":2,"H":4,"I":1,"J":8,"K":5,"L":1,"M":3,"N":1,"O":1,"P":3,"Q":10,"R":1,"S":1,"T":1,"U":1, "V":4, "W":4,"X":8,"Y":4,"Z":10};
    var hand; //The current player hand with 7 tiles max
    var board; // board length of 15;

    function dealHand() {
        //splice or split whatev
    }

    function resetGame() {
        freq = ["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z"];
        var hand; //The current player hand with 7 tiles max
    }

}
