var canvas;
var music, blue, pink, green, red, ball, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    blue = createSprite(0,580,360,30);
    blue.shapeColor = "blue";
    green = createSprite(295,580,200,30);
    green.shapeColor = "green";
    red = createSprite(515,580,200,30);
    red.shapeColor = "red";
    pink = createSprite(740,580,220,30);
    pink.shapeColor = "pink";

    //create box sprite and give velocity

    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "black";
    ball.velocityX = 4;
    ball.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();
    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(blue.isTouching(ball) && ball.bounceOff(blue)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(green.isTouching(ball)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if(red.isTouching(ball) && ball.bounceOff(red)){
        ball.shapeColor = "red";
    }
    if(pink.isTouching(ball) && ball.bounceOff(pink)){
        ball.shapeColor = "pink";
    }
    drawSprites();
}
