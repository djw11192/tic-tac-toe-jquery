//create click event that shows letter
//run switch turns function to change letter on each click
//find winner on ever combination
//clear board when reset button is clicked
var $boxes = $('.boxes');
var turn = true;


var switchTurns = function(){
  console.log("click");
  if(turn){
    turn= false;
    $(this).text('X');
    $(this).off('click');

  } else{
    $(this).text('O');
    $(this).off('click');
    turn= true;
  }
  clearTie();
}

//clear on tie
function clearTie(){
  var plays = 0
  for(i=0;i<9;i++){
    if($boxes.eq(i).text()!== ""){
      plays +=1;
    }
    if(plays ===9){
      alert("tie game");
    }
    // if($boxes[i])
  }
}

$boxes.on('click',switchTurns);
