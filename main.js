var canvas = new fabric.Canvas(myCanvas) ;
var block_img_width = 30 ; 
var block_img_height = 30 ; 
var player_x = 10 ;
var player_y = 10 ;
var player_object = " " ;
var block_img_object = " " ;

function player_update()
{
    fabric.img.fromURL("player.png" , function (img)
    {
        player_object = img ;
        player_object.scaleToWidth( 150 ) ; 
        player_object.scaleToHeight( 150 ) ;
        player_object.set(
        {
            top : player_y , left : player_x 
        }
         ) ;

        canvas.add(player_object) ;

    }
    ) ;
}
function new_img(get_img)
{
    fabric.img.fromURL(get_img , function (img)
    {
        block_img_object = img ;
        block_img_object.scaleToWidth( block_img_width ) ; 
        block_img_object.scaleToHeight( block_img_height ) ;
        block_img_object.set(
        {
            top : player_y , left : player_x 
        }
         ) ;

        canvas.add(block_img_object) ;

    }
    ) ;
}
window.addEventListener("keydown" , mykeydown) ;
function mykeydown(e)
{
    keyPressed = e.keycode ;
    console.log(keyPressed) ; 
        if(e.shiftKey == true && keyPressed == 80)
        {
            console.log("p and shift pressed together") ;
            block_img_width = block_img_width + 10 ;
            block_img_height = block_img_height  + 10 ;
            document.getElementById("current_width").innerHTML = block_img_width ;
            document.getElementById("current_height").innerHTML = block_img_height ;
        }

        if(e.shiftKey == true && keyPressed == 77)
        {
            console.log("m and shift pressed together") ;
            block_img_width = block_img_width - 10 ;
            block_img_height = block_img_height - 10 ;
            document.getElementById("current_width").innerHTML = block_img_width ;
            document.getElementById("current_height").innerHTML = block_img_height ;
        }

         if(keyPressed == '71')
         {
               new_img("ground.png") ;
               console.log("g") ;
         }

         if(keyPressed == '87')
         {
               new_img("wall.jpg") ;
               console.log("w") ;
         }

         if(keyPressed == '76')
         {
               new_img("light_green.png") ;
               console.log("l") ;
         }

         if(keyPressed == '84')
         {
               new_img("trunk.jpg") ;
               console.log("t") ;
         }

         if(keyPressed == '82')
         {
               new_img("roof.jpg") ;
               console.log("r") ;
         }

         if(keyPressed == '89')
         {
               new_img("yellow_wall.png") ;
               console.log("y") ;
         }

         if(keyPressed == '68')
         {
               new_img("dark_green.png") ;
               console.log("d") ;
         }

         if(keyPressed == '85')
         {
               new_img("unique.png") ;
               console.log("u") ;
         }

         if(keyPressed == '67')
         {
               new_img("cloud1.jpg") ;
               console.log("c") ;
         }

         if(keyPressed == '37')
         {
               left() ;
               console.log("left arrow key") ;
         }

         if(keyPressed == '38')
         {
               up() ;
               console.log("up arrow key") ;
         }

         if(keyPressed == '39')
         {
               right() ;
               console.log("right arrow key") ;
         }

         if(keyPressed == '40')
         {
               down() ;
               console.log("down arrow key") ;

         }
}

function up()
{
    if(player_y >= 0)
    {
        player_y = player_y - block_img_height ;
        console.log("block_img_height = " + block_img_height) ;
        console.log("when up arrow key is pressed, x = " + player_x + ", y = " + player_y) ;
        canvas.remove(player_object) ;
        player_update() ;
    }
}

function down()
{
    if(player_y <= 500)
    {
        player_y = player_y + block_img_height ;
        console.log("block_img_height = " + block_img_height) ;
        console.log("when down arrow key is pressed, x = " + player_x + ", y = " + player_y) ;
        canvas.remove(player_object) ;
        player_update() ;
    }
}

function right()
{
    if(player_x <= 800)
    {
        player_x = player_x + block_img_width ;
        console.log("block_img_width = " + block_img_width) ;
        console.log("when right arrow key is pressed, x = " + player_x + ", y = " + player_y) ;
        canvas.remove(player_object) ;
        player_update() ;
    }
}

function left()
{
    if(player_x >= 0)
    {
        player_x = player_x + block_img_width ;
        console.log("block_img_width = " + block_img_width) ;
        console.log("when left arrow key is pressed, x = " + player_x + ", y = " + player_y) ;
        canvas.remove(player_object) ;
        player_update() ;
    }
}