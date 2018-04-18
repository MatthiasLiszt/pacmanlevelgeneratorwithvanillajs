


function consoleLevel(x){
  for(var i=0;i<12;++i)
   {
   	console.log(x[i*2]);
   	console.log(x[i*2+1]);
   }	
}

function fillPacmanLevel(x){
 var ll;
 var newLevel=[];
 var PacLevel=document.getElementById("paclevel");
 for(var i=0;i<x.length;++i)
  {
    ll=x[i].split('');
    //console.log(ll);
  	for(var j=0;j<ll.length;++j)
  	 {if(ll[j]=='x'){
        newLevel.push("<div class='wall'></div>");   
  	   }
  	  if(ll[j]=='o'){
        newLevel.push("<div class='path'><div class='cookie'></div></div>");   
  	   }  
     }	
  }	
  newPacLevel=newLevel.join('');
  //console.log(newPacLevel);
  PacLevel.innerHTML=newPacLevel;
}

function generatePacmanLevel(){
  
  var level=[],k,kk;
  var wallsection=[],walksection=[];
  
  for(var i=0;i<12;++i)
   {
    for(var j=0;j<40;++j){
      walksection[j]="o";
      wallsection[j]="x";
     }
    
    k=Math.floor(Math.random()*21);
    wallsection[0]=wallsection[39]="o";
    for(var l=0;l<k;++l)
     {kk=Math.floor(Math.random()*38);
      wallsection[kk]='o';	
     }	
    level[i*2]=walksection.join('');
    level[i*2+1]=wallsection.join('');
     
   } 
  console.log("pacman level generated");
  //consoleLevel(level);
  fillPacmanLevel(level);
} 