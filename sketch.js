var database;
var playercount=0;
var gamestate=0;
var form;
var player;
var game;
var allplayers;
var car1,car2,car3,car4,cars;

function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
   
    database=firebase.database()
    game=new Game()
    game.Getstate()
    game.start()
    
}

function draw(){
    background("white");
    if(playercount===4){
        game.updatestate(1)
    }
    if(gamestate===1){
        clear()
        game.play()
    }
}

