function qouteGen(){

var qoutes = ["“It's what you learn after you know it all that counts.John Wooden",

"“Don't cry because it's over, smile because it happened.”― Dr. Seuss",

"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe",

"“Be yourself; everyone else is already taken.”― Oscar Wilde",

"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein",

"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch",

"“So many books, so little time.”― Frank Zappa",

"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”― William W. Purkey",

"“A room without books is like a body without a soul.”― Marcus Tullius Cicero",

"“You only live once, but if you do it right, once is enough.”― Mae West"
];

var no = Math.random()*10;
no = Math.floor(no);

qoute = qoutes[no];

document.getElementById("qt").innerHTML = qoute;
}
