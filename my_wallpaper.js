/**
 * HAND IN
 * code needs 1 if statement and 5 parameters
 */


//your parameter variables go here!

let cat_fur_color = "#fffff";  // Change the color of the cat's face

let cat_whiskers = true  // if statement for turning on or off whiskers

let cat_blush = true // if statement for turning on or off blush

let cat_eye_colour = "#5ebad1"  //Change the color of the cat's eye

let fish = true  // if statement for turning on or off fish

let rhomboid = false // if statement for turning on or off rhomboid

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(244, 245, 220); //light honeydew green colour
   // Three-digit hex RGB notation.
   
   fill('#fae');
 
   describe('A pink square with a black outline.');
 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  

  if (cat_whiskers){
  //Left whiskers
  fill(20);
  line(55,110,80,120);//top
  line(55,130,80,130);//middle
  line(57,150,80,140);//nether

  //Right whiskers
  fill(20);
  line(160,120,185,110);//top
  line(160,130,185,130);//middle
  line(160,140,185,150);//nether
  }

  
  // Ear
  noStroke();
  fill(80); //gray
  triangle(71, 110, 85, 53, 109, 75);//Left
  triangle(169, 110, 135, 73, 160, 55);//Right
  
  // Face
  fill(cat_fur_color); //colour
  ellipse(120, 120, 100, 100); 

  // Mouth
  fill(50);//black
  line(120, 140, 115, 150); // Left
  line(120, 140, 125, 150); // Righ

  // Eye
  fill(cat_eye_colour);
  ellipse(100, 120, 20, 30); // Left
  ellipse(140, 120, 20, 30); // Right
  //Pupil
  fill(50);
  ellipse(98, 118, 15, 19); // Left
  ellipse(138, 118, 15, 19); // Right
  //Highlights
  fill(300)
  ellipse(95, 119, 3, 6); //Left
  ellipse(135, 119, 3, 6);//Right
  
  // Nose
  fill(255, 182, 193);//Light pink
  triangle(113, 130, 120, 140, 128, 130);

  // Mouth
  fill(50);//black
  line(120, 140, 115, 150); // Left
  line(120, 140, 125, 150); // Right
 
  if (fish){
  //Fish
  noStroke();
  fill(300);
  ellipse(60, 25, 70, 30);
  triangle(10, 10, 35, 25, 10, 40);
  fill(200);
  ellipse(60, 22.2, 66, 24);
  fill(20);
  ellipse(83, 25, 5);
  }
  

  if (rhomboid){
  fill(255, 204, 100);
  quad(50, 80, 70, 50, 50, 20, 30, 50);
  }


  if (cat_blush){
  // Cheek blush
  fill(255, 182, 193); // Light pink
  ellipse(95, 140, 20, 10); // Left
  ellipse(145, 140, 20, 10); // Right
  }





}


 
  


