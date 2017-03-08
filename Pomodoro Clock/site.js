var defmin = 25;
var defsec = 0;



	
/***************************************************************/
function minc(){
	defmin++;
	display();
	document.getElementById('min').innerHTML = defmin;
};

function mdec(){
	defmin--;
	display();
};

function sinc(){
	defsec++;
	display();
	document.getElementById('min').innerHTML = defmin;
};

function sdec(){
	defsec--;
	display();
};
/**********************************************************/






function display(){
document.getElementById('sec').innerHTML = defsec;
document.getElementById('min').innerHTML = defmin;
};

function count(){
if(defmin == 0){
	document.getElementById('min').innerHTML = 0;
	document.getElementById('sec').innerHTML = 0;
	return 0;
}

if(defsec ==0){
	defsec = 60;
	defmin--;
	document.getElementById('min').innerHTML = defmin;
}
document.getElementById('sec').innerHTML = defsec--;
	t = setTimeout(count,1000);


};

$('.pause').click(function(){
	clearInterval(t);
})

$('.reset').click(function(){
	clearInterval(t);
	defmin=25;
	defsec=0;
	display();
});