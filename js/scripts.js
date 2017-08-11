$(document).ready(function(){
  var front, back, yes, no, big, small, pro, con
  $(".page1btn").click(function(){
    $(".page").addClass("hide");
    $(".page2").removeClass("hide");
  });

  $(".page2btn").click(function(){
    if ($("input[value='front']").prop("checked")){
      front = true;
      $(".page").addClass("hide");
      alert('CSS_Design');
      //finalPage();
    }
    else if ($("input[value='back']").prop("checked")){
      back = true;
      $(".page").addClass("hide");
      $(".page3").removeClass("hide");
    }
    else{
      alert ('Please select an option!');
    }
  });

  $(".page3btn").click(function(){
    if ($("input[value='yes']").prop("checked")){
      yes = true;
      $(".page").addClass("hide");
      $(".page4").removeClass("hide");
    }
    else if ($("input[value='no']").prop("checked")){
      no = true;
      $(".page").addClass("hide");
      $(".page4").removeClass("hide");
    }
    else{
      alert ('Please select an option');
    }
  });

  $(".page4btn").click(function(){
    if ($("input[value='big']").prop("checked")){
      big = true;
      $(".page").addClass("hide");
      if (back == true && no == true){
        alert('Java');
        //finalPage();
      }
      else if (back == true && yes == true){
        $(".page5").removeClass("hide");
      }
      else{
        alert('Please select an option!')
      }
    }
    else if ($("input[value='small']").prop("checked")){
      small = true;
      $(".page").addClass("hide");
      if (back == true && no == true){
        alert('Ruby');
        //finalPage();
      }
      else if (back == true && yes == true){
        alert('PHP alt');
        //finalPage();
      }
      else {
        alert ('Please select an option!')
      }
    }
    else{
      alert ('Please select an option!')
    }

  });


  $(".page5btn").click(function(){
    if ($("input[value='pro']").prop("checked")){
      pro = true;
      $(".page").addClass("hide");
      if(back == true && yes == true && big == true){
        alert('C#');
        //finalPage();
      }
      else{
        alert ('Please select an option')
      }
    }
    else if ($("input[value='con']").prop("checked")){
      con = true;
      $(".page1").removeClass("hide");
      if(back = true && yes == true && big == true){
        alert('PHP');
        //finalPage();
      }
      else{
        alert ('Please select an option!')
      }
    }
    else{
      alert ('Please select an option!')
    }
  });

});
