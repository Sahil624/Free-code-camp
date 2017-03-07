
// var a = $(".3").html();
// var b = $(".1").html();
// var op = $(".p").html();
// console.log(a);
// console.log(b);
// console.log(op);

document.getElementById('res').innerHTML = '';

var ops = [];
	
	$(".1").click(function(){
		$(".res").append(1);
		ops.push(1);
	});

	$(".2").click(function(){
		$(".res").append(2);
		ops.push(2);
	});

	$(".3").click(function(){
		$(".res").append(3);
		ops.push(3);
	});

	$(".4").click(function(){
		$(".res").append(4);
		ops.push(4);
	});

	$(".5").click(function(){
		$(".res").append(5);
		ops.push(5);
	});

	$(".6").click(function(){
		$(".res").append(6);
		ops.push(6);
	});

	$(".7").click(function(){
		$(".res").append(7);
		ops.push(7);
	});

	$(".8").click(function(){
		$(".res").append(8);
		ops.push(8);
	});

	$(".9").click(function(){
		$(".res").append(9);
		ops.push(9);
	});

	$(".0").click(function(){
		$(".res").append(0);
		ops.push(0);
	});

	$(".p").click(function(){
		$(".res").append('+');
		ops.push('+');
	});

	$(".m").click(function(){
		$(".res").append('-');
		ops.push('-');
	});

	$(".mul").click(function(){
		$(".res").append('*');
		ops.push('*');
	});

	$(".div").click(function(){
		$(".res").append('/');
		ops.push('/');
	});





	$(".e").click(function(){
		var nums = [];
		var final = [];
		var j=0;

		for(var i=0;i<ops.length;i++){
			if (ops[i] == '+' || ops[i]== '-'){
				var num = nums.join('');
				final.push(num);
				final.push(ops[i]);
				j=0;
				nums = [];
				continue;
			}
			nums.push(ops[i]);

		}
		var num = nums.join('');
		final.push(num);


		var re = eval(final.join(' '));
		$(".res").append("<br>"+re);

	});


	$(".ac").click(function(){
	document.getElementById('res').innerHTML = '';
		});