$(document).ready(function(){

  $('form#form1').submit(function(){
    var q1 = $("input#q1").val();
    var q2 = $("input#q2").val();
    var q3 = $("input#q3").val();
    var q4 = $("input#q4").val();

    var list1 = [q1, q2, q3, q4];
    // console.log(list1);

    var newList = [];
    newList.push([list1[1]]);
    newList.push([list1[0]]);
    newList.push([list1[2]]);
    // console.log(newList);

    $('#thing1').append(newList[0]);
    $('#thing2').append(newList[1]);
    $('#thing3').append(newList[2]);

    event.preventDefault();
  });



});
