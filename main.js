var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
window.addEventListener("keydown", myKeydown);
function myKeydown(e){ 
    keyPress=e.keyCode;
    console.log(keyPress);
    if(e.shiftKey == true && keyPress == '80'){
        console.log('Shift+p');
        block_image_width= block_image_width+10;
        block_image_height= block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    console.log(keyPress);
    if(e.shiftKey == true && keyPress == '77'){
        console.log('Shift+m');
        block_image_width= block_image_width-10;
        block_image_height= block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPress=='38'){
        up();
        console.log("up");
    }
    if(keyPress=='40'){
        down();
        console.log("down");
    }
    if(keyPress=='37'){
        left();
        console.log("left");
    }
    if(keyPress=='39'){
        right();
        console.log("right");
    }
    if(keyPress=='84'){
        newImage('trunk.jpg');
        console.log("t");
    }
    if(keyPress=='68'){
        newImage('dark_green.png');
        console.log("d");
    }
    if(keyPress=='76'){
        newImage('light_green.png');
        console.log("l");
    }
    if(keyPress=='71'){
        newImage('ground.png');
        console.log("g");
    }
    if(keyPress=='87'){
        newImage('wall.jpg');
        console.log("w");
    }
    if(keyPress=='89'){
        newImage('yellow_wall.png');
        console.log("y");
    }
    if(keyPress=='82'){
        newImage('roof.jpg');
        console.log("r");
    }
    if(keyPress=='67'){
        newImage('cloud.jpg');
        console.log("c");
    }
    if(keyPress=='85'){
        newImage('unique.png');
        console.log("u");
    }
}
function newImage(get_Image){
    fabric.Image.fromURL(get_Image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    }); 
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block height = " +block_image_height + ",Player's y = " + player_y + ",Player's x = " + player_x + ",block height = " + block_image_width);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("block height = " +block_image_height + ",Player's y = " + player_y + ",Player's x = " + player_x + ",block height = " + block_image_width);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        console.log("block height = " +block_image_height + ",Player's y = " + player_y + ",Player's x = " + player_x + ",block height = " + block_image_width);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        console.log("block height = " +block_image_height + ",Player's y = " + player_y + ",Player's x = " + player_x + ",block height = " + block_image_width);
        canvas.remove(player_object);
        player_update();
    }
}