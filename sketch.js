var database;
var gameState=0;
var playerCount;
var player;
var game;
var form;
var allPlayers;

function setup(){
  database=firebase.database();
  createCanvas(400,400)
  game= new Game();
  game.getState();
  game.start();
  form= new Form();;
  
}
function draw(){
  if(playerCount===4){
    Game.update(1);    
  }
  if(gameState===1){
    game.play();
  }
}