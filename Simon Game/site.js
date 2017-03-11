$(document).ready(function(){

	var moves =[];
	var count =0;
	var game =false;
	var user = [];
	var check = [];
	var c=0;
	var strict = false;

	sound={
    so1: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'), 
    so2: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'), 
    so3: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'), 
    so4: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  }

  	$('.strict').click(function(){
  		if (strict){
  			strict = false;
  			$('.strict').removeClass('btn-danger');
			$('.strict').addClass('btn-primary');
  		}
  		else{
	  		strict = true;
	  		$('.strict').addClass('btn-danger');
	  		$('.strict').removeClass('btn-primary');
  		}
  		reset();
  	})


	$('#start').click(function(){
		if(game){
			game=false;
			reset();
			$('#start').text('Start');
		}
		else{
			$('#start').text('Stop');
			game = true;
			gamebody();
		}
	});

	function reset(){
			c=0;
			user=[];
			check=[];
			moves=[];
			game=false;
			count=0;
			$('.scr').text('0');
			$('#start').text('Start');
	}

	function gamebody(){
		generate();
		for(var i=0;i<moves.length;i++){
			field = moves[i];
			showMoves();
		}
	}


	function generate() {
		console.log('start');
		game = true;


		// Generates random number for random pattern of tile
		var mv = Math.random();
		mv *= 4;
		mv = Math.ceil(mv);
		moves.push(mv);
		//console.log('moves');
		//console.log(moves);
}

	function display(){
		for(var i=0;i<moves.length;i++){
			$('.'+moves[i]).css('opacity','.5');
			$('.'+moves[i]).css('box-shadow','10px 10px 10px #888');
		}
	}

	$('.sq').click(function(){
		if (game){
			var field = $(this).attr('id');
			field = parseInt(field);
			check.push(field);
			playGame(field);
			// Here put a logic to check weather input is in order of moves
				if(field == moves[c]){
				field = parseInt(field);
				user.push(field);
				c++;
				}


				else {
					if(strict){
					reset();
					alert('Restart now');
					}

					else{
						c=0;
					user=[];
					check=[];
					alert('try again');
					}
				}
		checkwin()
		}
		})


	function showMoves() {
	  var i = 0;
	  var move = setInterval(function(){
	    playGame(moves[i]);
	    i++;
	  }, 1000)
	  
	}

	function playGame(field) {
	  $('.'+field).addClass('hover');
	  sound['so'+field];
	  setTimeout(function(){
	      $('.'+field).removeClass('hover');
	  }, 500);
	}



	function checkwin(){
		if((user.length===moves.length) && count < 11){
			document.getElementById('scr').innerHTML = count+1;
			c=0;
			count++;
			user = [];
			gamebody();
		}

		else if (count > 11){
			win();
		}
	}

	function win(){
			alert('You Win');
			reset();
		
	}
})
