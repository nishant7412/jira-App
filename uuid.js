function makeid(){
    var text="";
    var possible="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789 ";

    for( var i=0;i<6;i++)
        text+=possible.charAt(Math.floor(Math.random()*possible.length));
 
    return text;
}

function uuidv4(){
  return makeid();
}