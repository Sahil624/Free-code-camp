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
		$(".result").append('<div class="row on ch"><div class="col-md-4"><img class="img-responsive" src="'+data["stream"]["channel"]["logo"]+'"></div>'+'<div class="col-md-4">'+data["stream"]["channel"]["display_name"]+'</div><div class="col-md-4">'+data["stream"]["channel"]["status"]+'</div></div>')

}
	else{
		$(".result").append('<div class="row off ch"><div class="col-md-4"><img class="img-responsive" src="https://i.ytimg.com/vi/l9Grl4b8b54/hqdefault.jpg"></div>'+'<div class="col-md-4">'+channels[ind]+'</div><div class="col-md-4">Offline</div></div>');
		console.log("nope"+" ---->"+i);
		console.log(channels[ind]);
	}
	ind++;
	}
});
}
//document.write(channelobj[1]);
// document.write('<img class="img-responsive" src="'+channelobj[7]["streams"]["logo"]+'">');
// for(var i=0;i<channelobj.length;i++){
// 	$(".result").append('<div class="col-md-4"><img class="img-responsive" src="'+channelobj[i]["streams"]["logo"]+'"></div>')
// }

 	console.log(channelobj);