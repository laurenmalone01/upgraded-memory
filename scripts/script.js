
$(document).ready(function(){ 
  console.log("doc is ready");

  $("#btnGetFacts").click(function (){

    // if (typeof userName !== 'string'){
    //   let coolFacts='not string';
    //   return coolFacts;
    // }
  
      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName);
      
        $("#coolNameFactsOutput").html(coolFacts);
        
      });

});

function generateCoolNameFacts(userName){
  let coolFacts='';


  coolFacts = nameLength(userName);
  coolFacts += "<h4>" + nameStart(userName) + "</h4>";
  coolFacts += "<h4>" + nameEnd(userName) + "</h4>";
  coolFacts += "<h4>" + nameReverse(userName) + "</h4>";
  coolFacts += "<h4>" + nameBand(userName) + "</h4>";
  return coolFacts;
}

function nameLength(name){
  return "Your name is " + name.length + " letters long";
}

function nameStart(name){
  return "The First letter is " + name.charAt(0);
}

function nameEnd(name){
  let lastIndex = name.length - 1
  return "The Last letter of your name is " + name[lastIndex]
}

function nameReverse(name){
  return "I put my thing down, flip it and reverse it: " + name.split("").reverse().join("");
}

// function nameBand(name){
//   let namelong = name.length;
//   if (namelong >5){
//     return "you should listen to Queen" + howlong;
//   }
//   else{

//   }

    
//   }


//$ = jquery's way of naming stuff
//$(...) = what's inside () is the "object" we are messing with
// .ready() = method of $jQ
// .ready(...) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediate Invoked F/n Expression