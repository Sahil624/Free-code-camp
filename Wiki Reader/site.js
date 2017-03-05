 function search(){
 document.getElementById("result").innerHTML = '';
$( ".form" ).addClass( "form-active" );
$( ".input" ).addClass( "input-active" );
$( ".button" ).addClass( "button-active" );
$( ".form-active" ).removeClass( "form" );
$( ".input-active" ).removeClass( "input" );
$( ".button-active" ).removeClass( "button" );
$(".random").hide();

 $.ajax({
	    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $("#search").val(),
	    dataType: 'jsonp',
	    type: 'POST',
	    headers: {
	      'Api-User-Agent': 'Example/1.0'
	    },
	    success: function(data) {
	    for(var i=0;i<data["query"].search.length;i++){
	    $(".result").append('<div class="data thumbnail col-md-8">'+ data["query"].search[i]["title"]+"<br>"+data["query"].search[i]["snippet"]+'<br><a href="https://en.wikipedia.org/wiki/'+data["query"].search[i]["title"]+'">'+data["query"].search[i]["title"]+' -Link</a><br><br></div>');
	}	
	    console.log(data);
		}
    });

};