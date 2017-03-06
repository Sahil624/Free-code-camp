//5a71jfvu06a7t0j7a9d8afifgcbq6s
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var channelobj=[];

for(var i=0;i<channels.length;i++){
	var ind =0;
$.ajax({
	type:"GET",
	url:"https://api.twitch.tv/kraken/streams/" + channels[i],
	headers:{
		"Client-ID":"5a71jfvu06a7t0j7a9d8afifgcbq6s"
	},

	success:function(data){
		channelobj.push(data);
		if (data["stream"]){
		$(".result").append('<a href="' + data["stream"]["channel"]["url"] + '"><div class="row on ch"><div class="col-md-4"><img class="img-responsive" src="'+data["stream"]["channel"]["logo"]+'"></div>'+'<div class="col-md-4">'+data["stream"]["channel"]["display_name"]+'</div><div class="col-md-4">'+data["stream"]["channel"]["status"]+'</div></div></a>')

}
	else{
		$(".result").append('<a href="https://www.twitch.tv/' + channels[ind] + '"><div class="row off ch"><div class="col-md-4"><img class="img-responsive" src="https://i.ytimg.com/vi/l9Grl4b8b54/hqdefault.jpg"></div>'+'<div class="col-md-4">'+channels[ind]+'</div><div class="col-md-4">Offline</div></div></a>');
	}
	ind++;
	}
});
}


 	console.log(channelobj);