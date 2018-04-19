
var pacmanPositionX,pacmanPositionY;
var ghost1PositionX,ghost1PositionY;
var ghost2PositionX,ghost2PositionY;


function placePacman(){
 var x,y;
 var i=0;
 var id=[];

 do
  {x=Math.floor(Math.random()*40);
   y=Math.floor(Math.random()*24);
   id.push("x"+x+"y"+y);
   ++i;
  }
 while(document.getElementById(id[i-1]).className=="wall");
 document.getElementById(id[i-1]).innerHTML="<div id='pacman'></div>";
 console.log("pacman placed at "+id[i-1] );
 pacmanPositionX=x;
 pacmanPositionY=y;
}

function placeGhost1(){
 var x,y;
 var i=0;
 var id=[];
 var mobs;
 var wall;
 do
  {x=Math.floor(Math.random()*40);
   y=Math.floor(Math.random()*24);
   id.push("x"+x+"y"+y);
   ++i;
   mobs=(x==pacmanPositionX)&&(y==pacmanPositionY);
   wall=(document.getElementById(id[i-1]).className=="wall");
  }
 while(wall||mobs);
 document.getElementById(id[i-1]).innerHTML="<div id='ghost1'></div>";
 console.log("ghost1 placed at "+id[i-1] );
 ghost1PositionX=x;
 ghost1PositionY=y;
}

function placeGhost2(){
 var x,y;
 var i=0;
 var id=[];
 var mobs;
 var wall;

 do
  {x=Math.floor(Math.random()*40);
   y=Math.floor(Math.random()*24);
   id.push("x"+x+"y"+y);
   ++i;
   mobs=(x==pacmanPositionX)&&(y==pacmanPositionY)&&(x==ghost1PositionX)&&(y==ghost1PositionY);
   wall=(document.getElementById(id[i-1]).className=="wall");
  }
 while(wall||mobs);
 document.getElementById(id[i-1]).innerHTML="<div id='ghost2'></div>";
 console.log("ghost1 placed at "+id[i-1] );
 ghost2PositionX=x;
 ghost2PositionY=y;
}


function placeMobs(){
 placePacman();
 placeGhost1();
 placeGhost2();
} 

