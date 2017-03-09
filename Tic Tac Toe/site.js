$(document).ready(function(){


	var gameOn = false;
	var count =0;

	var user = 'X';
	var comp = 'O';


	$('#O').click(function(){
		user = 'O';
		comp = 'X';
		$('#X').removeClass('btn-primary');
		$(this).addClass('btn-primary');
		reset();
	})

	$('#X').click(function(){
		user = 'X';
		comp = 'O';
		$('#O').removeClass('btn-primary');
		$(this).addClass('btn-primary');
		reset();
	})


	var values = ['*','*','*','*','*','*','*','*','*'];

		function computerTurn(){
		var taken=false;

	
		while(taken === false && count !== 5){
			var random = (Math.random()*10).toFixed();

			var pos = $('#'+random).text();

			if (pos === '*'){
				$('#'+random).text(comp);
				taken = true;
				values[random-1]=comp;
			}
		}
	}


	function playerTurn(pos,user){
		var present = $('#'+pos).text();
		
		if (present === '*'){
			count++;
			values[pos-1]=user;
			$('#'+pos).text(user);
				winCondition(values,user);
				if (gameOn === false){
					computerTurn();
					winCondition(values,comp);
				}
		}
	}


	$('.sym').click(function(){

		var pos = $(this).attr('id');

		playerTurn(pos,user);

	})

	function reset(){
		values = ['*','*','*','*','*','*','*','*','*'];
		$('.sym').text('*');
		gameOn = false;
		count = 0;
	}

	function winCondition(values,user){

		if(values[0]===user && values[1]===user && values[2]===user){
			gameOn = true;
			reset();
			alert(user+' Wins');
		}

		else if(values[3]===user && values[4]===user && values[5]===user){
			gameOn = true;
			reset();
			alert(user+' Wins');
		}

		else if(values[6]===user && values[7]===user && values[8]===user){
			gameOn = true;
			reset();
			alert(user+' Wins');
		}

		else if(values[0]===user && values[3]===user && values[6]===user){
			gameOn = true;
			reset();
			alert(user+' Wins');
		}

		else if(values[1]===user && values[4]===user && values[7]===user){
			gameOn = true;
			reset();
			alert(user+' Wins');
		}

		else if(values[2]===user && values[5]===user && values[8]===user){
			gameOn = true;
			reset();
			alert(user+' Wins');
		}

		else if(values[0]===user && values[4]===user && values[8]===user){
			gameOn = true;
			reset();
			alert(user+' Wins');
		}

		else if(values[2]===user && values[4]===user && values[6]===user){
			gameOn = true;
			reset();
			alert(user+' Wins');
		}

		else{
			gameOn=false;
		}

	}



})