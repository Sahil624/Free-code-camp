$(document).ready(function(){

	var moves =[];
	var count =0;
	var game =false;
	var user = [];


	$('#start').click(function(){
		game = true;
		gamebody();
	});

	function gamebody(){
		generate();
		display();
		//var input = prompt("Enter data here", "");
		player();
		count++;
	}

	function player(){
		$('.sq').click(function(){
			var no = $(this).attr('id');
			user.push(no);
		})
		return user;
		console.log(user);
	}

	function generate() {
		console.log('start');
		game = true;


		// Generates random number for random pattern of tile
		var mv = Math.random();
		mv *= 4;
		mv = Math.ceil(mv);
		moves.push(mv);
		

		console.log(moves);
	}

	function display(){
		for(var i=0;i<moves.length;i++){
			//console.log('display');
			$('.'+moves[i]).css('opacity','.5');
			$('.'+moves[i]).css('box-shadow','10px 10px 10px #888');
		}
	}

})