$(document).ready(function(){

  $('form#form1').submit(function(event){


    var questions = ['1', '2', '3', '4'];
    var userInputs = [];

    questions.forEach(function(question){
      var userInput = $('input#q' + question).val();
      $('#thing' + question).text(userInput);

      console.log(userInput);
      userInputs.push(userInput);
      // console.log(question);

    });
    console.log(userInputs);

    // var q1 = $("input#q1").val();
    // var q2 = $("input#q2").val();
    // var q3 = $("input#q3").val();
    // var q4 = $("input#q4").val();
    // var list1 = [q1, q2, q3, q4];


    var newList = [];



    newList.push([userInputs[1]]);
    newList.push([userInputs[0]]);
    newList.push([userInputs[2]]);
    console.log(newList);


    newList.forEach(function(input){

    });

    $('#thing1').append(newList[0]);
    $('#thing2').append(newList[1]);
    $('#thing3').append(newList[2]);

    event.preventDefault();
  });



});
